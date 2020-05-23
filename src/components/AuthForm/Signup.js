import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../services/authServices";
import UIkit from "uikit";

class Signup extends Component {
  state = {
    user: {},
  };

  handleChange = (e) => {
    let { user } = this.state;
    user = { ...user, [e.target.name]: e.target.value };
    this.setState({ user });
  };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const isLogin = this.props.location.pathname === "/login";
//     const { user: credentials } = this.state;
//     const action = isLogin ? login : signup;
//     action(credentials)
//       .then((res) => {
//         const { user } = res.data;
//         localStorage.setItem("user", JSON.stringify(user));
//       })
//       .catch((err) => {
//         UIkit.notification({
//           message: `<span uk-icon='icon: close'></span> ${err.response.data.msg}`,
//           status: "danger",
//           pos: "top-right",
//         });
//       });
//   };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
      >
        <div className="uk-margin">
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="email">
              Name:
            </label>
            <div className="uk-inline">
              <span
                className="uk-form-icon uk-form-icon-flip"
                uk-icon="icon: user"
              ></span>
              <input
                onChange={this.handleChange}
                id="name"
                name="name"
                className="uk-input"
                type="name"
                required
              />
            </div>
          </div>
          <label className="uk-form-label" htmlFor="email">
            Email:
          </label>
          <div className="uk-inline">
            <span
              className="uk-form-icon uk-form-icon-flip"
              uk-icon="icon: mail"
            ></span>
            <input
              onChange={this.handleChange}
              id="email"
              name="email"
              className="uk-input"
              type="email"
              required
            />
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="password">
              Password:
            </label>
            <div className="uk-inline">
              <span
                className="uk-form-icon uk-form-icon-flip"
                uk-icon="icon: lock"
              ></span>
              <input
                onChange={this.handleChange}
                id="password"
                name="password"
                className="uk-input"
                type="password"
                required
              />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="email">
              Phone Number:
            </label>
            <div className="uk-inline">
              <span
                className="uk-form-icon uk-form-icon-flip"
                uk-icon="icon: receiver"
              ></span>
              <input
                onChange={this.handleChange}
                id="phone"
                name="phone"
                className="uk-input"
                type="phone"
                required
              />
            </div>
          </div>
        </div>
        <div className="uk-text-meta">
          <span>Do you already have an account? </span>
          <Link className="uk-text-primary" to="/login">
            <span>Login</span>
          </Link>
        </div>
        <button className="uk-button uk-button-primary">Signup </button>
      </form>
    );
  }
}

export default Signup;
