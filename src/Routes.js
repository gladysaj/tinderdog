import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FosterDogs from './components/FosterDogs'

const Router = () => (
    <Switch>
        <Route exact path="/foster" component={ FosterDogs } />
    </Switch>
);

export default Router;