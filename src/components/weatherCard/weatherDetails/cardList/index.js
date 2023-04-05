import styles from './cardContainer.module.scss';

const Card = ({ children, icon, title }) => {
  return (
    <div className={styles['card__container']}>
      <div className={styles['card__title']}>
        {icon}
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
};

const CardContainer = ({ style, cardsData }) => {
  return (
    <div className={style}>
      {cardsData.map((el, i) => (
        <Card icon={el.icon} title={el.title} key={i}>
          {el.markup}
        </Card>
      ))}
    </div>
  );
};

export default CardContainer;
