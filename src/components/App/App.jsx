import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CoinSummaryPage from '../CoinSummaryPage/CoinSummaryPage';
import CoinDetailPage from '../CoinDetailPage/CoinDetailPage';
import CoinList from '../CoinList/CoinList';
import AddCoin from '../AddCoin/AddCoin';
import Header from '../Header/Header';
import useStyles from '../useStyles/styles.jsx';
import './App.css';
import { WatchListContextProvider } from '../Context/WatchListContext';




function App() {

    const classes = useStyles();

    return (
        <div className="app">

            <WatchListContextProvider>
                <Router>

                    <Header />

                    <Button variant="contained" style={{ backgroundColor: '#D4A33B', color: 'white' }}>Link</Button>


                    <Route exact path="/">
                        <CoinSummaryPage />
                    </Route>

                    <Route exact path="/coin/:id">
                        <CoinDetailPage />
                    </Route>


                </Router>
            </WatchListContextProvider>
        </div>
    )
}

export default App;

