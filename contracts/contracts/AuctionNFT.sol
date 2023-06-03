// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract AuctionNFT is ERC721, Ownable {
    uint256 public tokenCounter;
    mapping(uint256 => string) public tokenIdToIpfsHash;
    mapping(uint256 => Traits) public tokenIdToTraits;

    struct Traits {
        uint8 trait1;
        uint8 trait2;
        // add more traits here
    }

    constructor() ERC721("MyNFT", "MNFT") {
        tokenCounter = 0;
    }

    function createNFT(string memory _ipfsHash, uint8 _trait1, uint8 _trait2) public onlyOwner returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(msg.sender, newTokenId);
        tokenIdToIpfsHash[newTokenId] = _ipfsHash;
        tokenIdToTraits[newTokenId] = Traits(_trait1, _trait2);
        tokenCounter = tokenCounter + 1;
        return newTokenId;
    }
}
