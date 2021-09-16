import React from 'react'

import { AppBar, ToolBar , IconButton , Badge , MenuItem , Menu , Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

const Navbar = () => {
    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color= 'inherit'>
            <ToolBar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={} alt="Nome da Loja" height="25px" className={classes.image}/>
                    Nome da Loja
                </Typography>
            </ToolBar>
         </AppBar>  
        </>
    )
}

export default Navbar
