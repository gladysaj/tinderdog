import React from "react";
import { Switch, Route } from "react-router-dom";

import FosterDogs from "./components/FosterDogs";
import MatchDogs from "./components/MatchDogs";
import AuthForm from "./components/AuthForm";
import AppHome from "./components/AppHome";
import SubNavbar from "./components/Profile/SubNavbar"
import EditProfile from "./components/Profile/EditProfile"
import MyDog from "./components/Profile/MyDog"
import CreateDogForm from "./components/CreateDogForm";
import LandingPage from "./components/LandingPage";


const Routes = () => (
  <Switch>
    <Route exact path="/" component={AppHome} />
    <Route exact path="/landing" component={LandingPage} />
    <Route exact path="/foster" component={FosterDogs} />
    <Route exact path="/match" component={MatchDogs} />
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
    <Route exact path="/profile" render={() => (
      <div>
        <SubNavbar />
        <EditProfile />
      </div>
    )} />
    <Route exact path="/profile/dog" component={() => (
      <div>
        <SubNavbar />
        <MyDog />
      </div>
    )} />
    <Route exact path="/create-dog" component= {CreateDogForm}/>
  </Switch>
);

export default Routes;
