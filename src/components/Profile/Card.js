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
          <img src={image} alt="profile picture" className="bg-img" />
        </div>
        <div>
          <div className="uk-card-body uk-container">
            <h3 className="uk-text-justify">{"Name:"}</h3>
            <p className="uk-text-justify">{name || "Jane Doe"}</p>
            <h3 className="uk-text-justify">{"Phone number:"}</h3>
            <p className="uk-text-justify">{phoneNumber || "123 456 7890"}</p>
            <h3 className="uk-text-justify">{"About Me:"}</h3>
            <p className="uk-text-justify">
              {description ||
                "Hello! I'm Jane, I have recently adopted a rescue puppy and she is amazing. As we moved into our new place, we are looking to adopt a companion for her. "}{" "}
              <br /> {"Please contact us! :D"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
