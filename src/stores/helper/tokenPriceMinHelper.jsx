import { NETWORK } from "../../constants/constants";
import TokenMinsInfo from "./constant/tokenMinConstant";

const minPercentage = 95;

const getAmountsOut = async(contract, amount, pairs) => {
    let result = [];
    try {
        result = await contract.methods.getAmountsOut(amount, pairs).call();
    } catch (err) {
        console.error(`Error in getAmountsOut(): `, err);
    } finally {
        return result;
    }
} 

class TokenPriceMinHelper {
    static getTokenPriceMin = async(web3, network, contractType, erc20Address) => {
        let tokenPriceMin = [];
        try {
            const supportedNetwork = [
                NETWORK.ETHEREUM,
                NETWORK.BSCMAINNET,
                NETWORK.AVALANCHEMAIN
            ]
            if(!supportedNetwork.includes(network)) {
                throw new Error(`Not in mainnet network`);
            }
            if(!web3 || web3 === undefined) {
                throw new Error(`Missing web3`);
            }
            if(!contractType || contractType === undefined || contractType === "") {
                throw new Error(`Missing contract type`);
            }

            const tokensInfo = TokenMinsInfo[contractType];
            if(!tokensInfo || tokensInfo === undefined) {
                throw new Error(`Tokens Info undefined`);
            }

            const routerContracts = [];
            const routerAddresses = tokensInfo.routerAddresses;

            for(let i = 0; i < routerAddresses.length; i++) {
                const routerContract = new web3.eth.Contract(
                    tokensInfo.abi,
                    routerAddresses[i]
                );
                routerContracts.push(routerContract);
            }
      
            const tokensPairs = tokensInfo.tokens;

            const contractTypes = [
                "citadelv2",
                "daoSafu",
                "daoDegen",
                "daoTA",
                "metaverse",
                "daoAXA",
            ];

            for(let i = 0; i < tokensPairs.length; i ++) {
                const tokenPair = tokensPairs[i];
                let { amount, decimal, pairs, routerIndex } = tokenPair;
                
                if(i === 0 && contractTypes.includes(contractType)) {
                    pairs.push(erc20Address);
                }

                const magnifiedAmount =  web3.utils.toBN(amount * 10 ** decimal);
                const price = await getAmountsOut(
                    routerContracts[routerIndex],
                    magnifiedAmount,
                    pairs
                );
                // console.log(`${magnifiedAmount}, price ${price[1]}, pairs`, pairs);
               
                let priceMin = web3.utils.toBN(price[1]).muln(minPercentage).divn(100); 
                if(priceMin === undefined) {
                    console.error(`Price Min is undefined for`, tokenPair.pairs);
                    priceMin = 0;
                }
               
                tokenPriceMin.push(priceMin.toString());
            }
        
          } catch (err) {
            console.error(`Error in getTokenPriceMin(), `, err);
          } finally{
            if(tokenPriceMin.length <= 0) {
                tokenPriceMin = [0];
            }
            return tokenPriceMin;
          }
    }
}

export default TokenPriceMinHelper;