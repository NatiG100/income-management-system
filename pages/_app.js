import { useRouter } from 'next/router'
import AdminLayout from '../src/components/pageComponents/shared/AdminLayout';
import ClientLayout from '../src/components/pageComponents/shared/ClientLayout';
import { GET_ALL_COMPANIES } from '../src/constants/end-points/company';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAdmin = router.pathname.includes('/admin');
  const isSuperAdmin = router.pathname.includes('super-admin');
  return (
    <>
      {isAdmin ?
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
        : isSuperAdmin ?
          <Component {...pageProps} />
          :
          <ClientLayout>
            <Component {...pageProps} />
          </ClientLayout>
      }
    </>
  );

}

export default MyApp
