import React, { Component } from "react";
import { getDog, getDogs } from "../../services/dogService";
import FosterCard from "../FosterCard";

class FosterDogs extends Component {
  state = {
    // dog se popula del random no del get
    dog: {},
    data: [],
    randomDogId: "",
    dogsShown: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    /*getDog(id).then((res) => {
      const { result: dog } = res.data;
      this.setState({ dog });
    });*/

    // solo traer a todos, hacer el math.random para seleccionar uno
    getDogs().then((res) => {
      //this.setState({ data: res.data });
      console.log(res);
      let randomDog =
        res.data.results[Math.floor(Math.random() * res.data.results.length)];

      this.setState({ dog: randomDog, data: res.data, dogsShown: res.data });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { id } = nextProps.match.params;
      let randomDog = this.state.dogsShown.results[
        Math.floor(Math.random() * this.state.dogsShown.results.length)
      ];

      const filter = this.state.dogsShown.results.filter(
        (dog) => dog._id !== randomDog._id
      );

      this.setState({ dog: randomDog, dogShown: filter });

      // no hacer peticiones solo generar el random y settear el state al random
      /*getDog(id).then((res) => {
        const { result: dog } = res.data;
        this.setState({ dog });
      });*/

      /*getDogs().then((res) => {
        this.setState({ data: res.data });

        
      });*/
    }
  }

  handleNewDog = () => {
    let randomDog = this.state.dogsShown.results[
      Math.floor(Math.random() * this.state.dogsShown.results.length)
    ];

    const filter = this.state.dogsShown.results.filter(
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
        {/* this needs to be populated dynamically with DB */}
        <FosterCard
          {...dog}
          gender={this.state.dog.gender === "Female" ? "♀" : "♂"}
          refreshDog={this.handleNewDog}
          like=""
        />
      </section>
    );
  }
}

export default FosterDogs;
