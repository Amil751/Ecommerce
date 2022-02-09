import React, {  useState } from "react";
import classes from "./NavBar.module.css";
import NavbarRight from "./NavbarRight";
import { NavbarLeft } from "./NavbarLeft";
import SideBar from "../SideBarMenu/SideBar";
import { AddCartButton } from "../../../AddToCartIconButton/AddCartButton";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const handlerClick = () => {
    setExpand((prev) => !prev);
  };

  return (
    <nav className={classes.navbar}>
      <NavbarLeft expand={expand}/>
      <NavbarRight handlerClick={handlerClick} />
      {expand && <SideBar expand={expand} setExpand={setExpand}/>}
      <AddCartButton a={()=>console.log('salam')}/>
    </nav>
  );
};

export default Navbar;
