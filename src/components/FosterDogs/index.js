import React, { Component } from "react";
import { getFosterDogs } from "../../services/dogService";
import DogCard from "../DogCard";
import FloatingAction from "../FloatingAction";

class FosterDogs extends Component {
  state = {
    dog: {},
    data: [],
    randomDogId: "",
    dogsShown: [],
  };

  componentDidMount() {
    getFosterDogs().then((res) => {
      let randomDog = res.data[Math.floor(Math.random() * res.data.length)];

      this.setState({ dog: randomDog, data: res.data, dogsShown: res.data });
    }).catch(err => console.log(err));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      let randomDog = this.state.dogsShown.results[
        Math.floor(Math.random() * this.state.dogsShown.results.length)
      ];

      const filter = this.state.dogsShown.results.filter(
        (dog) => dog._id !== randomDog._id
      );

      this.setState({ dog: randomDog, dogShown: filter });
    }
  }

  handleNewDog = () => {
    let randomDog = this.state.dogsShown[
      Math.floor(Math.random() * this.state.dogsShown.length)
    ];

    const filter = this.state.dogsShown.filter(
      (dog) => dog._id !== randomDog._id
    );

    this.setState({ dog: randomDog, dogShown: filter });
  };

  render() {
    const { dog } = this.state;
    return (
      <section>
        <h1 className="uk-margin-medium-top uk-text-bold uk-text-primary uk-text-center">
          Adopt a Dog
        </h1>
        <p className="uk-text-center">Find the ideal doggie to take home</p>

        <div className="card-container uk-margin-large-bottom">
          <DogCard
            {...dog}
            gender={this.state.dog.gender === "Female" ? "♀" : "♂"}
          />

          <div className="uk-button-group floating-group uk-position-bottom-center">
            <FloatingAction icon="refresh" action={this.handleNewDog} />
            <FloatingAction icon="heart" action={this.handleLike} />
          </div>
        </div>
      </section>
    );
  }
}

export default FosterDogs;
