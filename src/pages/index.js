import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Search from '@/components/search/search';
import WeatherCard from '@/components/weatherCard/weatherCard';
import styles from '@/styles/Home.module.scss';


const Home = () => {
  return (
    <>
      <Head>
        <title>Weatherio</title>
        <meta name="description" content="Weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles['home__container']}>
        <Search />
        <WeatherCard />
      </div>
    </>
  );
};

export default Home;
