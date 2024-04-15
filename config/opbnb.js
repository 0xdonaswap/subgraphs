const WBNB = "0x4200000000000000000000000000000000000006"
const USDT = "0x9e5aac1ba1a2e6aed6b32689dfcf62a509ca96f3"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "opbnb-mainnet",
  wNativeAddress: WBNB,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 1708914,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 1721753,
    stableCoins: [USDT],
    whitelistAddresses: [WETH, USDT],
    nonfungiblePositionManagerAddress: "0x46a15b0b27311cedf172ab29e4f4766fbe7f4364",
    nonfungiblePositionManagerStartBlock: 1730685,
    minETHLocked: 1,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
}
