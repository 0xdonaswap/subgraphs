const WETH = "0x7b79995e5f793a07bc00c21412e50ecae098e7f9";
const USDT = "0x0FCb226Ce65dd93fE2D5279649f1E8841F731489";
const USDC = "0x0000000000000000000000000000000000000000";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "sepolia",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 4254488,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT, USDC],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 4391127,
    stableCoins: [USDT, USDC],
    whitelistAddresses: [WETH, USDT, USDC],
    nonfungiblePositionManagerAddress: "0x93881bb7bf0cdff1919cc9abacdeafd98c43d31d",
    nonfungiblePositionManagerStartBlock: 4391158,
    minETHLocked: 30,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8744672,
  },
};
