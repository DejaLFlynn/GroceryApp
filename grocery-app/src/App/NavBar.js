import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    return(

  <>
    <NavLink exact to={"/"}/>
    <NavLink to={"/cart"}>Cart</NavLink>
    
  </>
    )
};

export default NavBar;
