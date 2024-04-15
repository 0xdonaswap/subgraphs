const WASTR = "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91"
const USDT = "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "astar",
  wNativeAddress: WASTR,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 4685041,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WASTR, USDT],
    minETHLocked: 1,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 4685471,
    stableCoins: [USDT],
    whitelistAddresses: [WASTR, USDT],
    nonfungiblePositionManagerAddress: "0x2921Cc3377C717B600468cfaB437a83C2dE5039d",
    nonfungiblePositionManagerStartBlock: 4685487,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8792225,
  },
}
