import React from "react";

const DogProfile = ({ image, name, breed, age, description, gender }) => {
  return (
    <>
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src={image}
              alt="User"
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">{name}</h3>
            <p className="uk-text-meta uk-margin-remove-top">{breed}</p>
            <p className="uk-text-meta uk-margin-remove-top">{age}</p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>
          {description}
          <br />
          <p>
            <span className="uk-text-primary">{gender}</span>
          </p>
        </p>
      </div>
    </>
  );
};

export default DogProfile;
