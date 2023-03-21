import { WiUmbrella } from "react-icons/wi";

import styles from './rain.module.scss';

const Rain = () => {
  return (
    <div className={`${styles['main__container']} card__container`}>
      <div className={'card__title'}>
        <WiUmbrella size={'2rem'} />
        <h3>Rain</h3>
      </div>
      <div className={styles['info__container']}>
        rain
      </div>
    </div>
  );
};

export default Rain;
