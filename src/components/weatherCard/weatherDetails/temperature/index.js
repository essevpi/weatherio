import { useSelector } from 'react-redux';
import { WiThermometer } from 'react-icons/wi';

import styles from './temperature.module.scss';

const Temperature = () => {
  const { data } = useSelector(state => state.weather);

  return (
    <div className={`${styles['main__container']} card__container`}>
      <div className={'card__title'}>
        <WiThermometer size={'2rem'}/>
        <h3>Temperature</h3>
      </div>
      <div className={styles['info__container']}>
        <p>min {Math.round(data.various.main.temp_min)}&deg;C</p>
        <p>max {Math.round(data.various.main.temp_max)}&deg;C</p>
        <p>feels like {Math.round(data.various.main.feels_like)}&deg;C</p>
      </div>
    </div>
  );
};

export default Temperature;
