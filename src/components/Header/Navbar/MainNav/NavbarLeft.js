import React from 'react';
import { useNavigate } from 'react-router';
import logo from "../../../../assets/images/logo/logo-white.png";
import classes from "./NavBar.module.css";
export const NavbarLeft = ({expand}) => {
  let navigate=useNavigate()
    return (
        <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center",width:'60%'}}
      >
       <div className={expand?classes.hidden:classes.logo} onClick={()=>navigate('/')}>
          <img src={logo} alt="logo" width="106.050" />
        </div>
     

        <ul className={classes.list}>
          <li>Home</li>
          <li>About</li>
          <li>Explore</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    );
};

