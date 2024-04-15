const WBNB = "0xae13d989dac2f0debff460ac112a837c89baa7cd";
const MOCKB = "0x828e3fc56dd48e072e3b6f3c4fd4ddb4733c2c5e";
const MOCKA = "0xc1ed9955c11585f47d0d6bfbc29034349a746a81";
const USDT = "0x2a226a364d9EB47c3cC66fF5EAf5701ef9a2b274";
const BUSD = "0xab1a4d4f1d656d2450692d237fdd6c7f9146e814";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "bsc-testnet",
  wNativeAddress: WBNB,
  v2: {
    factoryAddress: "0x8e5dff1c121f661971d02950698f8c5efc3dfa78",
    startBlock: 33185581,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x0000000000000000000000000000000000000000",
    whitelistAddresses: [WBNB, MOCKB, MOCKA, USDT, BUSD],
    minETHLocked: 0,
  },
  v3: {
    wNativeStablePoolAddress: "0x0000000000000000000000000000000000000000",
    stableIsToken0: true,
    factoryAddress: "0x9c3afddea87a726891a44c037242393d524cacfe",
    startBlock: 33770963,
    stableCoins: [MOCKB, USDT, BUSD],
    whitelistAddresses: [WBNB, MOCKB, MOCKA, USDT, BUSD],
    nonfungiblePositionManagerAddress: "0x2921cc3377c717b600468cfab437a83c2de5039d",
    nonfungiblePositionManagerStartBlock: 33771010,
    minETHLocked: 60,
  },
  masterChefV3: {
    masterChefAddress: "0x0000000000000000000000000000000000000000",
    startBlock: 28492774,
  },
};
