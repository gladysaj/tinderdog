import React, { Component } from "react";
import EditProfile from "./EditProfile"
import SubNavbar from "./SubNavbar";

class ProfileSi extends Component {
  state = {
    matches: [],
    likes: []
  }
  render() {
    return (
      <div>
        <SubNavbar />
        <EditProfile />
      </div>
    );
  }
}

export default ProfileSi;
