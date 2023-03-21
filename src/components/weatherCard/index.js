import styles from './weatherCard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import WeatherDetails from './weatherDetails';
import EmptyCard from './emptyCard/emptyCard';

const getIconUrl = (iconCode) => {
  return `http://openweathermap.org/img/w/${iconCode}.png`;
};

const getFlagIconUrl = (countryCode) => {
  return `http://openweathermap.org/images/flags/${countryCode}.png`;
};

const WeatherCard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.weather);
  const { input } = useSelector(state => state.search);

  return (
    <div className={styles['weather-card__container']}>
      {
        data && data.cod == 200 
        ? loading
          ? <div>Loading results...</div>
          : <WeatherDetails />
        : <EmptyCard />
      }
    </div>
  );
};

export default WeatherCard;