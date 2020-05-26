import React from "react";

const FloatingAction = ({ action, icon, toggle }) => (
  <button
    className="uk-button uk-button-default floating-action"
    onClick={action}
    uk-toggle={toggle}
  >
    <span uk-icon={"icon:" + icon}></span>
  </button>
);

export default FloatingAction;
