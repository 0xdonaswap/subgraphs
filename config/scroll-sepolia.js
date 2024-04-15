const WETH = "0x5300000000000000000000000000000000000004"
const USDC = "0x02a3e7e0480b668bd46b42852c58363f93e3ba5c"
const USDT = "0xdf1d724a7166261eeb015418fe8c7679bbea7fd6"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "scroll-sepolia",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 650850,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDC, USDT],
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 1334996,
    stableCoins: [USDC],
    whitelistAddresses: [WETH, USDC, USDT],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 1335058,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
}
