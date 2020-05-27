import React, { Component } from "react";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className="uk-margin-auto-vertical"
        uk-modal="true"
      >
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <h2 className="uk-modal-title uk-text-bold uk-text-center">
            {this.props.title}
          </h2>
          <p className="uk-text-center">
            {this.props.text}
          </p>
          <p className="uk-text-center">
            <Link to="" className="uk-button uk-button-primary">
              {this.props.label}
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Modal;
