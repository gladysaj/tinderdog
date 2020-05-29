import React, { Component } from "react";
import DogCard from "../DogCard";
//AQUI import { getMyDog } from "../../services/dogService"; //ESTOY USANDO ESTE SERVICIO COMO PRUEBA PORQUE NO SIRVE MATCH
import SubNavbar from "./SubNavbar";

class MyMatches extends Component {
  state = {
    matches: [],
  };

  componentDidMount() {
    getMyDog().then((res) => {
      console.log(res);
      
    });
  }

  render() {
    return (
      <div>
        <SubNavbar />
        <section className="uk-section">
          <div className="uk-container">
            <div className="uk-grid">
              {this.state.matches.length > 0 ? (
                <div className="uk-grid">
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
