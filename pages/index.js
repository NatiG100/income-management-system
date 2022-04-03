import Head from 'next/head'
import CompanyList from '../src/components/pageComponents/CompanyList'

export default function ClientPage() {
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
