import React from 'react';
import './header.less';
import logo from '../assets/unicorn_inc.png';

const Header = (props) => {
  return (
    <header className="ds-demo-header">
      <img src={logo} alt="Unicorn Inc"/>
      <h1>{props.title}</h1>
      {props.children}
    </header>
  )
};

export default Header;