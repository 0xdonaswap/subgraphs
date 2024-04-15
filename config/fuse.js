const WFUSE = "0x0be9e53fd7edac9f859882afdda116645287c629";
const USDT = "0xfadbbf8ce7d5b7041be672561bba99f79c532e10";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "fuse",
  wNativeAddress: WFUSE,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 25858516,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WFUSE, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 25858644,
    stableCoins: [USDT],
    whitelistAddresses: [WFUSE, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 25858655,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
