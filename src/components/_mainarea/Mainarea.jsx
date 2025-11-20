import React from 'react';
import workList from './WorkList.js';
import SectionWrap from './SectionWrap/SectionWrap.jsx';
import SectionWraper from './SectionWraper/SectionWraper.jsx';
import AboutImg from '../_common/AboutImg/aboutImg.jsx';
import Button from '../_common/Button/Button.jsx';
import styles from './Mainarea.module.css';

export default function Mainarea() {
  return (
    <main>
      <SectionWraper headingText="work">
        {workList.map((item) => (
          <SectionWrap
            key={item.title}
            id={item.title}
            title={item.title}
            subTitle={item.subTitle}
            src_l={item.src_l}
            src_s={item.src_s}
          />
        ))}
      </SectionWraper>
      <SectionWraper headingText="about">
        <div className={styles.about}>
          <div className={styles.imgBox}>
            <AboutImg />
            <p>やまもとあこ</p>
          </div>
          <div className={styles.aboutText}>
            <p>
              兵庫県神戸市出身。 <br />
              高校卒業後から地域の吹奏楽団でフルート講師として6年間活動してきました。
              現在、新たなことに挑戦する第1歩として職業訓練校でフロントエンド開発を学習しています。
            </p>
            <Button href="#" btnText="もっと知る" />
          </div>
        </div>
      </SectionWraper>
    </main>
  );
}
