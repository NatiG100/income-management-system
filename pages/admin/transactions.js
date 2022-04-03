import Head from 'next/head'
import TransactionList from '../../src/components/pageComponents/TransactionList'

export default function Transactions() {
    return (
        <div>
            <Head>
                <title>transactions</title>
                <meta name="description" content="Transaction page for ims" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransactionList />
        </div>
    )
}
