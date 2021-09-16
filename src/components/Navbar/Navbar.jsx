import React from 'react'

import { AppBar, ToolBar , IconButton , Badge , MenuItem , Menu , Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import logo from '../../assets/Apple.webp'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color= 'inherit'>
            <ToolBar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={} alt="Nome da Loja" height="25px" className={classes.image}/>
                    Nome da Loja
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="Show Cart Items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </ToolBar>
         </AppBar>  
        </>
    )
}

export default Navbar
