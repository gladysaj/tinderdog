import React from "react";

// this is destructuring the props object e.g. props.image
const DogCard = ({ image, name, breed, age, description, gender, ownerName, ownerPhone }) => {
  return (
    <div
      className="uk-child-width-1-3@m uk-child-width-1-2@s uk-flex-center uk-padding-small uk-text-left dog-card"
      uk-grid="true"
    >
      <div>
        <div className="uk-card uk-card-default uk-cover-container">
          <div className="uk-card-body uk-light uk-margin-xxlarge-top uk-overlay">
            <h2 className="uk-text-bold uk-text-left uk-text-xlarge">{name} {gender === "Female" ? "♀" : "♂"}</h2>
            {ownerName && ownerPhone ? (
              <h5 className="uk-text-bold uk-text-left uk-text-xlarge">Owner: {ownerName}<br />Phone: {ownerPhone}</h5>
            ) : null}
            <div className="uk-flex">
              <p className="uk-pill uk-text-left uk-text-small uk-text-bold uk-text-uppercase uk-background-primary">
                {breed}
              </p>

              <p className="uk-pill uk-text-left uk-text-small uk-text-bold uk-text-uppercase uk-background-primary">
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

export default DogCard;
