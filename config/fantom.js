const WFTM = "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83";
const gfUSDT = "0x940f41f0ec9ba1a34cf001cc03347ac092f5f6b5";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "fantom",
  wNativeAddress: WFTM,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 68151135,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WFTM, gfUSDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 8456536,
    stableCoins: [gfUSDT],
    whitelistAddresses: [WFTM, gfUSDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 8457197,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
