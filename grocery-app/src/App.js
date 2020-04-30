import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./App/NavBar";
import Cart from './Features/Cart'
function App() {
  return (
    <div className="App">
      Shopping App
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          Home
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
