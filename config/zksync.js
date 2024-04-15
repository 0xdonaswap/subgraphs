const WETH = "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91"
const USDT = "0x493257fd37edb34451f62edf8d2a0c418852ba4c"
const BUSD = "0x2039bb4116b4efc145ec4f0e2ea75012d6c0f181"
const USDC = "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4"
const WBTC = "0xbbeb516fb02a01611cbbe0453fe3c580d7281011"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "zksync",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 8637655,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT, BUSD, USDC, WBTC],
    minETHLocked: 1,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 8639214,
    stableCoins: [USDT, USDC, BUSD],
    whitelistAddresses: [WETH, USDT, BUSD, USDC, WBTC],
    nonfungiblePositionManagerAddress: "0xa815e2ed7f7d5b0c49fda367f249232a1b9d2883",
    nonfungiblePositionManagerStartBlock: 8640657,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8792225,
  },
}
