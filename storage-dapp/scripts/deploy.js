async function main () {
  // We get the contract to deploy
  const Storage = await ethers.getContractFactory('Storage');
  console.log('Deploying Storage...');
  const storage = await Storage.deploy();
  await storage.waitForDeployment();
  console.log('Storage deployed to:', await storage.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

