import React from 'react';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './Notification.module.css'
import { useDispatch, useSelector } from 'react-redux';
export const Notification = () => {
  const show=useSelector(state=>state.visibility)
  const add = useSelector((state) => state.addtocart);
  const a=add.length;
  const dispatch=useDispatch()
    return (
        <div className={`${classes.notification} icon-box`} onClick={()=>dispatch({type:'show'})}>
        <ShoppingCartIcon />
        <div className={classes.badge}>{a-1}</div>
      </div>
    );
};

