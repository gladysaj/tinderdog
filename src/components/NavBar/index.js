import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="uk-navbar-container" uk-navbar="true">
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active"><Link to="/">TinderDog</Link></li>
        </ul>
    </div>
    <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
            <li><Link to="/signup">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
</nav>
)

export default NavBar;