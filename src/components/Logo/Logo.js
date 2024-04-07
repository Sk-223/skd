import React from 'react';
import logo from '../../images/logo.png'
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Portfolio Logo" />
    </div>
  );
}

export default Logo;
