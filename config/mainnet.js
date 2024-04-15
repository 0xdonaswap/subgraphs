const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
const DAI = "0x6b175474e89094c44da98b954eedeac495271d0f"
const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7"
const TUSD = "0x0000000000085d4780b73119b644ae5ecd22b376"
const WBTC = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
const cDAI = "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643"
const cUSDC = "0x39aa39c021dfbae8fac545936693ac917d5e7563"
const EBASE = "0x86fadb80d8d2cff3c3680819e4da99c10232ba0f"
const sUSD = "0x57ab1ec28d129707052df4df418d58a2d46d5f51"
const MKR = "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
const COMP = "0xc00e94cb662c3520282e6f5717214004a7f26888"
const LINK = "0x514910771af9ca656af840dff83e8264ecf986ca"
const SNX = "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"
const YFI = "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"
const INCH1 = "0x111111111117dc0aa78b770fa6a738034120c302"
const yCURVE = "0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8"
const FEI = "0x956f47f50a910163d8bf957cf5846d573e7f87ca"
const MATIC = "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
const AAVE = "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"
const sETH2 = "0xfe2e637202056d30016725477c5da089ab0a043a"
const FLAME = "0x152649ea73beab28c5b49b26eb48f7ead6d4c898"
const fraxETH = "0x5e8422345238f34275888049021821e8e08caa1f"

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "mainnet",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 18100593,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDC, WBTC, USDT, DAI, BUSD],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 18244533,
    stableCoins: [DAI, USDC, USDT, TUSD, FEI],
    whitelistAddresses: [WETH, DAI, USDC, USDT, TUSD, WBTC, cDAI, cUSDC, EBASE, sUSD,
      MKR, COMP, LINK, SNX, YFI, INCH1, yCURVE, FEI, MATIC, AAVE, sETH2, FLAME, fraxETH],
    nonfungiblePositionManagerAddress: "0x2921Cc3377C717B600468cfaB437a83C2dE5039d",
    nonfungiblePositionManagerStartBlock: 18244551,
    minETHLocked: 5,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 16945103,
  },
}
