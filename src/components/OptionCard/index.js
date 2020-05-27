import React from "react";

const OptionCard = ({ background, title, description, action, toggle }) => {
  return (
    <div>
      <button
        onClick={action}
        uk-toggle={toggle}
        className="uk-display-block uk-card uk-card-default uk-cover-container uk-link-toggle"
      >
        <div className="uk-card-body uk-light uk-margin-xxlarge-top">
          <h1 className="uk-text-left uk-text-xlarge">{title}</h1>
          <p className="uk-text-left uk-text-emphasis uk-text-medium">
            {description}
          </p>
        </div>
        <img src={background} alt={title} uk-cover="true" className="bg-img" />
      </button>
    </div>
  );
};

export default OptionCard;
