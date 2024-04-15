const WETH = "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f"
const USDC = "0x176211869ca2b568f2a7d4ee941e073a821ee1ff"
const WBTC = "0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4"
const USDT = "0xa219439258ca9da29e9cc4ce5596924745e12b93"
const DAI = "0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5"
const BUSD = "0x7d43AABC515C356145049227CeE54B608342c0ad"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "linea",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 1439,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDC, WBTC, USDT, DAI, BUSD],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 1444,
    stableCoins: [USDC, USDT, DAI, BUSD],
    whitelistAddresses: [WETH, USDC, WBTC, USDT, DAI, BUSD],
    nonfungiblePositionManagerAddress: "0x2921Cc3377C717B600468cfaB437a83C2dE5039d",
    nonfungiblePositionManagerStartBlock: 1459,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
}
