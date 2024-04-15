const WETH = "0xdf1d724a7166261eeb015418fe8c7679bbea7fd6"
const USDC = "0x179522635726710dd7d2035a81d856de4aa7836c"
const USDT = "0xd81ad778fb32ea7bc4c660e3236100c70762ccfb"
const ARB = "0xbe737d08fb505ad45e08a89ac7fda9791f025bf2"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "arbitrum-goerli",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 40570598,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDC, ARB, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 45071748,
    stableCoins: [USDT, USDC],
    whitelistAddresses: [WETH, USDC, ARB, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 45138218,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 105053701,
  },
}
