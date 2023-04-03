import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherDetails from './weatherDetails';
import EmptyCard from './emptyCard';
import Loader from './loader';

import styles from './weatherCard.module.scss';
import MobileView from './mobileView';
import useCheckIfMobile from '@/hooks/useCheckIfMobile';

const WeatherCard = () => {
  const isMobile = useCheckIfMobile();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.weather);
  
  return (
    <div className={`${styles['weather-card__container']} main-content__container`}>
      {
        data && data.cod == 200
        ? loading
          ? <Loader />
          : isMobile 
            ? <MobileView /> 
            : <WeatherDetails />
        : <EmptyCard />
      }
    </div>
  );
};

export default WeatherCard;