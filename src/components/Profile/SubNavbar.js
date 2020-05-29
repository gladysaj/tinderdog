import React, { Component } from "react";
import { Link } from "react-router-dom";

class SubNavbar extends Component {
  render() {
    return (
      <div>
        <span className="uk-padding-large">
          <ul
            className="uk-subnav uk-subnav-divider uk-subnav uk-subnav-pill uk-flex-center"
            uk-margin="true"
          >
            <li >
              <Link to="/profile">Edit Profile</Link>
            </li>
            <li>
              <Link to="#">My dog</Link>
            </li>
            {/* <li>
              <Link to="#">My liked dogs</Link>
            </li> */}
            <li>
              <Link to="#">My matches</Link>
            </li>
          </ul>
        </span>
      </div>
    );
  }
}

export default SubNavbar;