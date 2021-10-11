import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import CoinSummaryPage from '../CoinSummaryPage/CoinSummaryPage';
import CoinDetailPage from '../CoinDetailPage/CoinDetailPage';
import Header from '../Header/Header';
import useStyles from '../useStyles/styles.jsx';
import './App.css';




function App() {

    const classes = useStyles();

    return (
        <div className="app">
            <Router>
                <Header />

                {/* <Route exact path="/" component={CoinSummaryPage}> */}
                <Route exact path="/">
                    <CoinSummaryPage />
                </Route>

                <Route exact path="/coin-details">
                    <CoinDetailPage />
                </Route>
            </Router>
        </div>
    )
}

export default App;

