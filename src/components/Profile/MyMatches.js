import React, { Component } from "react";
import DogCard from "../DogCard";
import { getMatches, getMyDog } from "../../services/dogService"; //ESTOY USANDO ESTE SERVICIO COMO PRUEBA PORQUE NO SIRVE MATCH
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
            this.setState({ matches: result.match })
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

  }

  render() {
    return (
      <div>
        <SubNavbar />
        <section >
          <div className="uk-flex uk-flex-between">
            <div >
              {this.state.matches.length > 0 ? (
                <div>
                  {this.state.matches.map((match, index) => (
                    <DogCard key={index} {...match} />
                  ))}
                </div>
              ) : (
                <div className="uk-alert-primary" uk-alert="true">
                  <h1>No matches</h1>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MyMatches;
