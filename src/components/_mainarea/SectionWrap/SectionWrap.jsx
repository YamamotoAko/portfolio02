import React from 'react';
import styles from './SectionWrap.module.css';

export default function SectionWrap({ id, src_l, src_s, title, subTitle }) {
  return (
    <div className={styles.wraper} id={id}>
      <div className={styles.Wrap}>
        <div className={styles.img_l}>
          <img src={src_l} alt="PCサイズ" />
        </div>
        <p>
          <a href="">
            {title}
            <span>{subTitle}</span>
          </a>
        </p>
      </div>
      <div className={styles.img_s}>
        <img src={src_s} alt="スマホサイズ" />
      </div>
    </div>
  );
}
