import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Routes from './Routes';
import AppContext from './AppContext'

class App extends Component {

  state = {
    user: JSON.parse(localStorage.getItem("user")) || {}
  }

  setUser = (user) => {
    console.log("set user", user)
    this.setState({ user });
  }

  render() {
    const { state, setUser } = this;

    return (
      // wrap the app in the context provider so the whole app has access to the data
      <AppContext.Provider value={{ state: state, setUser }}>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
