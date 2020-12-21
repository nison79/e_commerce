import React from 'react'
import { AppBar , Toolbar , IconButton , Badge , MenuItem , Menu ,Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../../assets/slice1.png'
import useStyles from './styles'


const NavBar = ( { totalItems }) => {

    const classes = useStyles();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Desire Bag" height ="48px" className={classes.img} />
                    Desire Bag
                </Typography>
                <div className={classes.grow}></div>
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
            
        </>
    )
}

export default NavBar
