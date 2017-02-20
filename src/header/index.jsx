import React from 'react';
import './header.less';
import logo from '../assets/unicorn_inc.png';

const Header = (props) => {
  return (
    <header className="ds-demo-header">
      <div>
        <div className="logo">
          <img src={logo} alt="Unicorn Inc"/>
        </div>
        <h1>{props.title}</h1>
      </div>

      <nav>
        <ul>
          <li><a href="#" className="btn">Home</a></li>
          <li><a href="#" className="btn">My Account</a></li>
          <li><a href="#" className="btn">Services</a></li>
          <li><a href="#" className="btn">Contact Us</a></li>
        </ul>
      </nav>

    </header>
  )
};

export default Header;
