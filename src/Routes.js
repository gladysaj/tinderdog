import React from "react";
import { Switch, Route } from "react-router-dom";

import FosterDogs from "./components/FosterDogs";
import MatchDogs from "./components/MatchDogs";
import AuthForm from "./components/AuthForm";
import AppHome from "./components/AppHome";
import Profile from "./components/Profile/index"
import CreateDogForm from "./components/CreateDogForm";
import LandingPage from "./components/LandingPage";
import MyMatches from "./components/Profile/MyMatches";
import MyDog from "./components/Profile/MyDog";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AppHome} />
    <Route exact path="/landing" component={LandingPage} />
    <Route exact path="/foster" component={FosterDogs} />
    <Route exact path="/match" component={MatchDogs} />
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/create-dog" component= {CreateDogForm}/>
    <Route exact path="/my-matches" component= {MyMatches}/>
    <Route exact path="/my-dog" component= {MyDog}/>
  </Switch>
);

export default Routes;
