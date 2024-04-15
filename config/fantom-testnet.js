const WFTM = "0x6162e4bd45239416d2ef198f5d03a968182a30e4";
const USDT = "0xc4f4779daf2ccb553439f08b45894735c093acd2";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "fantom-testnet",
  wNativeAddress: WFTM,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 20512291,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WFTM, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 21175634,
    stableCoins: [USDT],
    whitelistAddresses: [WFTM, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 21175788,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8744672,
  },
};
