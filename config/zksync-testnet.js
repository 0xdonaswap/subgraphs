const WETH = "0x02968db286f24cb18bb5b24903ec8ebfacf591c0";
const USDC = "0x0faf6df7054946141266420b43783387a78d82a9";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "zkSync-testnet",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 9053101,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDC],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 9053839,
    stableCoins: [USDC],
    whitelistAddresses: [WETH, USDC],
    nonfungiblePositionManagerAddress: "0xf84697cfe7c88f846e4ba5dae14a6a8f67def5c2",
    nonfungiblePositionManagerStartBlock: 9054587,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8792225,
  },
};
