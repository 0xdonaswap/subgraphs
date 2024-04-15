const WFSN = "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
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
    nonfungiblePositionManagerAddress: "0x19C6706cFd72f63CCC5B4403f5F8daEC0B569fEe",
    nonfungiblePositionManagerStartBlock: 8457197,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
