const WCELO = "0xdf1d724a7166261eeb015418fe8c7679bbea7fd6";
const USDT = "0x0a094361031ff2515bf98767ce228e28bdd2a112";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "celo-alfajores",
  wNativeAddress: WCELO,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 19784362,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WCELO, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 20210843,
    stableCoins: [USDT],
    whitelistAddresses: [WCELO, USDT],
    nonfungiblePositionManagerAddress: "0x794f343435c597df5609f8fd1c7defeac625174e",
    nonfungiblePositionManagerStartBlock: 20731180,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
