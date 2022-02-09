import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import classes from './index.module.css'
export const AddCartButton = ({a}) => {
    return (
        <div className={classes.cart_button} onClick={a}>
           <ShoppingCartCheckoutIcon/> 
        </div>
    );
};

