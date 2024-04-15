const WETH = "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
const WBNB = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
const USDT = "0x55d398326f99059ff775485246999027b3197955"
const BUSD = "0xe9e7cea3dedca5984780bafc599bd69add087d56"
const USDC = "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
const BTCB = "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
const FLAME = "0x0000000000000000000000000000000000000000"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "bsc",
  wNativeAddress: WBNB,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 31591737,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WBNB, USDT, BUSD, USDC, BTCB, WETH, FLAME],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 32174596,
    stableCoins: [USDT, BUSD, USDC],
    whitelistAddresses: [WBNB, USDT, BUSD, USDC, BTCB, WETH, FLAME],
    nonfungiblePositionManagerAddress: "0x2921Cc3377C717B600468cfaB437a83C2dE5039d",
    nonfungiblePositionManagerStartBlock: 32174766,
    minETHLocked: 10,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
