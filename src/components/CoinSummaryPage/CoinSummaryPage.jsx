import React from 'react'
import useStyles from '../useStyles/styles.jsx';
import AddCoin from '../AddCoin/AddCoin.jsx';
import CoinList from '../CoinList/CoinList.jsx';

function CoinSummaryPage() {

    const classes = useStyles();

    return (
        <div className="coinContainer">
            <AddCoin />
            <CoinList />
        </div>
    )
}

export default CoinSummaryPage;
