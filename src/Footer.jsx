import React from 'react';

const Footer = () => {
  return (
    <div className='h-20 flex justify-center items-center bg-teal-700 flex-col'>
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          <p>Kishan Kumar Gupta</p>
    </div>
  );
}

export default Footer