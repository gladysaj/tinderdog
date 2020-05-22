import React, { Component } from "react";
import DogCard from "../DogCard";
import FloatingAction from "../FloatingAction";

class MartchCard extends Component {
  render() {
    return (
      <div className="match-card card-container">
        <DogCard
          image="https://source.unsplash.com/z26TAz2FuuE"
          name="Moira"
          breed="German Shepherd"
          age="adult"
          description="Moira is a sweet, loyal dog. She understands basic commands and loves being around people."
        />

        <div className="uk-button-group floating-group uk-position-bottom-center">
          <FloatingAction icon="close" />
          <FloatingAction icon="check" />
        </div>
      </div>
    );
  }
}

export default MartchCard;
