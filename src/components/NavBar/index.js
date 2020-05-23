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
            <li><Link to="/foster/5ec3330e27cd000c7db3fec7">Foster Dogs</Link></li>
        </ul>
    </div>
</nav>
)

export default NavBar;