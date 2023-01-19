# Twitter NFT

A simple NFT contract for setting up a hexagonal profile picture in Twitter.

Requirements:
Deploy To Ethereum Mainnet
Twitter Blue Subscription

Based on a standard ERC721 contract using base64 encoding to keep the data within the smart contract and make it as simple as possible to mint a new pfp using just an image URL.

Contract deployed to Ethereum mainnet at: https://etherscan.io/address/0x484Ec30Feff505b545Ed7b905bc25a6a40589181

It works you can go on Etherscan and mint an NFT by adding an image URL like https://jamesbachini.com/misc/nft.jpg which is what I used for mine. I found that Twitter didn't recognise the NFT initially and I had to transfer it from one account to another. Not sure why that was and might have just been because I had only just deployed the contract but if you are getting a "No NFTs in wallet" message on Twitter, try transferring it to another wallet and connecting that.

## Deployment

```shell
Deployed via remix
```

## Unit Tests

Unit tests are in test/0x1-TwitterNFT.js

```shell
npm install
npx hardhat test
```