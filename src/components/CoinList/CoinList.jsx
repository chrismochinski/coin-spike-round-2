import React, { useEffect, useState, useContext } from 'react';
import Coin from "../Coin/Coin.jsx"
import CoinGecko from "../API/CoinGecko";
import { WatchListContext } from '../Context/WatchListContext';

const CoinList = () => {
    const [coins, setCoins] = useState([]);

    const { watchList, deleteCoin } = useContext(WatchListContext)

    const [isLoading, setIsLoading] = useState(false); //initial value false on page loading


    console.log('watchList is:', watchList)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); //now setting the loading to TRUE //important loading
            const response = await CoinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: watchList.join(","), //take elements in array and join into one big string separated by whatever is in parens!
                }
            });
            console.log('response is:', response.data)
            setCoins(response.data);
            setIsLoading(false); //important done loading
        }
        if(watchList.length > 0) {
            fetchData()
        } else {
            setCoins([]);
        }
    }, [watchList]) //"don't run this a million times...unless this thing gets pegged" ..//IMPORTANT - once this is EMPTY, it runs again
//important when "left blank" it sends us a bunch of stuff...CoinGecko API issue

    const renderCoins = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }
        
        return (
            <ul className="coinlist list-group mt-2">
                {coins.map(coin => {
                    return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}/>
                    })}
            </ul>
        )
    }

    return (
        <div>
            {renderCoins()}
        </div>
    )
};

export default CoinList;
