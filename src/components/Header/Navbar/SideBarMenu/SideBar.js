import React, { useEffect, useState } from "react";
import classes from "./SideBar.module.css";
import logo from "../../../../assets/images/logo/logo-white.png";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
const SideBar = ({ expand, setExpand }) => {
  const dispatch=useDispatch();
  if (!expand) {
    return null;
  }

  return (
    <>
      <div
        className={classes.sidebarwrapper}
        onClick={() => {
          setExpand({ type: "visibl" });
        }}
      ></div>
      <div className={classes.sidebar}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" width="106.050" />
        </div>
        <div>
          <ul className={classes.list}>
            <li>Home</li>
            <li onClick={()=> {
            console.log('dfdfdfdfdf')
           return dispatch({type:'showcategory'})}}>Categories</li>
            <li>About</li>
            <li>Explore</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div
          className={classes.icon}
          onClick={() => {
            setExpand(false);
          }}
        >
          <CloseIcon />
        </div>
      </div>
    </>
  );
};

export default SideBar;
