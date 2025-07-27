import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import VotingABI from "./VotingABI.json";

const CONTRACT_ADDRESS = "<PASTE_DEPLOYED_CONTRACT_ADDRESS>";

function VotingApp() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [parties, setParties] = useState([]);
  const [account, setAccount] = useState(null);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        await _provider.send("eth_requestAccounts", []);
        const signer = _provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setProvider(_provider);
        const voting = new ethers.Contract(CONTRACT_ADDRESS, VotingABI, signer);
        setContract(voting);

        const count = await voting.partiesCount();
        const _parties = [];
        for (let i = 1; i <= count; i++) {
          const p = await voting.parties(i);
          _parties.push({ id: p.id.toNumber(), name: p.name, votes: p.voteCount.toNumber() });
        }
        setParties(_parties);
      } else {
        alert("Install MetaMask");
      }
    }
    init();
  }, []);

  const castVote = async () => {
    if (!selected) return;
    const tx = await contract.vote(selected);
    await tx.wait();
    alert("Vote cast!");
    window.location.reload();
  };

  return (
    <div>
      <p>Connected account: {account}</p>
      <ul>
        {parties.map(p => (
          <li key={p.id}>
            {p.name} — {p.votes} votes
            <button onClick={() => setSelected(p.id)}>Vote for {p.name}</button>
          </li>
        ))}
      </ul>
      {selected && (
        <div>
          <p>You will vote for party ID {selected}</p>
          <button onClick={castVote}>Confirm Vote</button>
        </div>
      )}
    </div>
  );
}

export default VotingApp;
