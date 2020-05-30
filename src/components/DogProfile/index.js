import React from "react";
import SubNavbar from "../Profile/SubNavbar";

const DogProfile = ({ image, name, breed, age, description, gender }) => {
  return (
    <div>
      <SubNavbar />

      <div className="uk-width-1-3@m uk-width-1-2@s uk-align-center uk-padding-small uk-text-left uk-background-default uk-round uk-margin-xlarge-top">
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
              <p className="uk-margin-remove-top">
                <span role="img" aria-label="breed">
                  🐕
                </span>
                {breed} &nbsp;{"  "}
                <span role="img" aria-label="age">
                  {" "}
                  🎂
                </span>
                {age} &nbsp;{"  "}
                <span role="img" aria-label="age">
                  {" "}
                  ⚤
                </span>
                {gender}
              </p>
            </div>
          </div>
        </div>
        <div className="uk-card-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DogProfile;
