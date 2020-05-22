import React, { Component } from "react";
import DogCard from "../DogCard";
import FloatingAction from "../FloatingAction";

class FosterCard extends Component {
  render() {
    return (
      <div>
        <DogCard
          image="https://source.unsplash.com/eoqnr8ikwFE"
          name="Muji"
          breed="Welsh Corgi"
          age="puppy"
          description="Muji is a sweet, small dog. He loves sleeping, playing and being around people."
        />

        <div className="uk-button-group floating-group">
          <FloatingAction icon="heart" />
        </div>
      </div>
    );
  }
}

export default FosterCard;
