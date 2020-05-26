import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user, logout }) => {
  return (
    <header>
      <nav
        className="uk-navbar-container uk-navbar-transparent"
        uk-navbar="true"
      >
        {user._id ? (
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/">
                  <span role="img" aria-label="dog">
                    🐶
                  </span>{" "}
                  TinderDog
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/login">
                  <span role="img" aria-label="dog">
                    🐶
                  </span>{" "}
                  TinderDog
                </Link>
              </li>
            </ul>
          </div>
        )}

        {user._id ? (
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <Link to={"/signup"}>
                  <span role="img" aria-label="celebrate">
                    🥳
                  </span>{" "}
                  Adopt o match
                  {/* Falta agregar la logica para ver a donde va a mandar este link */}
                </Link>
              </li>
              <li>
                {/* Aqui estoy redirigiendo a una ruta que aun no existe. Esta ruta mostrara la card del perfil del usuario */}
                <Link to="/profile">
                  <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                    <div className="uk-width-auto">
                      <img
                        className="uk-border-circle"
                        width="40"
                        height="40"
                        alt={user.name}
                        src={user.profile_picture}
                      />
                    </div>
                    <div className="uk-width-expand">
                      <div className="uk-margin-remove-bottom">{user.name}</div>
                    </div>
                  </div>
                </Link>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li onClick={logout}>Logout</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/signup">
                  <span role="img" aria-label="celebrate">
                    🥳
                  </span>{" "}
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span role="img" aria-label="enter">
                    ⤴️
                  </span>{" "}
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
