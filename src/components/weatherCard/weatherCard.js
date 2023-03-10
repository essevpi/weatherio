import styles from './weatherCard.module.scss';

const WeatherCard = () => {
  return (
    <div className={styles['weather-card__container']}>
      Weather Now
    </div>
  );
};

export default WeatherCard;