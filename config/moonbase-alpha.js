const WDEV = "0x0216a640c4d53f2a6603042d4e14a2b890efcd45";
const USDT = "0xdf1d724a7166261eeb015418fe8c7679bbea7fd6";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "moonbase",
  wNativeAddress: WDEV,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 5097870,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WDEV, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 5257238,
    stableCoins: [USDT],
    whitelistAddresses: [WDEV, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 5257393,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
