import config from "../../config";
import { ADVANCE } from "../../constants/constants";

const matic = [
    {
        id: "daoMPT",
        name: "USDT/USDC/DAI",
        symbol: "USDT",
        symbols: ["USDT", "USDC", "DAI"],
        description: "Stablecoins",
        vaultSymbol: "daoMPT",
        erc20addresses: [
            "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
            "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
            "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        ],
        erc20address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        vaultContractAddress: "0x7e515e00e2d605d763ffe25fd7b1e00f8fd97a16",
        vaultContractABI: config.vaultDAOMPTContractABI,
        balance: 0, // Stores balance of selectedERC20Address
        balances: [0, 0, 0],
        vaultBalance: 0,
        decimals: 18,
        deposit: true,
        depositAll: true,
        withdraw: true,
        withdrawAll: true,
        lastMeasurement: 17293764,
        measurement: 1e18,
        price_id: ["tether", "usd-coin", "dai"],
        priceInUSD: [0, 0, 0],
        strategyName: "DAO Money Printer: USDT USDC DAI",
        strategy: "DAO Money Printer",
        strategyAddress: "0x111de482a01eb87875d18f8c1131fca709b6a646",
        strategyContractABI: config.vaultDAOMPTStrategyABI,
        historicalPriceId: "daoMPT_price",
        logoFormat: "svg",
        risk: ADVANCE,
        strategyType: "moneyPrinter",
        cTokenAddress: "",
        cAbi: "",
        group: ADVANCE,
        tvlKey: "daoMPT_tvl",
        infoLink:
          "https://www.google.com",
        isPopularItem: false,
        isHappyHour: true, // use to render happy hour icon, note current logic uses a blanket HappyHour
      },
];

export default matic;