import Layout from '../components/layout/layout';
import store from '../store/store';
import { Provider } from 'react-redux';
import { Source_Sans_Pro } from 'next/font/google';

import '@/styles/globals.scss';

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['200', '400', '600', '900'],
});

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <main className={sourceSansPro.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
};

export default App;