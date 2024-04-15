const WAVAX = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"
const USDT = "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7"
const USDC = "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "avalanche",
  wNativeAddress: WAVAX,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 35003547,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WAVAX, USDT, USDC],
    minETHLocked: 1,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 35889923,
    stableCoins: [USDT, USDC],
    whitelistAddresses: [WAVAX, USDT, USDC],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 35890091,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8792225,
  },
}
