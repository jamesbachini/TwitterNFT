const { expect } = require("chai");
require("@nomicfoundation/hardhat-chai-matchers")
const { time } = require("@nomicfoundation/hardhat-network-helpers");
let owner, user, nft;

describe("TwitterNFT", function () {
  
  describe("Deployment", function () {
    it("Get Signers", async function () {
      [owner, user] = await ethers.getSigners();
    });

    it("Deploy", async function () {
      const TwitterNFT = await ethers.getContractFactory("TwitterNFT");
      nft = await TwitterNFT.deploy();
      //nft = await TwitterNFT.attach(TwitterNFTAddress);
    });

    it("Check TwitterNFT deployed", async function () {
      const name = await nft.name();
      expect(name).eq('TwitterNFT');
    });

    it("Mint Owner NFT", async function () {
      await nft.mint('https://jamesbachini.com/misc/nft.jpg');
      const chk = await nft.ownerOf(0);
      expect(chk).eq(owner.address);
    });

    it("Check tokenId works", async function () {
      const tokenId = await nft.tokenId();
      expect(tokenId).eq(1);
    });

    it("Check base64 tokenURI works", async function () {
      const tokenURI = await nft.tokenURI(0);
      expect(tokenURI).eq('data:application/json;base64,eyJuYW1lIjogIlRXSVQiLCAiZGVzY3JpcHRpb24iOiAiVHdpdHRlck5GVCIsICJpbWFnZSI6ICJodHRwczovL2phbWVzYmFjaGluaS5jb20vbWlzYy9uZnQuanBnIn0=');
    });

    it("User mints", async function () {
      await nft.connect(user).mint('https://test.com/image.png');
      const chk = await nft.ownerOf(1);
      expect(chk).eq(user.address);
    });

    it("Check base64 tokenURI works", async function () {
      const tokenURI = await nft.tokenURI(1);
      expect(tokenURI).eq('data:application/json;base64,eyJuYW1lIjogIlRXSVQiLCAiZGVzY3JpcHRpb24iOiAiVHdpdHRlck5GVCIsICJpbWFnZSI6ICJodHRwczovL3Rlc3QuY29tL2ltYWdlLnBuZyJ9');
    });

    it("Check optional fees work", async function () {
      const bal1 = await ethers.provider.getBalance(owner.address);
      await nft.connect(user).mint('https://test2.com/image2.png', { value: ethers.utils.parseEther('0.01') });
      const bal2 = await ethers.provider.getBalance(owner.address);
      expect(bal2).gt(bal1);      
    });
  });
});
