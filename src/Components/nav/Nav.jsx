import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <div className="nav">
      <a
        href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#price"
        onClick={() => setActiveNav('#price')}
        className={activeNav === '#price' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#work"
        onClick={() => setActiveNav('#work')}
        className={activeNav === '#work' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav('#contacts')}
        className={activeNav === '#contacts' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default Nav;
