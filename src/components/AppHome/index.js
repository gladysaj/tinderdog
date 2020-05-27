import React from "react";
import OptionCard from "../OptionCard";
import matchBg from "../../assets/match.jpg";
import fosterBg from "../../assets/foster.jpg";

// usar appcontext acceder a la info del usuario, checar si tiene un perro
const AppHome = () => {

//   handleRouteChange = () => {
//   const { dogs } = this.context.user;
//   const { history } = this.props;
//   if (dogs.length > 0) {
//     history.push("/match");
//   } else {
//     // abren el modal
//   }
// };

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
          link="/match"
          background={matchBg}
        />
      </div>
    </section>
  );
};

export default AppHome;
