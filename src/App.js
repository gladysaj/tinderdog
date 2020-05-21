import React from 'react';
import './App.css';
import DogCard from './components/DogCard';

function App() {
  return (
    <div className="App">
      <DogCard image="https://source.unsplash.com/z26TAz2FuuE" name="Moira" breed="German Shepherd" description="Moira is a sweet, loyal dog. She understands basic commands and loves being around people." />
    </div>
  );
}

export default App;
