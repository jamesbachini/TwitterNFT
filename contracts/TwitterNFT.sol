// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

   /*⬣ ⬢ ⬣*\
  ⬣  🐣 🐣  ⬣
 ⬣ TwitterNFT ⬣
⬢    v1 by     ⬢
 ⬣  James     ⬣
  ⬣  Bachini ⬣
   \*⬣ ⬢ ⬣*/

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract TwitterNFT is ERC721 {
    uint tokenId;
    mapping(uint => string) images;

    constructor() ERC721("TwitterNFT", "TWIT") {
    }
    
    function mint(string memory _imageURL) public payable {
        _safeMint(msg.sender, tokenId);
        images[tokenId] = _imageURL;
        tokenId += 1;
        if (msg.value > 0) { // optional
            address owner = ownerOf(0);
            payable(owner).transfer(msg.value);
        }
    }

    function tokenURI(uint _tokenId) public view override(ERC721) returns (string memory) {
        string memory json = Base64.encode(bytes(string.concat(
            '{"name": "TWIT", "description": "TwitterNFT", "image": "',
            images[_tokenId],
            '"}'
        )));
        return string(abi.encodePacked('data:application/json;base64,', json));
    }

}