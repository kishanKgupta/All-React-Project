import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          <p>Kishan Kumar Gupta</p>
    </div>
  );
}

export default Footer