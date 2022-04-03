import { useRouter } from 'next/router'
import AdminLayout from '../src/components/pageComponents/shared/AdminLayout';
import ClientLayout from '../src/components/pageComponents/shared/ClientLayout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAdmin = router.pathname.includes('admin');
  return (
    <>
      {isAdmin ?
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
        :
        <ClientLayout>
          <Component {...pageProps} />
        </ClientLayout>
      }
    </>
  );

}

export default MyApp
