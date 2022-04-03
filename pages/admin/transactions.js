import Head from 'next/head'
import TransactionList from '../../src/components/pageComponents/TransactionList'

export default function Transactions() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TransactionList />
        </div>
    )
}