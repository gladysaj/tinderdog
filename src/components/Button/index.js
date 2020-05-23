import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button class="uk-button uk-button-default" type="button">
        {this.props.label}
      </button>
    );
  }
}

export default Button;
