const WETH = "0x2c1b868d6596a18e32e61b901e4060c872647b6c";
const USDC = "0xf56dc6695cf1f5c364edebc7dc7077ac9b586068";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "linea-testnet",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 703863,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDC],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 710947,
    stableCoins: [USDC],
    whitelistAddresses: [WETH, USDC],
    nonfungiblePositionManagerAddress: "0xacfa791c833120c769fd3066c940b7d30cd8bc73",
    nonfungiblePositionManagerStartBlock: 711068,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
