import { useSelector } from 'react-redux';
import MainInfo from '../weatherDetails/mainInfo';
import {
  convertDegreesToDirection,
  convertWindSpeed,
  getLocaleTime,
} from '@/utils/helperFunctions';

import {
  WiStrongWind,
  WiUmbrella,
  WiThermometer,
  WiBarometer,
  WiHumidity,
  WiSunrise,
  WiSunset
} from 'react-icons/wi';

import styles from './mobileView.module.scss';

const iconProps = {
  size: '1.5rem',
  color: '#e7ff90'
};

const Heading = ({ icon, title }) => (
  <div className='card__title'>
    {icon}
    <h2>{title}</h2>
  </div>
);

const MobileView = () => {
  const { data } = useSelector((state) => state.weather);

  return (
    <div className={styles['mobile-view__container']}>
      <div
        className={`${styles['mobile-view__content']} card__container main-content__container`}
      >
        <MainInfo />
        <div className={styles['sub-info__container']}>
          {/* TEMPS */}
          <div className={styles['temps-info__container']}>
            <Heading icon={<WiThermometer {...iconProps} />} title='Temps' />
            <h4>Current min/max</h4>
            <div className={styles['temp-values__container']}>
              <span className='display__value'>
                &darr;
                {Math.round(data.various.main.temp_min)}&deg;C
              </span>
              <span className='display__value'>
                &uarr;
                {Math.round(data.various.main.temp_max)}&deg;C
              </span>
            </div>
            <div>
              <h4>Feels like</h4>
              <span className='display__value'>
                {Math.round(data.various.main.feels_like)}&deg;C
              </span>
            </div>
          </div>
          {/* WIND */}
          <div className={styles['wind-info__container']}>
            <Heading icon={<WiStrongWind {...iconProps} />} title='Wind' />
            <div className={styles['wind-info__container']}>
              <span>
                {convertWindSpeed(data.various.wind.speed)} Km/h,{' '}
                {convertDegreesToDirection(data.various.wind.deg)}
              </span>
            </div>
          </div>
          {/* RAIN */}
          <div className={styles['rain-info__container']}>
            <Heading icon={<WiUmbrella {...iconProps} />} title='Rain' />
            {data.various.rain ? (
              <div>
                <h3>Rain volume in the last hour:</h3>
                <p>{data.various.rain['1h']} mm</p>
              </div>
            ) : (
              <p>0mm in the last hours.</p>
            )}
          </div>
          {/* SUN */}
          <div className={styles['sun-info__container']}>
            <div className={styles['sun-sub-info__container']}>
              <Heading icon={<WiSunrise {...iconProps} />} title='Sunrise' />
              <div className={styles['sun-info__value']}>
                <h4>Local time: </h4>
                <span className='display__value'>
                  {getLocaleTime(data.sys.sunrise, data.timezone)}
                </span>
              </div>
            </div>
            <div className={styles['sun-sub-info__container']}>
              <Heading icon={<WiSunset {...iconProps} />} title='Sunset' />
              <div className={styles['sun-info__value']}>
                <h4>Local time:</h4>
                <span className='display__value'>
                  {getLocaleTime(data.sys.sunset, data.timezone)}
                </span>
              </div>
            </div>
          </div>
          {/* PRESSURE */}
          <div className={styles['pressure-info__container']}>
            <Heading icon={<WiBarometer {...iconProps} />} title='Pressure' />
            <span className='display__value-large'>
              {data.various.main.pressure}{' '}
            </span>
            <span>hPa</span>
          </div>
          {/* HUMIDITY */}
          <div className={styles['humidity-info__container']}>
            <Heading icon={<WiHumidity {...iconProps} />} title='Humidity' />
            <span className='display__value-large'>
              {data.various.main.humidity}
            </span>
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
