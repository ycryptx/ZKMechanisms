import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Auction, AuctionFactory, AuctionFactory__factory } from "../typechain";
import fs from "fs";
import path from "path";

describe("Auction", function () {
  let auctionFactory: AuctionFactory;
  let deployer: SignerWithAddress;
  this.beforeEach(async () => {
    [deployer] = await ethers.getSigners();
    auctionFactory = await new AuctionFactory__factory(deployer).deploy("0");
  });

  describe("Functions", function () {
    it("it should create an NFT", async () => {
      auction.createNFT();
    });
    it("it should create an auction from the NFT", async () => {
      auction.createAuction();
    });
    it("it should set a price for that auction", async () => {
      const auctionId = 1;
      auction.commitPrice(auctionId);
    });
    it("it should return a list of all auctions", async () => {
      auction.getAllAuctions();
    });
    it("it should bid on an auction", async () => {
      const auctionId = 1;
      auction.bidAuction(auctionId);
    });
    it("it should return a list of all bids for a given auction", async () => {
      const auctionId = 1;
      auction.getAllBids(auctionId);
    });
    it("it should return the max bid for an auction", async () => {
      const auctionId = 1;
      auction.getMaxBid(auctionId);
    });
    it("it should return the winning address for an auction", async () => {
      const auctionId = 1;
      auction.getWinningBid(auctionId);
    });
    it("it should transfer the NFT to the max bid address", async () => {
      const auctionId = 1;
      auction.claimVictory(auctionId);
    });
  });
});
