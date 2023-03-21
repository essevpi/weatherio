import { useSelector } from 'react-redux';
import { WiBarometer } from 'react-icons/wi';

import styles from './pressure.module.scss';

const Pressure = () => {
  const { data } = useSelector(state => state.weather);

  return (
    <div className={`${styles['main__container']} card__container`}>
      <div className={'card__title'}>
        <WiBarometer size={'2rem'}/>
        <h3>Pressure</h3>
      </div>
      <div className={styles['info__container']}>
        {data.various.main.pressure} hPa
      </div>
    </div>
  );
};

export default Pressure;
