const WETH = "0x4200000000000000000000000000000000000006"
const USDCb = "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca"
const DAI = "0x50c5725949a6f0c72e6c4a641f24049a917db0cb"
const cbETH = "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22"
const rETH = "0xb6fe221fe9eef5aba221c348ba20a1bf5e73624c"
const crvUSD = "0x417ac0e078398c154edfadd9ef675d30be60af93"
const USDC = "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "base",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 3791567,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDC, cbETH, rETH, DAI, crvUSD, USDC],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 4842033,
    stableCoins: [USDCb, DAI, crvUSD, USDC],
    whitelistAddresses: [WETH, USDCb, cbETH, rETH, DAI, crvUSD, USDC],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 4842100,
    minETHLocked: 1,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 2948222,
  },
}
