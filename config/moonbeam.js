const WGLMR = "0xacc15dc74880c9944775448304b263d191c6077f";
const USDT = "0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "moonbeam",
  wNativeAddress: WGLMR,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 4432948,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WGLMR, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 4603904,
    stableCoins: [USDT],
    whitelistAddresses: [WGLMR, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 4603924,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
