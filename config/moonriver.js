const WMOVR = "0xf50225a84382c74cbdea10b0c176f71fc3de0c4d";
const USDT = "0xb44a9b6905af7c801311e8f4e76932ee959c663c";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "moonriver",
  wNativeAddress: WMOVR,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 5107138,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WMOVR, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 5278912,
    stableCoins: [USDT],
    whitelistAddresses: [WMOVR, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 5278942,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
