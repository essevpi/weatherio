import { useSelector } from 'react-redux';
import { WiStrongWind } from 'react-icons/wi';

import styles from './wind.module.scss';

const convertWindSpeed = (speed) => Math.round((speed * 3600) / 1000);

const convertDegreesToDirection = (deg) => {
  const directions = [
    'N',
    'NE',
    'E',
    'SE',
    'S',
    'SW',
    'W',
    'NW',
  ];

  deg *= directions.length / 360;
  deg = Math.round(deg, 0);
  deg = (deg + directions.length) % directions.length;

  return directions[deg];
}


const Wind = () => {
  const { data } = useSelector((state) => state.weather);

  return (
    <div className={`${styles['main__container']} card__container`}>
      <div className={'card__title'}>
        <WiStrongWind size={'2rem'}/>
        <h3>Wind</h3>
      </div>
      <p>Speed: {convertWindSpeed(data.various.wind.speed)} Km/h</p>
      <p>Direction: {convertDegreesToDirection(data.various.wind.deg)}</p>
    </div>
  );
};

export default Wind;
