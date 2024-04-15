const WETH = "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6"
const USDT = "0xb44DFD33a02DD87a5A16544F39391deC8DC235a0"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "boba-goerli",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 154989,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 155065,
    stableCoins: [USDT],
    whitelistAddresses: [WETH, USDT],
    nonfungiblePositionManagerAddress: "0x2921Cc3377C717B600468cfaB437a83C2dE5039d",
    nonfungiblePositionManagerStartBlock: 155150,
    minETHLocked: 1,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 2948222,
  },
}
