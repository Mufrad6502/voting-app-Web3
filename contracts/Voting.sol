// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Party {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Party) public parties;
    uint public partiesCount;
    mapping(address => bool) public hasVoted;

    event Voted(address voter, uint partyId);

    constructor(string[] memory partyNames) {
        for(uint i = 0; i < partyNames.length; i++) {
            partiesCount++;
            parties[partiesCount] = Party(partiesCount, partyNames[i], 0);
        }
    }

    function vote(uint partyId) external {
        require(!hasVoted[msg.sender], "Already voted");
        require(partyId > 0 && partyId <= partiesCount, "Invalid party");
        parties[partyId].voteCount += 1;
        hasVoted[msg.sender] = true;

        emit Voted(msg.sender, partyId);
    }
}
