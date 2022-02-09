import React, { useEffect, useState } from "react";
import classes from "./SideBar.module.css";
import logo from "../../../../assets/images/logo/logo-white.png";
import CloseIcon from "@mui/icons-material/Close";
const SideBar = ({ expand, setExpand }) => {
  if (!expand) {
    return null;
  }

  return (
    <div
      className={classes.sidebarwrapper}
      onClick={() => {
        setExpand(false);
      }}
    >
      <div className={classes.sidebar}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" width="106.050" />
        </div>
        <div>
          <ul className={classes.list}>
            <li>Home</li>
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
    </div>
  );
};

export default SideBar;
