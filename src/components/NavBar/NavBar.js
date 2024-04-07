import React from 'react';
import Logo from '../Logo/Logo.js';
import NavBar from '../NavBar/NavBar.js';
import SearchIcon from '../SearchIcon';
import styles from './NavBar.module.css'; // Import CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <NavBar />
        <SearchIcon />
      </div>
    </header>
  );
}

export default Header;
