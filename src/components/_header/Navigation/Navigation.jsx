import Logo from '../../_common/Logo/Logo';
import styles from './Navigation.module.css';
import NavMenu from '../NavMenu/NavMenu';

export default function Navigation() {
  return (
    <>
      <div className={styles.box}>
        <Logo />
        <NavMenu />
      </div>
    </>
  );
}
