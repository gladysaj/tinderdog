import React, { Component } from "react";
import DogCard from "../DogCard";
import { getMatches, getMyDog } from "../../services/dogService";
import SubNavbar from "./SubNavbar";

class MyMatches extends Component {
  state = {
    matches: [],
  };

  componentDidMount() {
    getMyDog()
      .then((res) => {
        console.log(res);
        getMatches(res.data.dogs[0]._id)
          .then((res) => {
            console.log(res);
            const { result } = res.data;
            this.setState({ matches: result.match });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <SubNavbar />
        <section>
          <div>
            {this.state.matches.length > 0 ? (
              <div>
                {this.state.matches.map((match, index) => (
                  <DogCard key={index} {...match} />
                ))}
              </div>
            ) : (
              <h1 className="uk-text-center">No matches</h1>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default MyMatches;
