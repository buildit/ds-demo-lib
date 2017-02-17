import React from 'react';
import './footer.less';

const Footer = (props) => {
  return (
    <div className="ds-demo-fotter">
      {props.children}
    </div>
  )
};

export default Footer;
