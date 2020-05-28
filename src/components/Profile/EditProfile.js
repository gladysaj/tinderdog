import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import Card from "./Card";
import { updateUser } from "../../services/profileServices";

class EditProfile extends Component {
  static contextType = AppContext;
  state = {
    user: {},
  };

  handleChange = (e) => {
    let { user } = this.state; 
    user = { ...user, [e.target.name]: e.target.value };
    this.setState({ user }); 
  };

  componentDidMount() {
    let { user } = this.state;
    user = this.context.user;
    this.setState({ user });
  }

  handleSubmit = () => {
    let { user } = this.state;
    updateUser(user)
      .then((res) => {
        const { user } = res.data;
        localStorage.setItem("user", JSON.stringify(user));

        this.context.setUser(user);

        //usuario esta actualizado (feedback)
        //tenemos que usar la funcion setUser del context para actualizar el usuario en el context
      })
      .catch();
  };

  render() {
    let { user } = this.state;
    return (
      <div>
        <Card image="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />

        <div className="uk-column-1-2 uk-column-divider">
          <form onSubmit={this.handleSubmit} className="uk-form-stacked ">
            <div className="uk-inline">
              <label className="uk-form-label" htmlFor="avatar">
                Profile picture:
              </label>
              <div className="uk-inline">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: pencil"
                ></span>
                <input
                  onChange={this.handleChange}
                  id="avatar"
                  name="avatar"
                  className="uk-input"
                  type="text"
                  placeholder="URL"
                  required
                />
              </div>
            </div>
          </form>
          <form onSubmit={this.handleSubmit} className="uk-form-stacked ">
            <div className="uk-padding-small">
              <label className="uk-form-label" htmlFor="name">
                Name:
              </label>
              <div className="uk-inline">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: pencil"
                ></span>
                <input
                  onChange={this.handleChange}
                  id="name"
                  name="name"
                  className="uk-input"
                  type="text"
                  required
                  placeholder="Update your user name"
                  value={user["name"] !== undefined ? user["name"] : ""}
                />
              </div>
            </div>
            <div className="uk-padding-small">
              <label className="uk-form-label" htmlFor="phoneNumber">
                Phone number:
              </label>
              <div className="uk-inline">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: pencil"
                ></span>
                <input
                  onChange={this.handleChange}
                  id="phoneNumber"
                  name="phoneNumber"
                  className="uk-input"
                  type="text"
                  required
                  placeholder="Update your phone number"
                  value={
                    user["phoneNumber"] !== undefined ? user["phoneNumber"] : ""
                  }
                />
              </div>
            </div>
            <div className="uk-padding-small">
              <label className="uk-form-label" htmlFor="description">
                Description:
              </label>
              <div className="uk-inline">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: pencil"
                ></span>
                <input
                  onChange={this.handleChange}
                  id="description"
                  name="description"
                  className="uk-input"
                  type="text"
                  placeholder="Add a description"
                  required
                  value={
                    user["description"] !== undefined ? user["description"] : ""
                  }
                />
              </div>
            </div>
          </form>
          <div className="uk-column-span uk-padding-large">
            <button className="uk-button uk-button-primary uk-width-1-4">
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
