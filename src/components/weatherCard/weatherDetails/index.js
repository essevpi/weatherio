import { useSelector } from 'react-redux';
import MainInfo from './mainInfo';
import SunInfo from './sunInfo';
import Wind from './wind';
import Pressure from './pressure';
import Temperature from './temperature';
import Rain from './rain';
import Humidity from './humidity';

import styles from './weatherDetails.module.scss';

const WeatherDetails = () => {
  const { data } = useSelector((state) => state.weather);

  return (
    <div className={styles['weather-details__container']}>
      <div className={styles['main-info__container']}>
        <MainInfo />
      </div>
      <div className={styles['sub-info__container']}>
        <Wind />
        <SunInfo />
        <Pressure />
        <Temperature />
        <Rain />
        <Humidity />
      </div>
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
};

export default WeatherDetails;
