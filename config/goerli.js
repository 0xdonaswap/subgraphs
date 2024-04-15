const WETH = "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6";
const MOCKB1 = "0x0000000000000000000000000000000000000000";
const MOCKB2 = "0x0000000000000000000000000000000000000000";
const USDC = "0x0000000000000000000000000000000000000000";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "goerli",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 9665332,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDC, USDC],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 9781920,
    stableCoins: [MOCKB1, MOCKB2],
    whitelistAddresses: [MOCKB1, MOCKB2, USDC],
    nonfungiblePositionManagerAddress: "0x93881bb7bf0cdff1919cc9abacdeafd98c43d31d",
    nonfungiblePositionManagerStartBlock: 9781929,
    minETHLocked: 30,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8744672,
  },
};
