const WMATIC = "0x0a094361031ff2515bf98767ce228e28bdd2a112"
const USDT = "0x8c838a8ca0972e9d51f5b9fd3adf59d85be21688"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "polygon-mumbai",
  wNativeAddress: WMATIC,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 39942625,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WMATIC, USDT],
    minETHLocked: 1,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 40689936,
    stableCoins: [USDT],
    whitelistAddresses: [WMATIC, USDT],
    nonfungiblePositionManagerAddress: "0x7569a77f0366d4408bd43973c28cc313d92b4c7c",
    nonfungiblePositionManagerStartBlock: 40690179,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8792225,
  },
}
