import Search from './search';
import { WiDayCloudy } from 'react-icons/wi';
import ThemeSwitch from './themeSwitch';

import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles['navbar__container']}>
      <div className={`${styles['navbar__wrapper']} main-content__container`}>
        <div className={styles['navbar__logo-container']}>
          <span className={styles['navbar-logo']}>
            <WiDayCloudy className='highlighted-text'/>
          </span>
          <span>
            Weather<span className='highlighted-text'>io</span>
          </span>
        </div>
        <div className={styles['navbar__search-container']}>
          <Search />
        </div>
        {/* <div className={styles['navbar__empty-placeholder']} /> */}
      </div>
    </div>
  );
};

export default Navbar;
