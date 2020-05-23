import React from 'react';

const NavBar = () => (
  <nav className="uk-navbar-container" uk-navbar="true">
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="/">TinderDog</a></li>
        </ul>
    </div>
    <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </div>
</nav>
)

export default NavBar;