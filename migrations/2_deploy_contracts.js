var NFT = artifacts.require("./NFT.sol");

module.exports = function(deployer) {
  deployer.deploy(NFT, "0xd00aab21eee815603f74a8c29038adb3f9919a62", "0xd00aab21eee815603f74a8c29038adb3f9919a62");
};