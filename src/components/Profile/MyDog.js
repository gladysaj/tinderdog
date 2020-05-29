import React, { Component } from "react";
import DogCard from "../DogCard";
//AQUI import { getMyDog, updateMyDog } from "../../services/dogService";
import SubNavbar from "./SubNavbar";
import EditDogProfile from "./EditDogProfile";

class MyDog extends Component {
  state = {
    dogs: [],
  };

  componentDidMount() {
    getMyDog().then((res) => {
      console.log(res);
      const { dogs } = res.data;
      this.setState({ dogs });
    });
  }

  render() {
    return (
      <div>
        <SubNavbar />
        <section className="uk-section">
          <div className="uk-container">
            <div>
              {this.state.dogs.length > 0 ? (
                this.state.dogs.map((dog, index) => (
                  <DogCard key={index} {...dog} />
                ))
              ) : (
                <div className="uk-alert-primary" uk-alert="true">
                  <h1>Aun no has dado un perro de alta</h1>
                </div>
              )}
            </div>
          </div>
        </section>
        <EditDogProfile />
      </div>
    );
  }
}

export default MyDog;
