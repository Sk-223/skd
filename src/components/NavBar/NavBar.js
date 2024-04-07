import React from 'react';
import styles from './NavBar.module.css'; // Import CSS module

const NavBar = () => {
  return (
    <nav className={styles.navbar}> {/* Apply CSS module class */}
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
