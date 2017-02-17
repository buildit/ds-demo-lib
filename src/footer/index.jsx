import React from 'react';
import './footer.less';

const Footer = (props) => {
  return (
    <div className="ds-demo-footer">
      {props.children}
    </div>
  )
};

export default Footer;
