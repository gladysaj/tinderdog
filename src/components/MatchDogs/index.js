import React, { Component } from "react";
import { getDogs } from "../../services/dogService";
import Modal from "../Modal";
import DogCard from "../DogCard";
import FloatingAction from "../FloatingAction";

class MatchDogs extends Component {
  state = {
    dog: {},
    data: [],
    randomDogId: "",
    dogsShown: [],
  };

  componentDidMount() {
    getDogs().then((res) => {
      let randomDog = res.data[Math.floor(Math.random() * res.data.length)];

      this.setState({ dog: randomDog, data: res.data, dogsShown: res.data });
    });
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

  handleLike = () => {
    console.log("liked");
  };

  render() {
    const { dog } = this.state;
    return (
      <section>
        <Modal />
        <h1 className="uk-margin-medium-top uk-text-bold uk-text-primary">
          Adopt a Dog
        </h1>

        {/* <ActionCard
          {...dog}
          gender={this.state.dog.gender === "Female" ? "♀" : "♂"}
          refreshDog={this.handleNewDog}
          like={console.log("liked")}
        /> */}

        <div className="card-container uk-margin-large-bottom">
          <DogCard
            {...dog}
            gender={this.state.dog.gender === "Female" ? "♀" : "♂"}
          />

          <div className="uk-button-group floating-group uk-position-bottom-center">
            <FloatingAction icon="refresh" action={this.handleNewDog} />
            <FloatingAction
              icon="heart"
              action={this.handleLike}
              toggle="target: #modal-success"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default MatchDogs;
