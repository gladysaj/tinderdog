import React from "react";
import "./App.css";
import Routes from "./Routes";
import NavBar from './components/NavBar';
// import AppContext from '../AppContext'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes />
    </div>
  );
}

export default App;
