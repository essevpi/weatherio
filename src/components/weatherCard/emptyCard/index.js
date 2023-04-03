import { MdInfoOutline } from 'react-icons/md';

import styles from './emptyCard.module.scss';

const EmptyCard = () => {
  return (
    <div className={styles['empty-card__container']}>
      <h2>Search a city to its current weather.</h2>
      <div className={styles['info-box__container']}>
        <MdInfoOutline size={'2rem'}/>
        <div className={styles['info-box__text']}>
          <p>For cities with the same name, search for the city name followed by a comma and its country code</p>
          <br/>
          <p>Example:</p>
          <p>Rome, IT or Rome, US</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;
