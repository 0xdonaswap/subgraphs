const WCELO = "0x0216a640c4d53f2a6603042d4e14a2b890efcd45";
const USDT = "0x617f3112bf5397d0467d315cc709ef968d9ba546";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "celo",
  wNativeAddress: WCELO,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 21824678,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WCELO, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 21840500,
    stableCoins: [USDC],
    whitelistAddresses: [WCELO, USDT],
    nonfungiblePositionManagerAddress: "0x57a9a4eD3FC6192EACd810317DAa4e9c57449ee9",
    nonfungiblePositionManagerStartBlock: 22274582,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
