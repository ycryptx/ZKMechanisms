// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AuctionFactory {
    address public owner;
    ERC721 public nftContract;
    mapping(uint256 => MyAuction) public auctions;
    uint256[] public allTokenIds;

    constructor(address _nftContract) {
        owner = msg.sender;
        nftContract = ERC721(_nftContract);
    }

    function createAuction(uint256 _tokenId) public {
        require(msg.sender == owner, "Only the owner can create auctions");
        require(auctions[_tokenId] == MyAuction(address(0)), "An auction for this NFT already exists");
        MyAuction newAuction = new MyAuction(address(nftContract), _tokenId);
        auctions[_tokenId] = newAuction;
        allTokenIds.push(_tokenId);
    }

    function getAllAuctions() public view returns (MyAuction[] memory) {
        MyAuction[] memory allAuctions = new MyAuction[](allTokenIds.length);
        for (uint256 i = 0; i < allTokenIds.length; i++) {
            allAuctions[i] = auctions[allTokenIds[i]];
        }
        return allAuctions;
    }
}

contract Auction {
    address public owner;
    ERC721 public nftContract;
    uint256 public tokenId;
    uint256 public mechanismCommitment;
    bool public auctionClosed;
    address[] public bidders;
    address public highestBidder; // TODO: remove
    uint256 public highestBid; // TODO: remove
    uint256[] public bids;

    event HighestBidIncreased(address bidder, uint256 amount);
    event AuctionEnded(address winner, uint256 amount);

    constructor(address _nftContract, uint256 _tokenId) {
        owner = msg.sender;
        nftContract = ERC721(_nftContract);
        tokenId = _tokenId;
    }

    function commitToMechanism(uint256 _mechanismCommitment) public {
        require(msg.sender == owner, "Only the owner can set the base price");
        mechanismCommitment = _mechanismCommitment;
    }

    function bid() public payable {
        require(!auctionClosed, "Auction already ended");
        require(msg.value > highestBid, "There already is a higher bid");

        if (highestBid != 0) {
            payable(highestBidder).transfer(highestBid);
        }
        highestBidder = msg.sender;
        highestBid = msg.value;
        emit HighestBidIncreased(msg.sender, msg.value);

        if (msg.value >= basePrice) {
            auctionClosed = true;
            emit AuctionEnded(highestBidder, highestBid);
            nftContract.transferFrom(owner, highestBidder, tokenId);
            payable(owner).transfer(highestBid);
        }
    }

    function getAllBids() public view returns (address[] memory, uint256[] memory) {
        uint256[] memory allBids = new uint256[](bids.length);
        for (uint256 i = 0; i < bidders.length; i++) {
            allBids[i] = bids[bidders[i]];
        }
        return (bidders, allBids);
    }

    function maxBid() public view returns (address, uint256) {
        address maxBidder = address(0);
        uint256 maxBidAmount = 0;
        for (uint256 i = 0; i < bidders.length; i++) {
            if (bids[bidders[i]] > maxBidAmount) {
                maxBidder = bidders[i];
                maxBidAmount = bids[bidders[i]];
            }
        }
        return (maxBidder, maxBidAmount);
    }

    function claimVictory() public payable {
        require(auctionClosed, "The auction is not over yet");
        (address maxBidder, uint256 maxBidAmount) = maxBid();
        require(msg.sender == maxBidder, "You are not the highest bidder");
        require(msg.value == maxBidAmount, "You need to transfer the exact amount of your bid");

        nftContract.transferFrom(owner, msg.sender, tokenId);
        payable(owner).transfer(msg.value);

        for (uint256 i = 0; i < bidders.length; i++) {
            if (bidders[i] != msg.sender) {
                payable(bidders[i]).transfer(bids[bidders[i]]);
            }
        }
    }

    function submitOutcomes(outcomes: [outcome1, zkproof1,....]) {
        let i = 0
        for outcome, zkproof of outcomes {
            assert Verifier.verify(zkproof, bids[i], mechanismCommitment)
            i += 1
        }

    }
}
