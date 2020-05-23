import React, { Component } from "react";
import DogCard from "../DogCard";
import FloatingAction from "../FloatingAction";

class FosterCard extends Component {
  render() {
    return (
      <div className="card-container uk-margin-large-bottom">
        <DogCard
          image={this.props.image}
          name={this.props.name}
          breed={this.props.breed}
          age={this.props.age}
          description={this.props.description}
        />

        <div className="uk-button-group floating-group uk-position-bottom-center">
          <FloatingAction icon="refresh" />
          <FloatingAction icon="heart" />
        </div>
      </div>
    );
  }
}

export default FosterCard;
