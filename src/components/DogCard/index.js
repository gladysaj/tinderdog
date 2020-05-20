import React from "react";

// this is destructuring the props object e.g. props.image
const Card = ({ image, name, breed, description }) => {
  return (
    <div
      className="uk-child-width-1-3@m uk-flex-center uk-padding-large uk-text-left"
      uk-grid="true"
    >
      <div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top uk-cover-container">
            <img src={image} alt={name} />
          </div>

          <div className="uk-card-body">
            <h2 className="uk-text-bold uk-text-left uk-text-xlarge">{name}</h2>
            <p class="uk-pill uk-text-left uk-text-small uk-text-bold uk-text-uppercase uk-light uk-background-secondary">
              {breed}
            </p>
            <p className="uk-text-left">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
