import React from 'react';
import "./Header.css";
import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <FaReact style={{fontSize:"50px"}}/>
      <nav className="nav-bar">
        <p>Contact</p>
        <p>Blog</p>
        <p>Resume</p>
      </nav>
    </div>
  );
}

export default Header;