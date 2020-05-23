import React, { Component } from "react";
import FosterCard from "../FosterCard";

class FosterDogs extends Component {
  state = {};

  render() {
    return (
      <section>
        <h1 className="uk-margin-medium-top uk-text-bold uk-text-secondary">
          Adopt a Dog
        </h1>
        {/* this needs to be populated dynamically with DB */}
        <FosterCard
          image="https://source.unsplash.com/eoqnr8ikwFE"
          name="Muji"
          breed="Welsh Corgi"
          age="puppy"
          description="Muji is a sweet, small dog. He loves sleeping, playing and being around people."
        />
      </section>
    );
  }
}

export default FosterDogs;
