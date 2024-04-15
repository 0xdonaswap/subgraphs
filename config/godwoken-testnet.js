const WPCKB = "0x35060f7803ef7763b77e4ef0082bc0bcf2654154";
const USDT = "0x853154e2A5604E5C74a2546E2871Ad44932eB92C";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "godwoken-testnet",
  wNativeAddress: WPCKB,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 8455822,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WPCKB, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 8456536,
    stableCoins: [USDT],
    whitelistAddresses: [WPCKB, USDT],
    nonfungiblePositionManagerAddress: "0x2921Cc3377C717B600468cfaB437a83C2dE5039d",
    nonfungiblePositionManagerStartBlock: 8457197,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
