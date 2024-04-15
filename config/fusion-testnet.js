const WFSN = "0x0216a640C4d53F2a6603042d4E14A2B890efcD45";
const USDT = "0x853154e2A5604E5C74a2546E2871Ad44932eB92C";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "fusion-testnet",
  wNativeAddress: WFSN,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 8455822,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WFSN, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0xD2167357B09e7F7d1988f9B608B347D60f84fFa8",
    startBlock: 8456536,
    stableCoins: [USDT],
    whitelistAddresses: [WFSN, USDT],
    nonfungiblePositionManagerAddress: "0xa88Ca50b591cad9D1F05A058860126D4b5854857",
    nonfungiblePositionManagerStartBlock: 8457197,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
