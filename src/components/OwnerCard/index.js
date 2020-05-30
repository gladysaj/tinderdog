import React from "react";

const OwnerCard = ({ avatar, name, email, text, phone }) => {
  return (
    <>
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src={avatar}
              alt="User"
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">{name}</h3>
            <p className="uk-text-meta uk-margin-remove-top">{email}</p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>
          {text}
          <br />
          <p>
            <span className="uk-text-primary">{phone}</span>
          </p>
        </p>
      </div>
    </>
  );
};

export default OwnerCard;
