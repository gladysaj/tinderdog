import React, { Component } from "react";
import FosterCard from "../FosterCard";
import { getDog } from "../../services/dogService";

class FosterDogs extends Component {
  state = {
    dog: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getDog(id).then((res) => {
      const { data: dog } = res;
      this.setState({ dog });
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match, this.props.match);

    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { id } = nextProps.match.params;

      getDog(id).then((res) => {
        const { data: dog } = res;
        this.setState({ dog });
      });
    }
  }

  render() {
    return (
      <section>
        <h1 className="uk-margin-medium-top uk-text-bold uk-text-secondary">
          Adopt a Dog
        </h1>
        {/* this needs to be populated dynamically with DB */}
        <FosterCard
          image="https://source.unsplash.com/eoqnr8ikwFE"
          name={this.state.dog.name}
          breed="Welsh Corgi"
          age="puppy"
          description="Muji is a sweet, small dog. He loves sleeping, playing and being around people."
        />
      </section>
    );
  }
}

export default FosterDogs;
