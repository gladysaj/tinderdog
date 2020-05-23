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
    const nextRoute = isLogin ? "/" : "login";
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
    const isLogin = this.props.location.pathname === "/login";
    return (
      <section className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-4">
            <h3>{isLogin ? "Login" : "Signup"}</h3>
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
              {isLogin ? (
                <div className="uk-text-meta">
                  Aún no tienes cuenta?{" "}
                  <Link className="uk-text-primary" to="/signup">
                    Crear cuenta
                  </Link>
                </div>
              ) : null}
              <button className="uk-button uk-button-primary">
                {isLogin ? "Login" : "Signup"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthForm;
