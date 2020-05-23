import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";

class AuthForm extends Component {
  render() {
    const isLogin = this.props.location.pathname === "/login";
    return (
      <section className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-4">
            <h3>{isLogin ? "Login" : "Signup"}</h3>
            <div>{isLogin ? <Login /> : <Signup />}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthForm;
