import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import { socialLinks, quickLinks01, quickLinks02, quickLinks03 } from '../../constants';

const Footer = () => {

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex flex-col justify-between md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt='Medicare' />
            <p className='text-[16px] leading-7 font-[400] text-textColor'>
              Copyright © {year} developed by Jenyll Mabborang all right reserved.
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {
                socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={index}
                      to={link.path}
                      onClick={scrollToTop} // Add onClick to scroll to top
                      className='w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                    >
                      <Icon className='w-6 h-6'/>
                    </Link>
                  )
                })
              }
            </div>
          </div>

          <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
                Quick Links
              </h2>
              <ul>
                {
                  quickLinks01.map((item, index) =>
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={scrollToTop} // Add onClick to scroll to top
                        className='text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor'
                      >
                        {item.display}
                      </Link>
                    </li>
                  )
                }
              </ul>
            </div>

            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
                I want to:
              </h2>
              <ul>
                {
                  quickLinks02.map((item, index) =>
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={scrollToTop} // Add onClick to scroll to top
                        className='text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor'
                      >
                        {item.display}
                      </Link>
                    </li>
                  )
                }
              </ul>
            </div>

            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
                Support
              </h2>
              <ul>
                {
                  quickLinks03.map((item, index) =>
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={scrollToTop} // Add onClick to scroll to top
                        className='text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor'
                      >
                        {item.display}
                      </Link>
                    </li>
                  )
                }
              </ul>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;