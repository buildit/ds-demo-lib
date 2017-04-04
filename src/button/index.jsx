import React from 'react';
import './button.less';

const Button = (props) => {
  return (
    <a className="btn" href={props.href}>{props.children}</a>
  )
};

export default Button;
