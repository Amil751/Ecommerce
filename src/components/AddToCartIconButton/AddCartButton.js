import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import classes from './index.module.css'
export const AddCartButton = ({a,isHave}) => {
    return (
        <button className={`${classes.cart_button} btn btn-secondary`} title="Add to Cart" onClick={a} disabled={isHave} >
           <ShoppingCartCheckoutIcon/> 
        </button>
    );
};

