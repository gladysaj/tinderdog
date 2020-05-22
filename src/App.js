import React from "react";
import "./App.css";
import FosterCard from "./components/FosterCard";
import MatchCard from "./components/MatchCard";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <FosterCard />
      <MatchCard />
      <Routes />
    </div>
  );
}

export default App;
