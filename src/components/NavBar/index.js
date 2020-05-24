import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active"><Link to="/"><span role="img" aria-label="dog">🐶</span> TinderDog</Link></li>
        </ul>
    </div>
    <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
            <li><Link to="/signup"><span role="img" aria-label="celebrate">🥳</span> Register</Link></li>
            <li><Link to="/login"><span role="img" aria-label="enter">⤴️</span> Login</Link></li>
        </ul>
    </div>
</nav>
)

export default NavBar;