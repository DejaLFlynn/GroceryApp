import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./App/NavBar";
function App() {
  return (
    <div className="App">
      Shopping App
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          Home
        </Route>
        <Route exact path={"/cart"}></Route>
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
  
}

export default App;
