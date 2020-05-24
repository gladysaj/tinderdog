import React from "react";
import { Link } from "react-router-dom";

const OptionCard = ({ background, title, description, link }) => {
  return (
    <div>
      <Link
        to={link}
        className="uk-display-block uk-card uk-card-default uk-cover-container uk-link-toggle"
      >
        <div className="uk-card-body uk-light uk-margin-xxlarge-top">
          <h1 className="uk-text-left uk-text-xlarge">{title}</h1>
          <p className="uk-text-left uk-text-emphasis">{description}</p>
        </div>
        <img src={background} alt={title} uk-cover="true" className="bg-img" />
      </Link>
    </div>
  );
};

export default OptionCard;
