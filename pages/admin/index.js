import Head from 'next/head';
import DashboardContent from '../../src/components/pageComponents/DashboardContent';


export default function Dashboard() {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard Page for IMS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <DashboardContent />
        </div>
    )
}
