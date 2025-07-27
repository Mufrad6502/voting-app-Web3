async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const partyNames = ["Party A", "Party B", "Party C"];
  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(partyNames);
  await voting.deployed();

  console.log("Voting contract deployed to:", voting.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
