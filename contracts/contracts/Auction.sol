// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


interface IVerifier {    
    struct G1Point {
        uint X;
        uint Y;
    }

    struct G2Point {
        uint[2] X;
        uint[2] Y;
    }

    // struct Pairing {
    //     G1Point G1Point;
    //     G2Point G2Point;
    // }

    struct Proof {
        G1Point a;
        G2Point b;
        G1Point c;
    }

    function verifyTx(Proof memory, uint[2] memory) external returns (bool);
}

contract AuctionFactory {
    address public owner;
    ERC721 public nftContract;
    mapping(uint256 => Auction) public auctions;
    uint256[] public allTokenIds;

    event AuctionCreated(uint256 _tokenId);

    constructor(address _nftContract) {
        owner = msg.sender;
        nftContract = ERC721(_nftContract);
    }

    function createAuction(uint256 _tokenId) public {
        require(msg.sender == owner, "Only the owner can create auctions");
        require(auctions[_tokenId] == Auction(address(0)), "An auction for this NFT already exists");
        // Auction newAuction = new Auction(address(nftContract), address(0), _tokenId); // TODO: change to verifier contract address
        Auction newAuction = new Auction(address(nftContract), _tokenId); // TODO: change to verifier contract address
        auctions[_tokenId] = newAuction;
        allTokenIds.push(_tokenId);
        emit AuctionCreated(_tokenId);
    }

}

contract Auction {
    address public owner;
    IVerifier public verifier;
    ERC721 public nftContract;
    uint256 public tokenId;
    uint256 public mechanismCommitment;
    bool public auctionClosed;
    mapping(address => uint) bids;
    address[] orderOfBids;
    // TODO: remove below once zk proving added
    address highestBidder;
    uint highestBid;

    event AuctionEnded(address winner, uint256 amount);

    // constructor(address _nftContract, address _verifier, uint256 _tokenId) {
    constructor(address _nftContract, uint256 _tokenId) {
        owner = msg.sender;
        nftContract = ERC721(_nftContract);
        tokenId = _tokenId;
        // verifier = IVerifier(_verifier);
        highestBidder = msg.sender;
        highestBid = 0;
    }

    function commitToMechanism(uint256 _mechanismCommitment) public {
        require(msg.sender == owner, "Only the owner commit to the auction");
        mechanismCommitment = _mechanismCommitment;
    }

    function bid() public payable {
        require(!auctionClosed, "Auction already ended");
        require(msg.value > 0, "Cannot bid 0 amount");
        require(bids[msg.sender] == 0, "Cannot bid twice");
        bids[msg.sender] = msg.value;
        orderOfBids.push(msg.sender);

        // TODO: remove below once zk proving added
        if (msg.value > highestBid) {
            highestBidder = msg.sender;
            highestBid = msg.value;
        }
    }

    function withdrawBid() public payable {
        require(auctionClosed, "Can only withdraw after auction closes");
        require(msg.sender != highestBidder, "Can only withdraw after auction closes");
        payable(msg.sender).transfer(bids[msg.sender]);
    }

    function submitOutcomes() public payable {
        require(msg.sender == owner, "Only the owner can submit outcomes");

        nftContract.transferFrom(owner, msg.sender, tokenId);
        payable(owner).transfer(highestBid);

        auctionClosed = true;
    }

    // // TODO: make submitOutcomes take as input a snark proof and verify the computation of each user's outcome
    // // pick the first user that has outcome == true
    // function submitOutcomes() {
    //     i = 0;
    //     for outcome, zkproof of outcomes {
    //         assert verifier.verifyTx(zkproof, bids[i], mechanismCommitment)
    //         i += 1
    //     }

    //     nftContract.transferFrom(owner, highestBidder, tokenId);
    // }
}
