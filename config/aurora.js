const WETH = "0x0216a640c4d53f2a6603042d4e14a2b890efcd45"
const USDT = "0x4988a896b1227218e4A686fde5eabdcabd91571f"
const USDC = "0xb12bfca5a55806aaf64e99521918a4bf0fc40802"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "aurora",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 103002741,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT, USDC],
    minETHLocked: 1,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 103003665,
    stableCoins: [USDT, USDC],
    whitelistAddresses: [WETH, USDT, USDC],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 103003803,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8792225,
  },
}
