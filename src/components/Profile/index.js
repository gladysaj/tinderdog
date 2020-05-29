import React, { Component } from "react";
import EditProfile from "./EditProfile"
import SubNavbar from "./SubNavbar";

class Profile extends Component {
  render() {
    return (
      <div>
        <SubNavbar />
        <EditProfile />
      </div>
    );
  }
}

export default Profile;
