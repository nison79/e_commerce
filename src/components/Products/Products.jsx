import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

import useStyles from './styles'


const products = [
    {id:1, name:'MacBook' , description:"Macbook Pro" , price: "$12", image: "https://store.i-system.gr/media/catalog/product/cache/10/image/473x473/9df78eab33525d08d6e5fb8d27136e95/m/a/macbook-pro-16-6-core-i7-2-6-ghz-16gb-512gb-radeon-pro-5300m-silver_1.png" },
    {id:1, name:'Shoes' , description:"Nike Air Max", price:"$5", image:'https://e-athletic.gr/wp-content/uploads/2020/07/CCCPRODUCTIMAGES-8346.jpg'}
];



const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
