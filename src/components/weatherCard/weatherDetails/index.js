import { useSelector } from 'react-redux';
import MainInfo from './mainInfo';
import CardList from './cardList';
import useCheckIfMobile from '@/hooks/useCheckIfMobile';
import { motion, AnimatePresence } from 'framer-motion';
import {
  convertWindSpeed,
  convertDegreesToDirection,
  getLocaleTime,
} from '@/utils/helperFunctions';
import {
  WiStrongWind,
  WiUmbrella,
  WiThermometer,
  WiBarometer,
  WiHumidity,
  WiSunrise,
  WiSunset,
  WiWindDeg,
} from 'react-icons/wi';

import styles from './weatherDetails.module.scss';

const WeatherDetails = () => {
  const isMobile = useCheckIfMobile();
  const { data } = useSelector((state) => state.weather);

  const iconProps = {
    size: '2rem',
    color: '#e7ff90',
  };

  const cardsData = [
    {
      title: 'Temps',
      icon: <WiThermometer {...iconProps} />,
      markup: (
        <div className={styles['temp-info__container']}>
          <div>
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
          </div>
          <div>
            <h4>Feels like</h4>
            <span className='display__value'>
              {Math.round(data.various.main.feels_like)}&deg;C
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Wind',
      icon: <WiStrongWind {...iconProps} />,
      markup: (
        <div className={styles['wind-info__container']}>
          <p>
            <span className='display__value-large'>
              {convertWindSpeed(data.various.wind.speed)}
            </span>
            Km/h
          </p>
          <span
            className={`${styles['wind-direction__container']} display__value`}
          >
            <WiWindDeg />
            {convertDegreesToDirection(data.various.wind.deg)}
          </span>
        </div>
      ),
    },
    {
      title: 'Rain',
      icon: <WiUmbrella {...iconProps} />,
      markup: (
        <div className={styles['rain-info__container']}>
          <h4>Rain volume in the last hour:</h4>
          {data.various.rain ? (
            <div>
              
              <p>{data.various.rain['1h']} mm</p>
            </div>
          ) : (
            <p>0mm</p>
          )}
        </div>
      ),
    },
    {
      title: '',
      icon: '',
      markup: (
        <div className={styles['sun-info__container']}>
          <div className={styles['sun-sub-info__container']}>
            <div className={styles['sun-card__title']}>
              <WiSunrise {...iconProps} />
              <h2>Sunrise</h2>
            </div>
            <div className={styles['sun-info__value']}>
              <h4>Local time: </h4>
              <span className='display__value'>
                {getLocaleTime(data.sys.sunrise, data.timezone)}
              </span>
            </div>
          </div>
          <div className={styles['sun-sub-info__container']}>
            <div className={styles['sun-card__title']}>
              <WiSunset {...iconProps} />
              <h2>Sunset</h2>
            </div>
            <div className={styles['sun-info__value']}>
              <h4>Local time:</h4>
              <span className='display__value'>
                {getLocaleTime(data.sys.sunset, data.timezone)}
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Pressure',
      icon: <WiBarometer {...iconProps} />,
      markup: (
        <div className={styles['pressure-info__container']}>
          <span className='display__value-large'>
            {data.various.main.pressure}
          </span>
          <span>hPa</span>
        </div>
      ),
    },
    {
      title: 'Humidity',
      icon: <WiHumidity {...iconProps} />,
      markup: (
        <div className={styles['humidity-info__container']}>
          <span className='display__value-large'>
            {data.various.main.humidity}
          </span>
          <span>%</span>
        </div>
      ),
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles['weather-details__container']}
      >
        <div className={styles['main-info__container']}>
          <MainInfo />
        </div>
        {isMobile ? (
          <CardList
            style={styles['sub-info__container-mobile']}
            cardsData={cardsData}
          />
        ) : (
          <CardList
            style={styles['sub-info__container-desktop']}
            cardsData={cardsData}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default WeatherDetails;
