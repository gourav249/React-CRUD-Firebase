import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import ViewDetails from "./Components/ViewDetails";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Details" component={ViewDetails} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
