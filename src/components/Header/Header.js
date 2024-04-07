import React from 'react';
import Logo from '../Logo/Logo.js';
import NavBar from '../NavBar/NavBar.js';
import SearchIcon from '../SearchIcon';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <NavBar />
        <SearchIcon />
      </div>
    </header>
  );
}

export default Header;
