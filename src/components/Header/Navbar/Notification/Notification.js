import React from 'react';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './Notification.module.css'
export const Notification = () => {
    return (
        <div className={`${classes.notification} icon-box`}>
        <ShoppingCartIcon />
        <div className={classes.badge}>6</div>
      </div>
    );
};

