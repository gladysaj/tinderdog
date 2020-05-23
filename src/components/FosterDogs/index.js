import React, { Component } from "react";
import { getDog, getDogs } from "../../services/dogService";
import FosterCard from "../FosterCard";

class FosterDogs extends Component {
  state = {
    dog: {},
    data: [],
    randomDogId: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    getDog(id).then((res) => {
      const { result: dog } = res.data;
      this.setState({ dog });
    });

    getDogs().then((res) => {
      this.setState({ data: res.data });

      let randomDog = this.state.data.results[
        Math.floor(Math.random() * this.state.data.results.length)
      ];

      this.setState({ randomDogId: randomDog._id });
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match, this.props.match);

    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { id } = nextProps.match.params;

      getDog(id).then((res) => {
        const { result: dog } = res.data;
        this.setState({ dog });
      });

      getDogs().then((res) => {
        this.setState({ data: res.data });

        let randomDog = this.state.data.results[
          Math.floor(Math.random() * this.state.data.results.length)
        ];

        this.setState({ randomDogId: randomDog._id });
      });
    }
  }

  render() {
    return (
      <section>
        <h1 className="uk-margin-medium-top uk-text-bold uk-text-primary">
          Adopt a Dog
        </h1>
        {/* this needs to be populated dynamically with DB */}
        <FosterCard
          image={this.state.dog.image}
          name={
            this.state.dog.name +
            " " +
            (this.state.dog.gender === "Female" ? "♀" : "♂")
          }
          breed={this.state.dog.breed}
          age={this.state.dog.age}
          description={this.state.dog.description}
          refreshDog={"/foster/" + this.state.randomDogId}
          like=""
        />
      </section>
    );
  }
}

export default FosterDogs;
