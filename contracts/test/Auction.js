const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Auction", function () {
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Auction = await ethers.getContractFactory("Auction");
    const auction = await Lock.deploy();

    return { lock, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { lock, unlockTime } = await loadFixture(deployFixture);

      expect(await lock.unlockTime()).to.equal(unlockTime);
    });
  });

  describe("Functions", function() {
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