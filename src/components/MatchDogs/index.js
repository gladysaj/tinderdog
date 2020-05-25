import React, { Component } from "react";
import { getDogs } from "../../services/dogService";
import ActionCard from "../ActionCard";

class MatchDogs extends Component {
  state = {
    dog: {},
    data: [],
    randomDogId: "",
    dogsShown: [],
  };

  componentDidMount() {
    getDogs().then((res) => {
      let randomDog =
        res.data[Math.floor(Math.random() * res.data.length)];

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

  render() {
    const { dog } = this.state;
    return (
      <section>
        <h1 className="uk-margin-medium-top uk-text-bold uk-text-primary">
          Adopt a Dog
        </h1>

        <ActionCard
          {...dog}
          gender={this.state.dog.gender === "Female" ? "♀" : "♂"}
          refreshDog={this.handleNewDog}
          like=""
        />
      </section>
    );
  }
}

export default MatchDogs;
