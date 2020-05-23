import React, { Component } from "react";
import DogCard from "../DogCard";
import FloatingAction from "../FloatingAction";

class FosterCard extends Component {
  render() {
    const {refreshDog,...dog}=this.props
    return (
      <div className="card-container uk-margin-large-bottom">
        <DogCard
          {...dog}
        />

        <div className="uk-button-group floating-group uk-position-bottom-center">
          <FloatingAction icon="refresh" action={refreshDog} />
          <FloatingAction icon="heart" link={this.props.like} />
        </div>
      </div>
    );
  }
}

export default FosterCard;
