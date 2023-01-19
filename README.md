# Twitter NFT

A simple NFT contract for setting up a hexagonal profile picture in Twitter.

Requirements:
Deploy To Ethereum Mainnet
Twitter Blue Subscription

Based on a standard ERC721 contract using base64 encoding to keep the data within the smart contract and make it as simple as possible to mint a new pfp using just an image URL.

Contract deployed to Ethereum mainnet at: https://etherscan.io/address/0x484Ec30Feff505b545Ed7b905bc25a6a40589181

Doesn't seem to be recognised by Twitter Blue app currently. Maybe a delay or perhaps it doesn't play nice with the base64 encoding. Twitter uses the OpenSea API and it's showing in the wallet on OpenSea so...

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