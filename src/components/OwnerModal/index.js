import React from "react";
import OwnerCard from "../OwnerCard";

const OwnerModal = ({ modalId, avatar, name, email, text, phone }) => {
  return (
    <div
      id={modalId}
      className="uk-margin-auto-vertical"
      uk-modal="true"
      uk-toggle="true"
    >
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button
          class="uk-modal-close-default"
          type="button"
          uk-close="true"
        ></button>
        <OwnerCard
          avatar={avatar}
          name={name}
          email={email}
          text={text}
          phone={phone}
        />
      </div>
    </div>
  );
};

export default OwnerModal;
