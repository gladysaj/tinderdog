import React, { Component } from "react";
import { login, signup } from "../../services/authServices";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import UIKit from "uikit";

class AuthForm extends Component {
  state = {
    data: {},
    showPassword: false,
  };

  handleShowPassword = () => {
    const { showPassword } = this.state;
    const showValue = !showPassword;
    this.setState({ showPassword: showValue });
  };

  handleChange = (e) => {
    let { data } = this.state;
    // spread operator allows for persistend data -> adding the key and value to the same object
    // "name" is the attribute in the form field, "value" is whatever value the field contains at the time
    data = { ...data, [e.target.name]: e.target.value };
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;
    const { setUser } = this.context;
    const { history } = this.props;
    const isLogin = this.props.location.pathname === "/login";

    // return the service depending on the pathname
    const action = isLogin ? login : signup;
    const nextRoute = isLogin ? "/foster/5ec3330e27cd000c7db3fec7" : "login";

    // convert credentials to string and save in local storage
    action(data)
      .then((res) => {
        const { user } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        history.push(nextRoute);
      })
      .catch((err) => {
        // Handle errors on front-end with UIKit
        UIKit.notification({
          message: `<span uk-icon='icon: close'></span> ${err.response.data.msg}`,
          status: "warning",
          pos: "top-right",
        });
      });
  };

  render() {
    // Compare with the props returned by react-router-dom
    const isLogin = this.props.location.pathname === "/login";

    return (
      <section className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-4">
            <h1>{isLogin ? "Login" : "Signup"}</h1>

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
                    type="text"
                    required
                  />
                </div>

                <div>
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
                      type={this.state.showPassword ? "text" : "password"}
                      required
                    />
                  </div>
                </div>
              </div>

              <p
                className="uk-text-meta uk-text-primary cursor-pointer"
                onClick={this.handleShowPassword}
              >
                Show password
              </p>

              <button className="uk-button uk-button-primary">
                {isLogin ? "Login" : "Signup"}
              </button>

              {isLogin ? (
                <div className="uk-text-meta uk-margin-top">
                  Not a member yet?{" "}
                  <Link to="/signup" className="uk-text-primary">
                    Signup here
                  </Link>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

AuthForm.contextType = AppContext;

export default AuthForm;
