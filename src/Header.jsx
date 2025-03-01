import React from 'react';
import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-teal-700 h-20 flex justify-around items-center mb-4">
      <FaReact className='text-6xl'/>
      <nav className="flex gap-6 font-semibold">
        <p>Contact</p>
        <p>Blog</p>
        <p>Resume</p>
      </nav>
    </div>
  );
}

export default Header;