import config from "../../config";
import { BASIC, ADVANCE, EXPERT, DEGEN } from "../../constants/constants";
import { INFO_LINK } from "../../constants/page-constant";

const ethereum = [
  {
    id: "daoCDV",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoCDV",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x8fe826cc1225b03aa06477ad5af745aed5fe7066",
    vaultContractABI: config.vaultDAOCDVContractABI,
    balance: 0,
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12586420,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "DAO Citadel: USDT USDC DAI",
    strategy: "DAO Citadel",
    strategyAddress: "0x8a00046ab28051a952e64a886cd8961ca90a59bd",
    strategyContractABI: config.strategyDAOCDVContractABI,
    historicalPriceId: "daoCDV_price",
    logoFormat: "svg",
    risk: EXPERT,
    strategyType: "citadel",
    cTokenAddress: "",
    cAbi: "",
    group: EXPERT,
    tvlKey: "daoCDV_tvl",
    infoLink: INFO_LINK.CITADEL,
    isPopularItem: true, // use to render popular item icon
    happyHourEnabled: true,
    // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
  },
  {
    id: "daoSTO",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoSTO",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x742a85daf742ca0213b06fdae449434e0448691e",
    vaultContractABI: config.vaultDAOSTOContractABI,
    balance: 0,
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12766399,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "DAO FAANG Stonk: USDT USDC DAI",
    strategy: "DAO FAANG Stonk",
    strategyAddress: "0x7f1cffb0e0a7351a72ef53cb51796221e2bac3a5",
    strategyContractABI: config.strategyDAOSTOContractABI,
    historicalPriceId: "daoSTO_price",
    logoFormat: "svg",
    risk: ADVANCE,
    strategyType: "daoFaang",
    cTokenAddress: "",
    cAbi: "",
    group: ADVANCE,
    tvlKey: "daoSTO_tvl",
    infoLink: INFO_LINK.FAANG,
    isPopularItem: true, // use to render popular item icon
    happyHourEnabled: true,
  },
  {
    id: "daoELO",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoELO",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x2d9a136cf87d599628bcbdfb6c4fe75acd2a0aa8",
    vaultContractABI: config.vaultDAOELOContractABI,
    balance: 0,
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12722655,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "Elon's Ape: USDT USDC DAI",
    strategy: "DAO Elon",
    strategyAddress: "0x24d281dcc7d435500669459eaa393dc5200595b1",
    strategyContractABI: config.strategyDAOELOContractABI,
    historicalPriceId: "daoELO_price",
    logoFormat: "svg",
    risk: DEGEN,
    strategyType: "elon",
    cTokenAddress: "",
    cAbi: "",
    group: DEGEN,
    tvlKey: "daoELO_tvl",
    infoLink: INFO_LINK.ELON,
    isPopularItem: false,
    // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
  },
  {
    id: "daoCUB",
    name: "USDT/USDC/DAI",
    symbol: "USDT",
    symbols: ["USDT", "USDC", "DAI"],
    description: "Stablecoins",
    vaultSymbol: "daoCUB",
    erc20addresses: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
    ],
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "", // TODO: Update to the mainnet address
    vaultContractABI: config.vaultDAOCUBContractABI,
    balance: 0,
    balances: [0, 0, 0],
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12722655, // TODO: Update to the mainnet block number
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    priceInUSD: [0, 0, 0],
    strategyName: "Cuban's Ape: USDT USDC DAI",
    strategy: "DAO Cuban",
    strategyAddress: "", // TODO: Update to the mainnet address
    strategyContractABI: config.strategyDAOCUBContractABI,
    historicalPriceId: "daoCUB_price",
    logoFormat: "svg",
    risk: DEGEN,
    strategyType: "cuban",
    cTokenAddress: "",
    cAbi: "",
    group: DEGEN,
    tvlKey: "daoCUB_tvl",
    infoLink: INFO_LINK.CUBAN,
    isPopularItem: false,
    // isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
  },
  {
    id: "USDT",
    name: "USDT",
    symbol: "USDT",
    description: "Tether USD",
    vaultSymbol: "dvmUSDT",
    vaultAddress: "0x2f08119c6f07c006695e079aafc638b8789faf18",
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x4F0C1c9bA6B9CCd0BEd6166e86b672ac8EE621F7",
    vaultContractABI: config.vaultUSDTContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10651402,
    measurement: 1e18,
    price_id: "tether",
    strategyName: "Yearn-Fighter: USDT",
    strategy: "Yearn Vault",
    strategyContractABI: config.strategyUSDTContractABI,
    vaultABI: config.vaultContractV3ABI,
    historicalPriceId: "yUSDT_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "yearn",
    group: ADVANCE,
    tvlKey: "yUSDT_tvl",
    infoLink: INFO_LINK.YEARN,
    isPopularItem: false,
  },
  {
    id: "DAI",
    name: "DAI",
    symbol: "DAI",
    description: "DAI Stablecoin",
    vaultSymbol: "dvmDAI",
    vaultAddress: "0xacd43e627e64355f1861cec6d3a6688b31a6f952",
    erc20address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    vaultContractAddress: "0x2bFc2Da293C911e5FfeC4D2A2946A599Bc4Ae770",
    vaultContractABI: config.vaultDAIContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10650116,
    measurement: 1e18,
    price_id: "dai",
    // yVaultCheckAddress: '0x1bbe0f9af0cf852f9ff14637da2f0bc477a6d1ad',
    strategyName: "Yearn-Fighter: DAI",
    strategy: "Yearn Vault",
    strategyContractABI: config.strategyDAIContractABI,
    vaultABI: config.vaultContractV3ABI,
    historicalPriceId: "yDAI_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "yearn",
    group: ADVANCE,
    tvlKey: "yDAI_tvl",
    infoLink: INFO_LINK.YEARN,
    isPopularItem: false,
  },
  {
    id: "USDC",
    name: "USDC",
    symbol: "USDC",
    description: "USDC Coin",
    vaultSymbol: "dvmUSDC",
    vaultAddress: "0x597ad1e0c13bfe8025993d9e79c69e1c0233522e",
    erc20address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    vaultContractAddress: "0x9f0230FbDC0379E5FefAcca89bE03A42Fec5fb6E",
    vaultContractABI: config.vaultUSDCContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10532708,
    measurement: 1e18,
    price_id: "usd-coin",
    strategyName: "Yearn-Fighter: USDC",
    strategy: "Yearn Vault",
    strategyContractABI: config.strategyUSDCContractABI,
    vaultABI: config.vaultContractABI,
    historicalPriceId: "yUSDC_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "yearn",
    group: ADVANCE,
    tvlKey: "yUSDC_tvl",
    infoLink: INFO_LINK.YEARN,
    isPopularItem: false,
  },
  {
    id: "TUSD",
    name: "TUSD",
    symbol: "TUSD",
    description: "TrueUSD",
    vaultSymbol: "dvmTUSD",
    vaultAddress: "0x37d19d1c4e1fa9dc47bd1ea12f742a0887eda74a",
    erc20address: "0x0000000000085d4780b73119b644ae5ecd22b376",
    vaultContractAddress: "0x2C8de02aD4312069355B94Fb936EFE6CFE0C8FF6",
    vaultContractABI: config.vaultTUSDContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10603368,
    measurement: 1e18,
    price_id: "true-usd",
    strategyName: "Yearn-Fighter: TUSD",
    strategy: "Yearn Vault",
    strategyContractABI: config.strategyTUSDContractABI,
    vaultABI: config.vaultContractV3ABI,
    historicalPriceId: "yTUSD_price",
    logoFormat: "png",
    risk: ADVANCE,
    strategyType: "yearn",
    group: ADVANCE,
    tvlKey: "yTUSD_tvl",
    infoLink: INFO_LINK.YEARN,
    isPopularItem: false,
  },
  {
    id: "cUSDT",
    name: "USDT",
    symbol: "USDT",
    description: "compound USDT",
    vaultSymbol: "dvlUSDT",
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0xEeCe6AD323a93d4B021BDAaC587DCC04b5cf0a78",
    vaultContractABI: config.compoundVaultContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10651402,
    measurement: 1e18,
    price_id: "compound-usdt",
    strategyName: "Compound-Fighter: Compound USDT",
    strategy: "Compount USDT",
    strategyContractABI: config.compundStrategyCompundABI,
    historicalPriceId: "cUSDT_price",
    logoFormat: "png",
    risk: BASIC,
    strategyType: "compound",
    cTokenAddress: "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
    cAbi: config.cUSDTContract,
    group: BASIC,
    tvlKey: "cUSDT_tvl",
    infoLink: INFO_LINK.COMPOUND,
    isPopularItem: false,
  },
  {
    id: "cDAI",
    name: "DAI",
    symbol: "DAI",
    description: "Compound DAI",
    vaultSymbol: "dvlDAI",
    erc20address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    vaultContractAddress: "0x43C20638C3914Eca3c96e9cAc8ebE7d652Be45c6",
    vaultContractABI: config.compoundVaultContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10650116,
    measurement: 1e18,
    price_id: "cdai",
    strategyName: "Compound-Fighter: Compound DAI",
    strategy: "Compound DAI",
    strategyContractABI: config.compundStrategyCompundABI,
    historicalPriceId: "cDAI_price",
    logoFormat: "png",
    risk: BASIC,
    strategyType: "compound",
    cTokenAddress: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
    cAbi: config.cDAIContract,
    group: BASIC,
    tvlKey: "cDAI_tvl",
    infoLink: INFO_LINK.COMPOUND,
    isPopularItem: false,
  },
  {
    id: "cUSDC",
    name: "USDC",
    symbol: "USDC",
    description: "Compound USDC",
    vaultSymbol: "dvlUSDC",
    erc20address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    vaultContractAddress: "0xd1D7f950899C0269a7F2aad5E854cdc3a1350ba9",
    vaultContractABI: config.compoundVaultContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10532708,
    measurement: 1e18,
    price_id: "compound-usd-coin",
    strategyName: "Compound-Fighter: Compound USDC",
    strategy: "Compound USDC",
    strategyContractABI: config.compundStrategyCompundABI,
    historicalPriceId: "cUSDC_price",
    logoFormat: "png",
    risk: BASIC,
    strategyType: "compound",
    cTokenAddress: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    cAbi: config.cUSDCContract,
    group: BASIC,
    tvlKey: "cUSDT_tvl",
    infoLink: INFO_LINK.COMPOUND,
    isPopularItem: false,
  },
];

export default ethereum;
