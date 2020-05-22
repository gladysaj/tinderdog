import React from "react";

// this is destructuring the props object e.g. props.image
const Card = ({ image, name, breed, age, description }) => {
  return (
    <div
      className="uk-child-width-1-3@m uk-child-width-1-2@s uk-flex-center uk-padding-large uk-text-left"
      uk-grid="true"
    >
      <div>
        <div className="uk-card uk-card-default uk-cover-container">
          <div className="uk-card-body uk-light uk-margin-xxlarge-top uk-overlay">
            <h2 className="uk-text-bold uk-text-left uk-text-xlarge">{name}</h2>
            <div className="uk-flex">
              <p class="uk-pill uk-text-left uk-text-small uk-text-bold uk-text-uppercase uk-background-primary">
                {breed}
              </p>

              <p class="uk-pill uk-text-left uk-text-small uk-text-bold uk-text-uppercase uk-background-primary">
                {age}
              </p>
            </div>

            <p className="uk-text-left uk-text-emphasis">{description}</p>
          </div>
          <img src={image} alt={name} uk-cover="true" className="bg-img" />
        </div>
      </div>
    </div>
  );
};

export default Card;
