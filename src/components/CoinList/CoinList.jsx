import React, { useEffect, useState, useContext } from 'react';
import CoinGecko from "../API/CoinGecko";
import { WatchListContext } from '../Context/WatchListContext';

const CoinList = () => {
    const [coins, setCoins] = useState([]);

    const {watchList} = useContext(WatchListContext)

    console.log('watchList is:', watchList)

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
