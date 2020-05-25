import React from "react";
import { Switch, Route } from "react-router-dom";

import FosterDogs from "./components/FosterDogs";
import MatchDogs from "./components/MatchDogs";
import AuthForm from "./components/AuthForm";
import AppHome from "./components/AppHome";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AppHome} />
    <Route exact path="/foster" component={FosterDogs} />
    <Route exact path="/match" component={MatchDogs} />
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
  </Switch>
);

export default Routes;
