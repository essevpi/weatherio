import { useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { MdLocationPin } from 'react-icons/md';
import {
  WiThunderstorm,
  WiSprinkle,
  WiRain,
  WiSnow,
  WiWindy,
  WiDaySunny,
  WiCloudy,
  WiAlien,
} from 'react-icons/wi';

import styles from './mainInfo.module.scss';

/* 
  Icon is based on weather code first digit
  Weather IDs taken from:
  https://openweathermap.org/weather-conditions
*/
const iconGenerator = (weatherCode) => {
  const codeDigit =
    weatherCode === 800
      ? weatherCode
      : parseInt(weatherCode.toString().charAt(0));

  switch (codeDigit) {
    case 2:
      return <WiThunderstorm />;
    case 3:
      return <WiSprinkle />;
    case 5:
      return <WiRain />;
    case 6:
      return <WiSnow />;
    case 7:
      return <WiWindy />;
    case 8:
      return <WiCloudy />;
    case 800:
      return <WiDaySunny />;

    default:
      return <WiAlien />;
  }
};

const MainInfo = () => {
  const { data } = useSelector((state) => state.weather);

  return (
    <IconContext.Provider value={{ className: styles['weather__icons'] }}>
      <div className={`${styles['main__container']} card__container`}>
        <div className={'card__title'}>
          <MdLocationPin size={'2rem'} />
          <h1>
            {data.name}, {data.sys.country}
          </h1>
        </div>
        <div className={styles['sub-info__container']}>
          {iconGenerator(data.weather.id)}
          <div className={styles['temp__container']}>
            <h1>{Math.round(data.various.main.temp)}&deg;C</h1>
            <h3>
              {data.weather.description.charAt(0).toUpperCase() +
                data.weather.description.slice(1)}
            </h3>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default MainInfo;
