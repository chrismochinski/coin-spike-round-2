import React from 'react'
import useStyles from '../useStyles/styles.jsx';
import { Link } from 'react-router-dom';


function CoinDetailPage() {

    const classes = useStyles();

    return (
        <div>
            <h1>Coin Detail Page</h1>
            <Link to="/">Back To Summary</Link>
        </div>
    )
}

export default CoinDetailPage;
