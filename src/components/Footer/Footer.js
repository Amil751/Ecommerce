import React from "react";
import classes from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.list}>
        <ul>
          <li>About us</li>
          <li>Contact</li>
          <li>Address</li>
        </ul>
      </div>
      <div className={classes.align}>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};
