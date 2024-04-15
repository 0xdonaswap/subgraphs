const WETH = "0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9"
const USDT = "0x1e4a5963abfd975d8c9021ce480b42188849d41d"
const USDC = "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035"
const WMATIC = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
const DAI = "0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "polygon-zkevm",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 5326852,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT, USDC, WMATIC, DAI],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 5958239,
    stableCoins: [USDT, USDC, DAI],
    whitelistAddresses: [WETH, USDT, USDC, WMATIC, DAI],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 5958642,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 1731157,
  },
}
