import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles['loader__container']}>
      <h3>Loading results...</h3>
      <div className={styles['progress-bar__container']}>
        <div className={styles['progress-bar__progress']}></div>
      </div>      
    </div>
  );
};

export default Loader;
