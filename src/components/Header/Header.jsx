import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'; 
import useStyles from '../useStyles/styles.jsx';




function Header() {

    const classes = useStyles();

    return (
        <div className="header">
            <Typography className={classes.container} variant="h3">Coin Spike 2!</Typography>
        </div>
    )
}

export default Header;
