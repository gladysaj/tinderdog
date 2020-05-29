import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/authServices";
import { signup } from "../../services/authServices";
import UIkit from "uikit";
import AppContext from "../../AppContext";

class AuthForm extends Component {
  static contextType = AppContext;
  state = {
    user: {},
    showPassword: false,
  };

  handleShowPassword = () => {
    const { showPassword } = this.state;
    const showValue = !showPassword;
    this.setState({ showPassword: showValue });
  };

  handleChange = (e) => {
    let { user } = this.state; //Sacamos al user del state para tener un codigo mas limpio
    //Reasignamos a user y lo ponemos igual a todo lo que ya haya en user ( ...user ) mas lo
    //que nos vaya poniendo el usuario en el input (e.target.name), name puede ser el email, password, etc
    user = { ...user, [e.target.name]: e.target.value };
    this.setState({ user }); //ahora actualizamos el estado con esta nueva informacion
  };

  //esta funcion es para poder crear un nuevo usuario o poder logearme
  handleSubmit = (e) => {
    e.preventDefault(); //evita que mi navegador se refresque
    const isLogin = this.props.location.pathname === "/login"; //para ayudarme a sabe que proceso se esta haciendo
    const { setUser } = this.context;
    const { user } = this.state;
    const action = isLogin ? login : signup; //va a determinar si ejecuto el servicio de login o el servicio de signup
    const { history } = this.props;
    const nextRoute = isLogin ? "/home" : "login";
    action(user)
      .then((res) => {
        if (isLogin) {
          const { user } = res.data;
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        }
        history.push(nextRoute);
      })
      .catch((err) => {
        UIkit.notification({
          message: `<span uk-icon='icon: close'></span> ${err.response.data.msg}`,
          status: "danger",
          pos: "top-right",
        });
      });
  };
  render() {
    // Compare with the props returned by react-router-dom
    const { showPassword } = this.state;

    const isLogin = this.props.location.pathname === "/login";

    return (
      <section className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-4@l uk-width-1-4@m uk-width-1-2@s">
            <h3>{isLogin ? "Login" : "Signup"}</h3>
            <form
              onSubmit={this.handleSubmit}
              className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
            >
              <div className="uk-margin-top">
                {isLogin ? null : (
                  <div>
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
                        //este name debe ser el mismo que el campo del modelo de User.js
                        name="name"
                        className="uk-input"
                        type="text"
                        required
                      />
                    </div>
                    <label className="uk-form-label" htmlFor="email">
                      Phone number:
                    </label>
                    <div className="uk-inline">
                      <span
                        className="uk-form-icon uk-form-icon-flip"
                        uk-icon="icon: receiver"
                      ></span>
                      <input
                        onChange={this.handleChange}
                        id="phoneNumber"
                        name="phoneNumber"
                        className="uk-input"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                )}
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
                <div className="uk-margin-top">
                  <label className="uk-form-label" htmlFor="password">
                    Password:
                  </label>
                  <div className="uk-inline">
                    <span
                      to="#"
                      className="uk-form-icon uk-icon-link uk-form-icon-flip"
                      uk-icon="icon: lock"
                    ></span>
                    <input
                      onChange={this.handleChange}
                      id="password"
                      name="password"
                      className="uk-input"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                  </div>
                </div>
                <Link
                  to="#"
                  className="uk-text-primary uk-text-meta"
                  onClick={this.handleShowPassword}
                >
                  Show password
                </Link>
              </div>
              <button className="uk-button uk-button-primary uk-margin-top">
                {isLogin ? "Login" : "Signup"}
              </button>

              {isLogin ? (
                <div className="uk-padding-small">
                  Not a member yet?
                  <Link className="uk-text-primary" to="/signup">
                    {" "}
                    Create an account
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

// AuthForm.contextType = AppContext;

export default AuthForm;
