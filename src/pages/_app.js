import Layout from '../components/layout/layout';
import { Source_Sans_Pro } from 'next/font/google';

import '@/styles/globals.scss';

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['200', '400', '600', '900'],
});

const App = ({ Component, pageProps }) => {
  return (
    <main className={sourceSansPro.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
};

export default App;