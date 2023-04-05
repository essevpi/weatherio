import { MdInfoOutline } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import ErrorMessage from './errorMessage';

import styles from './emptyCard.module.scss';

const EmptyCard = () => {
  const { data } = useSelector((state) => state.weather);
  const { input, previousInput } = useSelector((state) => state.search);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles['empty-card__container']}
      >
        <h2>Search a city to see its current weather.</h2>
        <div className={styles['info-box__container']}>
          <div className={styles['info-box__text']}>
            <div className={styles['info-box__heading']}>
              <MdInfoOutline size={'2rem'} />
              <p>
                For cities with the same name, search for the city name followed
                by a comma and its country code
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
        <div className={styles['error__container']}>
          &nbsp;
          {data && data.cod == 404 && <ErrorMessage city={previousInput} />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EmptyCard;
