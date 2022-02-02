const main = async () => {
  const Transactions = await hre.ethers.getContractFactory('Transactions');
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log('Transactions deployed to:', transactions.address);
};

const runMain = async () => {
  let EXIT_FLAG = 0;
  try {
    await main();
  } catch (error) {
    console.error(error);
    EXIT_FLAG = 1;
  }
  process.exit(EXIT_FLAG);
};

runMain();
