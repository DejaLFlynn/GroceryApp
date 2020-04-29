import React from "react";
import { Navlink } from "react-router-dom";
const NavBar = () => {
  <>
    <Navlink exact to={"/"}>
      <Navlink to={"/cart"}>Cart</Navlink>
    </Navlink>
  </>;
};

export default NavBar;
