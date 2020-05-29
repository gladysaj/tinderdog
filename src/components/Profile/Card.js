import React from "react";
// this is destructuring the props object e.g. props.image
const Card = ({ image, name, phoneNumber, description }) => {

  return (
    <div>
      <div
        className="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-margin-xlarge-left uk-margin-xlarge-right"
        uk-grid="true "
      >
        <div className=" uk-container uk-first-column uk-card-body">
          <img
            src={
              image ||
              "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
            }
            alt="me"
            className="bg-img"
          />
        </div>
        <div>
          <div className="uk-card-body uk-container">
            <h3 className="uk-text-justify">{"Name:"}</h3>
            <p className="uk-text-justify">{name}</p>
            <h3 className="uk-text-justify">{"Phone number:"}</h3>
            <p className="uk-text-justify">{phoneNumber}</p>
            <h3 className="uk-text-justify">{"About Me:"}</h3>
            <p className="uk-text-justify">
              {description || "Add a description..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;