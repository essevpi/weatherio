import Link from 'next/link';
import { GoHeart, GoLinkExternal, GoMarkGithub } from 'react-icons/go';

import styles from './footer.module.scss';

const navLinks = {
  gitProfile: 'https://github.com/essevpi/',
  gitRepo: 'https://github.com/essevpi/weatherio',
}

const iconProps = {
  fontSize: '1.25rem',
  color: '#e7ff90',
};

const Footer = () => {
  return (
    <div className={styles['footer__container']}>
      <div className={`${styles['footer__wrapper']} main-content__container`}>
        <div className={styles['footer__content']}>
          <div className={styles['footer__sub-content']}>
            Made with
            <GoHeart {...iconProps} />
            by me
          </div>
          <div className={styles['footer__sub-content']}>
            My GitHub profile
            <Link href={navLinks.gitProfile}>
              <GoLinkExternal {...iconProps} />
            </Link>
          </div>
        </div>
        <div className={styles['footer__content']}>
          <Link href={navLinks.gitRepo}>
            <GoMarkGithub {...iconProps} size='2rem' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
