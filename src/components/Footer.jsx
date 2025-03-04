import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '/assets/LOGO/Logo2.png';

import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-700 p-5 text-center flex justify-evenly'>
      <img
        src={Logo}
        alt='Logo'
        className='h-8 w-fit text-primary text-center cursor-pointer justify-center my-auto'
      />

      <div className=' text-xs text-center my-auto text-white'>
        Copyright &copy; 2025 VizTile, All Rights Reserved.
      </div>
      <div className='flex justify-center text-center my-auto space-x-3.5  text-primary'>
        <FontAwesomeIcon
          icon={faFacebookF}
          className='cursor-pointer hover:text-white hover:opacity-90 transition-all duration-200'
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          className='cursor-pointer hover:text-white hover:opacity-90 transition-all duration-200'
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className='cursor-pointer hover:text-white hover:opacity-90 transition-all duration-200'
        />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className='cursor-pointer hover:text-white hover:opacity-90 transition-all duration-200'
        />
      </div>
    </footer>
  );
};

export default Footer;
