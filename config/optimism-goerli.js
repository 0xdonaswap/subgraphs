const WETH = "0x0216a640c4d53f2a6603042d4e14a2b890efcd45";
const USDT = "0x0a094361031ff2515bf98767ce228e28bdd2a112";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "optimism-goerli",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 14467683,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 15431834,
    stableCoins: [USDT],
    whitelistAddresses: [WETH, USDT],
    nonfungiblePositionManagerAddress: "0x7569a77f0366d4408bd43973c28cc313d92b4c7c",
    nonfungiblePositionManagerStartBlock: 15432726,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
