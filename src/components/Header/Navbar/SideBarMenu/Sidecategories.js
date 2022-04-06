import React, { useEffect, useState } from "react";
import classes from "./SideBar.module.css";
import logo from "../../../../assets/images/logo/logo-white.png";
import CloseIcon from "@mui/icons-material/Close";

export const Sidecategories = ({show,setShow}) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div
        className={classes.sidebarwrapper}
        onClick={() => {
          setShow({ type: "showcategory" });
        }}
      ></div>
      <div className={classes.sidebar}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" width="106.050" />
        </div>
        <div>
          <ul className={classes.list}>
            <li>Alma</li>
            <li>Armud</li>
            <li>Heyva</li>
            <li>Nar</li>
            <li>Erik</li>
            <li>Saftali</li>
            <li>Badam</li>
          </ul>
        </div>
        <div
          className={classes.icon}
          onClick={() => {
            setShow({ type: "showcategory" });
          }}
        >
          <CloseIcon />
        </div>
      </div>
    </>
  );
};
