const WONE = "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a";
const USDT = "0x9a89d0e1b051640c6704dde4df881f73adfef39a";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "harmony",
  wNativeAddress: WONE,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 47027207,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WONE, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 48188857,
    stableCoins: [USDT],
    whitelistAddresses: [WONE, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 48188888,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
