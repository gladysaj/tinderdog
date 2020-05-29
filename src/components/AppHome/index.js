import React, { Component } from "react";
import AppContext from "../../AppContext";
import OptionCard from "../OptionCard";
import matchBg from "../../assets/match.jpg";
import fosterBg from "../../assets/foster.jpg";
import Modal from "../Modal";
import { getOwnerDogs } from "../../services/userService";

// usar appcontext acceder a la info del usuario, checar si tiene un perro
class AppHome extends Component {
  static contextType = AppContext;

  state = {
    dogs: [],
    target: false,
  };

  componentDidMount() {
    getOwnerDogs()
      .then((res) => {
        const { dogs } = res.data;
        let target = false;
        if (!dogs.length) target = true;

        this.setState({ dogs, target });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleCheckDogs = () => {
    const { dogs } = this.state;
    const { history } = this.props;

    if (dogs.length > 0) {
      history.push("/match");
    }
  };

  handleRouteChange = () => {
    const { history } = this.props;
    history.push("/foster");
  };

  handleModal = () => {
    const { history } = this.props;
    history.push("/create-dog");
  };

  render() {
    return (
      <div>
        <Modal
          id="modal-addDog"
          title="Add a dog first"
          text="To find matches for your dog, you must first have a dog, duh."
          action={this.handleModal}
          label="Add a dog"
        />

        <section className="uk-margin-large-top">
          <div
            className="uk-child-width-1-3@m uk-child-width-1-2@s uk-flex-center uk-padding-small uk-text-left"
            uk-grid="true"
          >
            <OptionCard
              title="Adopt"
              description="Browse lovely doggies and choose the right one to become your fur baby forever"
              action={this.handleRouteChange}
              toggle=""
              background={fosterBg}
            />

            <OptionCard
              title="Match"
              description="Browse dogs and find a the perfect match for your fur baby."
              // Validar si el usuario tiene un perro
              action={this.handleCheckDogs}
              toggle={this.state.target ? "target: #modal-addDog" : "target:"}
              background={matchBg}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default AppHome;
