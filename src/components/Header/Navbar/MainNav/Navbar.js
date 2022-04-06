import React, {  useEffect, useState } from "react";
import classes from "./NavBar.module.css";
import NavbarRight from "./NavbarRight";
import { NavbarLeft } from "./NavbarLeft";
import SideBar from "../SideBarMenu/SideBar";
import { AddCartButton } from "../../../AddToCartIconButton/AddCartButton";
import { useDispatch, useSelector } from "react-redux";
import {Sidecategories} from "../SideBarMenu/Sidecategories";

const Navbar = () => {
  const [hidden, setHidden] = useState('auto');
  const visibl=useSelector(state=>state.global.sideBArVisibility);
  const show=useSelector(state=>state.global.showcategory);
  
  const dispatch=useDispatch();
  const handlerClick = () => {
    dispatch({type:'visibl'});
  };
  const a = document.getElementById("body");
  a.style.overflow = hidden;
  useEffect(()=>{
    if(visibl){
      setHidden("hidden")
    }else{
       setHidden('auto')
    }
  },[visibl])

  return (
    <nav className={classes.navbar}>
      <NavbarLeft expand={visibl}/>
      <NavbarRight handlerClick={handlerClick} />
      {visibl&& <SideBar expand={visibl} setExpand={dispatch}/>}
      <Sidecategories setShow={dispatch} show={show}/>
    </nav>
  );
};

export default Navbar;
