import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./App/NavBar";
import Cart from './Features/Cart'
import Items from './Features/Items'
import Home from './Features/Home'
function App() {
  return (
    <div className="App">
      Shopping App
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Home/>
        </Route>
        <Route exact path={"/items"}>
          <Items/>
        </Route>
        <Route exact path={"/cart"}>
          <Cart/>
        </Route>
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
  
}

export default App;
