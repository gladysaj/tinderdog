import React, { Component } from "react";
import DogCard from "../DogCard";
import FloatingAction from "../FloatingAction";

class ActionCard extends Component {
  render() {
    const {refreshDog, like, modal,...dog}=this.props
    return (
      <div className="card-container uk-margin-large-bottom">
        <DogCard
          {...dog}
        />

        <div className="uk-button-group floating-group uk-position-bottom-center">
          <FloatingAction icon="refresh" action={refreshDog} />
          <FloatingAction icon="heart" action={like} toggle="target: #modal-success" />
        </div>
      </div>
    );
  }
}

export default ActionCard;
