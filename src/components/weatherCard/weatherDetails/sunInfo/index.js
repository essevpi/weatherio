import { useSelector } from 'react-redux';
import { WiSunrise, WiSunset } from 'react-icons/wi';

import styles from './sunInfo.module.scss';

const getLocaleTime = (UTCTime, Timezone) => {
  const time = new Date((UTCTime + Timezone) * 1000);

  return [
    time.getUTCHours() < 10 
      ? '0' + time.getUTCHours()
      : time.getUTCHours(),
        
        time.getUTCMinutes() < 10 
      ? '0' + time.getUTCMinutes()
      : time.getUTCMinutes()
  ].join(':');
}

const SunInfo = () => {
  const { data } = useSelector((state) => state.weather);

  return (
    <div className={`${styles['main__container']} card__container`}>
      <div className={styles['sub-info__container']}>
        <div className={'card__title'}>
          <WiSunrise size={'2rem'}/>
          <h3>Sunrise</h3>
        </div>
        <p>Local time: {getLocaleTime(data.sys.sunrise, data.timezone)}</p>
      </div>
      <div className={styles['sub-info__container']}>
        <div className={'card__title'}>
          <WiSunset size={'2rem'}/>
          <h3>Sunset</h3>
        </div>
        <p>Local time: {getLocaleTime(data.sys.sunset, data.timezone)}</p>
      </div>
    </div>
  );
};

export default SunInfo;
