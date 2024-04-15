const WETH = "0x5300000000000000000000000000000000000004";
const USDC = "0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4";
const USDT = "0xf55bec9cafdbe8730f096aa55dad6d22d44099df";
const LUSD = "0xedeabc3a1e7d21fe835ffa6f83a710c70bb1a051";
const WBTC = "0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1";
const RETH = "0x53878b874283351d26d206fa512aece1bef6c0dd";
const STETH = "0xf610a9dfb7c89644979b4a0f27063e9e7d7cda32";
const DAI = "0xca77eb3fefe3725dc33bccb54edefc3d9f764f97";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "scroll",
  wNativeAddress: WETH,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 3804,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WETH, USDT, USDT, LUSD, WBTC, RETH, STETH, DAI],
    minETHLocked: 1,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 6581,
    stableCoins: [USDC, USDT, LUSD, DAI],
    whitelistAddresses: [WETH, USDT, USDT, LUSD, WBTC, RETH, STETH, DAI],
    nonfungiblePositionManagerAddress: "0x46a15b0b27311cedf172ab29e4f4766fbe7f4364",
    nonfungiblePositionManagerStartBlock: 6977,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 26933904,
  },
};
