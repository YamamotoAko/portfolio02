import React from 'react';
import navList from './navList.js';
import styles from './NavMenu.module.css';
export default function NavMenu() {
  return (
    <ul className={styles.nav}>
      {navList.map((item) => (
        <li key={item.id}>
          <a href="#">{item.list}</a>
        </li>
      ))}
    </ul>
  );
}
