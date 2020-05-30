import React from "react";
import { Route } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

import FosterDogs from "./components/FosterDogs";
import MatchDogs from "./components/MatchDogs";
import AuthForm from "./components/AuthForm";
import AppHome from "./components/AppHome";
import SubNavbar from "./components/Profile/SubNavbar"
import EditProfile from "./components/Profile/EditProfile"
import MyDog from "./components/Profile/MyDog"
import CreateDogForm from "./components/CreateDogForm";
import LandingPage from "./components/LandingPage";

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 110,
    damping: 20,
  });
}

const Routes = () => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: bounce(0) }}
    atActive={{ opacity: bounce(1) }}
    mapStyles={(styles) => {
      return {
        position: styles.opacity === 1 ? undefined : "absolute",
        width: styles.opacity === 1 ? undefined : "100%",
        height: styles.opacity === 1 ? undefined : "100%",
        opacity: styles.opacity,
      };
    }}
  >
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
  </AnimatedSwitch>
);

export default Routes;
