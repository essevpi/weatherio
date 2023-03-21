import { useSelector } from 'react-redux';
import { WiHumidity } from 'react-icons/wi';

import styles from './humidity.module.scss';

const Humidity = () => {
  const { data } = useSelector(state => state.weather);

  return (
    <div className={`${styles['main__container']} card__container`}>
      <div className={'card__title'}>
        <WiHumidity size={'2rem'}/>
        <h3>Humidity</h3>
      </div>
      <div className={styles['info__container']}>
        humidity
      </div>
    </div>
  );
};

export default Humidity;