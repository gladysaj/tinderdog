import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

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
                <Link to="/" className="uk-logo">
                  <img src={logo} alt="Waggy's App" />
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/landing" className="uk-logo">
                <img src={logo} alt="Waggy's App" />
                </Link>
              </li>
            </ul>
          </div>
        )}

        {user._id ? (
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <Link to={"/foster"}>Adopt</Link>
              </li>
              <li>
                <Link to={"/match"}>Match</Link>
              </li>
              <li>
                <div className="uk-inline">
                  <button
                    className="uk-button uk-button-transparent"
                    type="button"
                  >
                    <div
                      className="uk-grid-small uk-flex-middle"
                      uk-grid="true"
                    >
                      <div className="uk-width-auto">
                        <img
                          className="uk-border-circle"
                          alt={user.name}
                          src={user.avatar || "https://api.adorable.io/avatars/80/abott@adorable.png"}
                        />
                      </div>
                      <div className="uk-width-expand">
                        <div className="uk-margin-remove-bottom uk-user">
                          {user.name}
                        </div>
                      </div>
                    </div>{" "}
                  </button>
                  <div uk-dropdown="pos: bottom-justify">
                    <ul className="uk-nav uk-dropdown-nav">
                      <li className="uk-nav-header">
                        <Link to="/profile">
                          <span
                            className="uk-margin-small-right"
                            uk-icon="icon: user"
                          ></span>{" "}
                          Profile
                        </Link>
                      </li>

                      <li className="uk-nav-header" onClick={logout}>
                        <Link to="">
                          <span
                            className="uk-margin-small-right"
                            uk-icon="icon: sign-out"
                          ></span>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
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
