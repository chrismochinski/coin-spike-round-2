import React, { useEffect, useState } from 'react';
import CoinGecko from "../API/CoinGecko";


const CoinList = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await CoinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd", 
                    ids: "bitcoin,ethereum,cardano,verasity,theta-token,vechain"
                }
            });
            console.log('response is:', response.data)
            
        }
        fetchData();
    }, [])


    return (
        <div>

        </div>
    )
};

export default CoinList;
