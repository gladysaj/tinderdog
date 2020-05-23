import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FosterDogs from './components/FosterDogs'
import AuthForm from './components/AuthForm';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>TinderDog Homepage</h1>}/>
    <Route path="/add" component={() => (
      <>
        <h1>Add new dog</h1>
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="age"/>
          <button type="submit">Create!!</button>
        </form>
      </>
    )} />
    <Route exact path="/foster" component={ FosterDogs } />
    <Route exact path="/login" component={ AuthForm }/>
    <Route exact path="/signup" component={ AuthForm }/>
  </Switch>
);

export default Routes
