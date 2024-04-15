const WETH = "0x35060f7803eF7763b77E4EF0082bc0bCf2654154";
const USDT = "0x0FCb226Ce65dd93fE2D5279649f1E8841F731489";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "holesky",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 8455822,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WHT, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 58567,
    stableCoins: [USDT],
    whitelistAddresses: [WETH, USDT],
    nonfungiblePositionManagerAddress: "0xF821F474FFE125674e781A56FcaE8be0f7367F74",
    nonfungiblePositionManagerStartBlock: 177129,
    minETHLocked: 30,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8744672,
  },
};
