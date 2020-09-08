var Wefi = artifacts.require("Wefi");
var TokenTimelock = artifacts.require("TokenTimelock");

module.exports = function (deployer, network, accounts) {
  var multisig_beneficiary = "0x3091706C033ddA77A70cBEfDD8EdbE93151D68Fa";
  var releaseDelay = 864000;
  var releaseTime = 1631113200; // Wednesday, 8 September 2021 15:00:00, 1 year from Pre-sale

  console.log(`  Deploying WEFI ERC20 Token Contract on ${network}:`);
  console.log(`  - Deployer           = ${accounts[0]}`);

  deployer.deploy(Wefi, multisig_beneficiary).then(function () {
    console.log(`  Deploying Token Timelock Contract on ${network}:`);
    console.log(`  - WEFI Token Address = ${Wefi.address}`);
    console.log(`  - Deployer           = ${accounts[0]}`);
    console.log(`  - Release Time       = ${releaseTime}`);
    console.log(`  - Release Delay      = ${releaseDelay}`);

    return deployer.deploy(
      TokenTimelock,
      Wefi.address,
      multisig_beneficiary,
      releaseTime,
      releaseDelay
    );
  });
};
