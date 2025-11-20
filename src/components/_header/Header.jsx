import React from 'react';
import Navigation from './Navigation';
import FirstViewImg from './FirstView/FirstViewImg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <Navigation />
      <FirstViewImg />
    </header>
  );
}
