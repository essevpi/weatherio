import { useSelector } from 'react-redux';
import WeatherDetails from './weatherDetails';
import EmptyCard from './emptyCard';
import Loader from './loader';

import styles from './weatherCard.module.scss';

const WeatherCard = () => {
  const { data, loading } = useSelector(state => state.weather);
  
  return (
    <div className={`${styles['weather-card__container']} main-content__container`}>
      {
        data && data.cod == 200
        ? loading
          ? <Loader />
          : <WeatherDetails />
        : <EmptyCard />
      }
    </div>
  );
};

export default WeatherCard;