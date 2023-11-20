import React from 'react'; 
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import { socialLinks, quickLinks01, quickLinks02, quickLinks03 } from '../../constants';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div>
          <div>
            <img src={logo} alt='Medicare'/>
            <p>
              Copyright © {year} developed by Jenyll Mabborang all right reserved.
            </p>

            <div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;