import React from 'react';
import {ReactComponent as Logo} from '../../Assets/Logo.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
