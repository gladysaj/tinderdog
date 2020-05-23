import React from "react";
import { Switch, Route } from "react-router-dom";

import FosterDogs from "./components/FosterDogs";
import AuthForm from "./components/AuthForm";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>Home</h1>} />
    <Route exact path="/foster" component={FosterDogs} />
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
  </Switch>
);

export default Routes;
