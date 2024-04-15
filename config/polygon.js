const WMATIC = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
const USDT = "0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
const WBTC = "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "polygon",
  wNativeAddress: WMATIC,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 47371652,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WMATIC, USDT, WBTC],
    minETHLocked: 1,
  },
  v3: {    
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 48172130,
    stableCoins: [USDT],
    whitelistAddresses: [WMATIC, USDT, WBTC],
    nonfungiblePositionManagerAddress: "0x2921Cc3377C717B600468cfaB437a83C2dE5039d",
    nonfungiblePositionManagerStartBlock: 48172279,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8792225,
  },
}
