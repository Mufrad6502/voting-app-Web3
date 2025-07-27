# 🗳️ Blockchain Voting DApp

A decentralized voting application built with **React** and **Solidity** that connects to the **Ethereum blockchain** via a smart contract. Users can vote for predefined political parties, and all votes are recorded immutably on-chain.

---

## 🚀 Features

- 👨‍💻 Built using **React + Hardhat + Ethers.js**
- ⛓️ Smart contract deployed on Ethereum test network (or local Hardhat node)
- 🗳️ Cast votes securely via MetaMask wallet
- 🔒 One address = one vote (enforced by smart contract)
- 📊 View live vote count for each party

---

## 📁 Project Structure

```
voting-app/
├── contracts/            # Solidity smart contract
├── scripts/              # Deployment scripts
├── client/               # React front-end
│   └── src/
│       ├── VotingApp.js  # Main UI logic
│       ├── VotingABI.json
│       └── ...
├── hardhat.config.js     # Hardhat setup
├── package.json          # Backend & contract dependencies
└── README.md
```

---

## ⚙️ Prerequisites

- Node.js (v16 or later)
- MetaMask extension in your browser
- Hardhat (for local blockchain)
- Git

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/voting-app-Web3.git
cd voting-app-Web3
```

### 2. Install Hardhat and dependencies

```bash
npm install
```

### 3. Compile the smart contract

```bash
npx hardhat compile
```

### 4. Start a local Hardhat blockchain node

```bash
npx hardhat node
```

### 5. Deploy the contract to local node

In a separate terminal:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

This will output the contract address — copy it.

---

## 🧠 Smart Contract Summary

Located in `contracts/Voting.sol`:

- Maintains a mapping of addresses to votes.
- Only allows a single vote per address.
- Keeps vote count for each candidate.

---

## 🎨 Frontend Setup (React)

```bash
cd client
npm install
```

### Update contract address in frontend

In `client/src/VotingApp.js`, replace:

```js
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";
```

with your actual deployed contract address.

### Start the React frontend

```bash
npm start
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing

You can write and run tests using Hardhat:

```bash
npx hardhat test
```

---

## 🌐 Connect to Testnet (Optional)

1. Update `hardhat.config.js` to include Goerli/Polygon/Mumbai testnet.
2. Add private key and Alchemy/Infura URL.
3. Run:

```bash
npx hardhat run scripts/deploy.js --network goerli
```

---

## 🛡️ License

MIT

---

## 🙌 Credits

Built with ❤️ by Mufrad using Ethereum, React, and Hardhat.
