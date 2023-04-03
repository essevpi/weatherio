const Card = ({ children, icon, title }) => {
  return (
    <div className='card__container'>
      <div className='card__title'>
        {icon}
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Card;
