import React from 'react';
import './footer.less';

const Footer = (props) => {
  return (
    <footer className="ds-demo-footer">
      <div>
        <p>&copy; 2017 Unicorn Inc. All rights reserved.</p>
        <nav>
          <ul>
            <li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Sitemap</a></li>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;
