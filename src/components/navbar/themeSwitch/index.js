import styles from './themeSwitch.module.scss';

const ThemeSwitch = () => {
  return (
    <div className={styles['switch__container']}>
      <input
        className={styles['switch-checkbox']}
        id={`react-switch-new`}
        type='checkbox'
      />
      <label className={styles['switch-label']} htmlFor={`react-switch-new`}>
        <span className={styles['switch-button']} />
      </label>
    </div>
  );
};

export default ThemeSwitch;
