// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Verifier = await ethers.getContractFactory("Verifier");
  // const verifier = await Verifier.deploy();
  // await verifier.deployed();
  // const ZkApp = await ethers.getContractFactory("ZkApp");
  // const zkApp = await ZkApp.deploy(verifier.address);
  // await zkApp.deployed();
  // console.log(zkApp.address);

  try {



    const AuctionNFT = await hre.ethers.getContractFactory("AuctionNFT");
    const auctionNft = await AuctionNFT.deploy();
    await auctionNft.deployed();

    const nftAddress = auctionNft.address;

    console.log(
      `AuctionNFT deployed to ${nftAddress}`
    );

    // const Auction = await hre.ethers.getContractFactory("Auction");
    // const auction = await Auction.deploy(nftAddress);
    // await auction.deployed();

    // const auctionAdd = auction.address;

    // console.log(
    //   `Auction deployed to ${auctionAdd}`
    // );

    const AuctionFactory = await hre.ethers.getContractFactory("AuctionFactory");
    const auctionFactory = await AuctionFactory.deploy(nftAddress);
    await auctionFactory.deployed();

    const factoryAdd = auctionFactory.address;

    console.log(
      `Auction Factory deployed to ${factoryAdd}`
    );

  } catch (error) {
    console.log(error);
  }


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
