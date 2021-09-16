import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles'

const products = [
    {id: 1 , name: 'Shoes' , description : 'Running Shoes.' , price:'$5', image:'https://st1.bgr.in/wp-content/uploads/2018/09/Apple-logo-gadgets-page.jpg'},
    {id: 2 , name: 'Mackbook' , description : 'Apple Mackbook.' , price:'$10', image:'https://st1.bgr.in/wp-content/uploads/2018/09/Apple-logo-gadgets-page.jpg'},
    {id:3 , name:'Iphone' , description: 'Apple Iphone.' , price:'$20' , image: 'https://st1.bgr.in/wp-content/uploads/2018/09/Apple-logo-gadgets-page.jpg'}

] 

const Products = () =>{
    const classes = useStyles();

    return(
    <main className ={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent = "center" spacing={4}>
            {products.map((product) => ( //for each
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;