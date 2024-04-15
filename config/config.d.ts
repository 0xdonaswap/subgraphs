export type NetworkConfig = {
  network: string;
  wNativeAddress: string;
  v2: {
    wNativeStablePoolAddress: string;
    factoryAddress: string;
    startBlock: number;
    whitelistAddresses: string[];
    wNativeStablePair0: string;
    wNativeStablePair1: string;
    minETHLocked: number;
  };
  v3: {
    wNativeStablePoolAddress: string;
    factoryAddress: string;
    startBlock: number;
    stableCoins: string[];
    whitelistAddresses: string[];
    nonfungiblePositionManagerAddress: string;
    nonfungiblePositionManagerStartBlock: number;
    stableIsToken0: boolean;
    minETHLocked: number;
  };
  masterChefV3: {
    startBlock: number;
    masterChefAddress: string;
  };
};
