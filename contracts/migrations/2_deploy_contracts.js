const MobAgr = artifacts.require("./Agriculture.sol");

module.exports = function (deployer) {
    deployer.deploy(MobAgr);
};