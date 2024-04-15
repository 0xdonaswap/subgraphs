const WMTR = "0x8648260526570f425caf419fd2a0cf1962322a53";
const USDT = "0x853154e2A5604E5C74a2546E2871Ad44932eB92C";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "meter-testnet",
  wNativeAddress: WMTR,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 8455822,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WMTR, USDT],
    minETHLocked: 5,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: false,
    factoryAddress: "0x614434B60041C19E61c2faE61A4fd52398FA8DFc",
    startBlock: 8456536,
    stableCoins: [USDT],
    whitelistAddresses: [WMTR, USDT],
    nonfungiblePositionManagerAddress: "0x93C0b8BDb742604CB7b1CA5A7f42F2fb7148d105",
    nonfungiblePositionManagerStartBlock: 8457197,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
