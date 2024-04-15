const WETH = "0x30ec47f7dfae72ea79646e6cf64a8a7db538915b";
const USDT = "0xc751d479e574647f0f20b1a3a6f5d220b6fd7de3";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "polygon-zkevm-testnet",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 2322058,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 2816169,
    stableCoins: [USDT],
    whitelistAddresses: [WETH, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 2816182,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 1097428,
  },
};
