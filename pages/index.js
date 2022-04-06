import Head from 'next/head'
import CompanyList from '../src/components/pageComponents/CompanyList'
import { GET_ALL_COMPANIES } from '../src/constants/end-points/company';
import { useAxios } from '../src/utils/HTTP';

export default function ClientPage() {
  const { loading, data, error } = useAxios({ ...GET_ALL_COMPANIES, inputData: null });
  console.log("loading: " + loading);
  return (
    <div>
      <Head>
        <title>IMS Client</title>
        <meta name="description" content="Client page for ims" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CompanyList />
    </div>
  )
}
