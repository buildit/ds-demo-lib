import React from 'react';
import './header.less';

const Header = (props) => {
  return (
    <div className="ds-demo-header">
      {props.children}
    </div>
  )
};

export default Header;
