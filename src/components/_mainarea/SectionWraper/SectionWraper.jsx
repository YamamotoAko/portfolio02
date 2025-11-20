import React from 'react';
import styles from './SectionWraper.module.css';

export default function SectionWraper({ children, headingText }) {
  return (
    <section className={styles.secWrap}>
      <h2 className={styles.heading}>{headingText}</h2>
      {children}
    </section>
  );
}
