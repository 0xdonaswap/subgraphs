const WAVAX = "0xd00ae08403b9bbb9124bb305c09058e32c39a48c";
const USDT = "0xf83486d401f3247b8a6356ef1e48828f7153c9af";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "avalanche-fuji",
  wNativeAddress: WAVAX,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 25683713,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WAVAX, USDT],
    minETHLocked: 1,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 26354078,
    stableCoins: [USDT, USDC],
    whitelistAddresses: [WAVAX, USDT],
    nonfungiblePositionManagerAddress: "0x08b0545208532a5efb612f9adae12ee2f4b06c88",
    nonfungiblePositionManagerStartBlock: 27106255,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 8792225,
  },
};
