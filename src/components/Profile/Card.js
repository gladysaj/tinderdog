import React from "react";

// this is destructuring the props object e.g. props.image
const Card = ({ image, name, email, phoneNumber, description }) => {
  return (
    <div className="uk-width-1-3@m uk-width-1-2@s uk-align-center uk-padding-small uk-text-left uk-background-default uk-round uk-margin-small-top">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src={
                image || "https://api.adorable.io/avatars/80/abott@adorable.png"
              }
              alt="User"
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">{name}</h3>
            <p className="uk-text-meta uk-margin-remove-top">
              {email} / {phoneNumber}
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>{description || "Add a description..."}</p>
      </div>
    </div>
  );
};

export default Card;
