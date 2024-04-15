const WETH = "0x4200000000000000000000000000000000000006";
const USDbC = "0x853154e2a5604e5c74a2546e2871ad44932eb92c";
const USDT = "0xb44dfd33a02dd87a5a16544f39391dec8dc235a0";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "base-testnet",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 9557991,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDbC, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 10636682,
    stableCoins: [USDbC, USDT],
    whitelistAddresses: [WETH, USDbC, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 10637378,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 2948222,
  },
};
