# Donaswap Subgraph

TheGraph exposes a GraphQL endpoint to query the events and entities within the Binance Smart Chain and Donaswap ecosystem.

Currently, there are multiple subgraphs, but additional subgraphs can be added to this repository, following the current architecture.

## Subgraphs

1. **Blocks**: Tracks all blocks on various networks.

- BSC: https://api.thegraph.com/subgraphs/name/0xfirechain/blocks-bsc
- Ethereum: 

2. **Exchange (v2)**: Tracks all Donaswap V2 Exchange data with price, volume & liquidity.

- Ethereum: https://api.studio.thegraph.com/query/32587/exchange-v2-ethereum/version/latest
- Goerli: https://api.studio.thegraph.com/query/32587/exchange-v2-goerli/version/latest
- Sepolia: https://api.studio.thegraph.com/query/32587/exchange-v2-sepolia/version/latest
- BSC: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v2-bsc
- Polygon: https://api.studio.thegraph.com/query/32587/exchange-v2-polygon/version/latest
- Polygon Mumbai: https://api.studio.thegraph.com/query/32587/exchange-v2-polygon-mumbai/version/latest
- Polygon ZkEvm: https://api.studio.thegraph.com/query/32587/exchange-v2-polygon-zkevm/version/latest
- Polygon ZkEvm Testnet: https://api.studio.thegraph.com/query/32587/exchange-v2-polygon-zkevm-test/version/latest
- Fantom Opera: https://api.studio.thegraph.com/query/32587/exchange-v2-fantom/version/latest
- Fantom Testnet: https://api.studio.thegraph.com/query/32587/exchange-v2-fantom-testnet/version/latest
- Avalanche: https://api.studio.thegraph.com/query/32587/exchange-v2-avalanche/version/latest
- Avalanche Fuji: https://api.studio.thegraph.com/query/32587/exchange-v2-avalanche-fuji/version/latest
- Optimism: https://api.studio.thegraph.com/query/32587/exchange-v2-optimism/version/latest
- Optimism Goerli: https://api.studio.thegraph.com/query/32587/exchange-v2-optimism-goerli/version/latest
- Arbitrum: https://api.studio.thegraph.com/query/32587/exchange-v2-arbitrum-one/version/latest
- Arbitrum Goerli: https://api.studio.thegraph.com/query/32587/exchange-v2-arbitrum-goerli/version/latest
- Celo: https://api.studio.thegraph.com/query/32587/exchange-v2-celo/version/latest
- Celo Alfajores: https://api.studio.thegraph.com/query/32587/exchange-v2-celo-alfajores/version/latest
- Aurora: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v2-aurora
- Aurora Testnet: https://api.studio.thegraph.com/query/32587/exchange-v2-aurora-testnet/version/latest
- Base: https://api.studio.thegraph.com/query/32587/exchange-v2-base/version/latest
- Base Goerli: https://api.studio.thegraph.com/query/32587/exchange-v2-base-testnet/version/latest
- Scroll: 
- Scroll Sepolia: https://api.studio.thegraph.com/query/32587/exchange-v2-scroll-sepolia/version/latest
- Fuse: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v2-fuse
- Harmony: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v2-harmony
- Moonbeam: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v2-moonbeam
- Moonbase: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v2-moonbase
- Moonriver: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v2-moonriver


3. **Exchange (v3)**: Tracks all Donaswap V3 Exchange data with price, volume & liquidity.

- Ethereum: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-ethereum
- Goerli: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-goerli
- Sepolia: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-sepolia
- BSC: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-bsc
- BSC Testnet: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-bsc-testnet
- Polygon: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-polygon
- Polygon Mumbai: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-polygon-mumbai
- Polygon ZkEvm: https://api.studio.thegraph.com/query/32587/exchange-v3-polygon-zkevm/version/latest
- Polygon ZkEvm Testnet: https://api.studio.thegraph.com/query/32587/exchange-v3-polygon-zkevm-test/version/latest
- Fantom Opera: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-fantom
- Fantom Testnet: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-fantom-testnet
- Avalanche: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-avalanche
- Avalanche Fuji: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-avalanche-fuji
- Optimism: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-optimism
- Optimism Goerli: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-optimism-goerli
- Arbitrum: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-arbitrum
- Arbitrum Goerli: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-arbitrum-goerli
- Celo: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-celo
- Celo Alfajores: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-celo-alfajores
- Aurora: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-aurora
- Aurora Testnet: https://thegraph.com/explorer/subgraph/0xfirechain/exchange-v3-aurora-testnet
- Base: https://api.studio.thegraph.com/query/32587/exchange-v3-base/version/latest
- Base Goerli: https://api.studio.thegraph.com/query/32587/exchange-v3-base-goerli/version/latest
- Scroll:
- Scroll Sepolia: https://api.studio.thegraph.com/query/32587/exchange-v3-scroll-sepolia/version/latest
- Fuse: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-fuse
- Harmony: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-harmony
- Moonbeam: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-moonbeam
- Moonbase: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-moonbase
- Moonriver: https://api.thegraph.com/subgraphs/name/0xfirechain/exchange-v3-moonriver

## Dependencies

- [Graph CLI](https://github.com/graphprotocol/graph-cli)
  - Required to generate and build local GraphQL dependencies.

```shell
yarn global add @graphprotocol/graph-cli
```

## Deployment

For any of the subgraph: `blocks` as `[subgraph]`

1. Run the `cd subgraphs/[subgraph]` command to move to the subgraph directory.

2. Run the `yarn codegen` command to prepare the TypeScript sources for the GraphQL (generated/\*).

3. Run the `yarn build` command to build the subgraph, and check compilation errors before deploying.

4. Run `graph auth --product hosted-service '<ACCESS_TOKEN>'`, or `graph auth --studio '<ACCESS_TOKEN>'`

5. Deploy via `yarn deploy`.