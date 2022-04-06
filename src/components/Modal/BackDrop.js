import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./BackDrop.module.css";
export const BackDrop = ({ children ,showHandler}) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.global.visibility);
  if (show) {
    return (
      <div className={classes.back} onClick={showHandler}>
      </div>
    );
  } else {
    return null;
  }
};
