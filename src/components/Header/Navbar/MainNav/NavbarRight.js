import React from "react";
import SearchRounded from "@mui/icons-material/SearchRounded";
import { Avatar } from "@mui/material";
import { Notification } from "../Notification/Notification";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from "./NavBar.module.css";
const NavbarRight = ({handlerClick}) => {
  return (
    <div
    className={classes.rightnav}
    >
      <div>
        <form className={classes["search-form-wrapper"]}>
          <input type="search" placeholder="Search Here" aria-label="Search" />
          <div className={classes["search-icon"]}>
            <button>
              <SearchRounded />
            </button>
          </div>
        </form>
      </div>
      <div className={classes.search2} >
        <SearchRounded />
      </div>
      <Notification />

      <div className="header-btn">
        <div className="icon-box">
          <a
            className={`${classes.createbutton} btn btn-primary-alta btn-small`}
            href="create.html"
          >
            Create
          </a>
        </div>
      </div>
      <div>
        <Avatar />
      </div>
      <button className={classes.icon} onClick={handlerClick}>
        <MenuIcon />
      </button>
    </div>
  );
};

export default NavbarRight;
