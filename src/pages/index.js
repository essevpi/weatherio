import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import WeatherCard from '@/components/weatherCard/weatherCard';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['home__container']}>
        {/* Weather card component here */}
        <WeatherCard />
      </div>
    </>
  );
};

export default Home;
