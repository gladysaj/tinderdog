import React, { Component } from "react";
import { getMatchDogs } from "../../services/dogService";
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
    getMatchDogs().then((res) => {
      let randomDog = res.data[Math.floor(Math.random() * res.data.length)];

      this.setState({
        dog: randomDog,
        data: res.data,
        dogsShown: res.data,
        gender: res.data,
      });
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

    // Add liked dog's id to my "liked"
    // Check if liked dog has my id in its "liked"
    // If yes, add liked dog's id to my "match"
    // if not, do nothing
  };

  render() {
    const { dog } = this.state;
    return (
      <section>
        <Modal
          id="modal-success"
          title="Yay! I'ts a Match"
          text="You can now contact the dog's owner to arrange a meeting"
          label="Get in touch"
        />
        <h1 className="uk-margin-medium-top uk-text-bold uk-text-primary uk-text-center">
          Match a dog
        </h1>
        <p className="uk-text-center">Find the ideal match for your dog</p>

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
