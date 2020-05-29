import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className="uk-margin-auto-vertical"
        uk-modal="true"
        uk-toggle="true"
      >
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <h2 className="uk-modal-title uk-text-bold uk-text-center">
            {this.props.title}
          </h2>
          <p className="uk-text-center">
            {this.props.text}
          </p>
          <p className="uk-text-center">
            <button onClick={this.props.action} className="uk-button uk-button-primary">
              {this.props.label}
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Modal;
