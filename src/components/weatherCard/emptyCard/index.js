import { MdInfoOutline } from 'react-icons/md';

import styles from './emptyCard.module.scss';

const EmptyCard = () => {
  return (
    <div className={styles['empty-card__container']}>
      <h2>Search a city to its current weather.</h2>
      <div className={styles['info-box__container']}>
        <div className={styles['info-box__text']}>
          <div className ={styles['info-box__heading']}>
            <MdInfoOutline size={'2rem'} />
            <p>
              For cities with the same name, search for the city name followed by
              a comma and its country code
            </p>
          </div>
          <br />
          <p className={styles['info-text__secondary']}>
            <i>Example:</i>
          </p>
          <p className={styles['info-text__secondary']}>
            <i>Rome, IT or Rome, US</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;
