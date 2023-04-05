import Search from './search';
import { WiDayCloudyWindy } from 'react-icons/wi';

import styles from './navbar.module.scss';

const iconProps = {
  className: 'highlighted-text',
  fontSize: '2rem'
}

const Navbar = () => {
  return (
    <div className={styles['navbar__container']}>
      <div className={`${styles['navbar__wrapper']} main-content__container`}>
        <div className={styles['navbar__logo-container']}>
          <span className={styles['navbar-logo']}>
            <WiDayCloudyWindy {...iconProps}/>
          </span>
          <span>
            Weather<span className='highlighted-text'>io</span>
          </span>
        </div>
        <div className={styles['navbar__search-container']}>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
