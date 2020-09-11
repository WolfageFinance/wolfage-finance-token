var BurnManager = artifacts.require("BurnManager");

module.exports = function (deployer, network, accounts) {
  console.log(`  Deploying BurnManager Contract on ${network}:`);
  console.log(`  - Deployer           = ${accounts[0]}`);

  const wefi_token = "0x31735f0292D42801dce3b0f83B0d9A09bFf75b07";
  return deployer.deploy(BurnManager, wefi_token);
};
