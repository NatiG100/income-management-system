import { useRouter } from 'next/router'
import { Provider } from 'react-redux';
import AdminLayout from '../src/components/pageComponents/shared/AdminLayout';
import ClientLayout from '../src/components/pageComponents/shared/ClientLayout';
import { GET_ALL_COMPANIES } from '../src/constants/end-points/company';

import store from './../src/redux/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAdmin = router.pathname.includes('/admin');
  const isSuperAdmin = router.pathname.includes('super-admin');
  return (
    <>
      {isAdmin ?
        <Provider store={store}>
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        </Provider>
        : isSuperAdmin ?
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
          :
          <ClientLayout>
            <Component {...pageProps} />
          </ClientLayout>
      }
    </>
  );

}

export default MyApp
