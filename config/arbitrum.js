const WETH = "0x82af49447d8a07e3bd95bd0d56f35241523fbab1";
const USDT = "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9";
const USDC = "0xaf88d065e77c8cc2239327c5edb3a432268e5831";
const USDCe = "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8";
const WBTC = "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f";
const DAI = "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "arbitrum",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 129930845,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT, USDC, USDCe, WBTC, DAI],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 136869578,
    stableCoins: [USDT, USDC, USDCe, DAI],
    whitelistAddresses: [WETH, USDT, USDC, USDCe, WBTC, DAI],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 136870519,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 105053701,
  },
};
