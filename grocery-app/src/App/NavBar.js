import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    return(

  <>
    <NavLink exact to={"/"}>Home</NavLink>
    <NavLink to={"/items"}>Item Page</NavLink>
    <NavLink to={"/cart"}>Cart</NavLink>
    
  </>
    )
};

export default NavBar;
