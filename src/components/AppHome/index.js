import React, { Component } from "react";
import AppContext from "../../AppContext";
import OptionCard from "../OptionCard";
import matchBg from "../../assets/match.jpg";
import fosterBg from "../../assets/foster.jpg";
import { getOwnerDogs } from "../../services/userService";

// usar appcontext acceder a la info del usuario, checar si tiene un perro
class AppHome extends Component {
  static contextType = AppContext;

  handleRouteChange = () => {
    getOwnerDogs()
      .then((res) => {
        console.log(res);
        const { dogs } = res.data;
        const { history } = this.props;

        if (dogs.length) {
          console.log("si tienes perros", dogs);
          // history.push("/match");
        } else {
          // abren el modal
          console.log("tienes que agregar un perro", dogs);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <section className="uk-margin-large-top">
        <div
          className="uk-child-width-1-3@m uk-child-width-1-2@s uk-flex-center uk-padding-small uk-text-left"
          uk-grid="true"
        >
          <OptionCard
            title="Adopt"
            description="Browse lovely doggies and choose the right one to become your fur baby forever"
            link="/foster"
            background={fosterBg}
          />

          <OptionCard
            title="Match"
            description="Browse dogs and find a the perfect match for your fur baby."
            // Validar si el usuario tiene un perro "handleRouteChange"
            action={this.handleRouteChange}
            background={matchBg}
          />
        </div>
      </section>
    );
  }
}

export default AppHome;
