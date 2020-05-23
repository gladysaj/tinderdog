import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    user: {},
  };

  handleChange = (e) => {
    let { user } = this.state;
    user = { ...user, [e.target.name]: e.target.value };
    this.setState({ user });
  };
  
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
      >
        <div className="uk-margin">
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
        </div>
        <div className="uk-text-meta">
          <span>You have not yet registered? </span>
          <Link className="uk-text-primary" to="/signup">
            Create an account
          </Link>
        </div>

        <button className="uk-button uk-button-primary">Login</button>
      </form>
    );
  }
}

export default Login;
