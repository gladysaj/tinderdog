import React, { Component } from "react";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <div
        id="modal-success"
        className="uk-margin-auto-vertical"
        uk-modal="true"
      >
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <h2 className="uk-modal-title uk-text-bold uk-text-center">
            Yay! It's a match
          </h2>
          <p className="uk-text-center">
            You can now contact the dog's owner to arrange a meetup
          </p>
          <p className="uk-text-center">
            <Link to="" className="uk-button uk-button-primary">
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Modal;
