import Logo from '../_common/Logo/Logo';
import styles from './../_header/Header.module.css';
import NavMenu from './DrawerMenu/NavMenu';

export default function Navigation() {
  return (
    <>
      <div className={styles.box}>
        <Logo />
        <NavMenu style={styles.nav} />
      </div>
    </>
  );
}
