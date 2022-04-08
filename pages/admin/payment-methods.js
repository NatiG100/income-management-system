import Head from 'next/head'
import IncomeTypeList from '../../src/components/pageComponents/IncomeTypeList';

export default function PaymentMethods() {
    return (
        <div>
            <Head>
                <title>payment-methods</title>
                <meta name="description" content="payment method page for ims" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IncomeTypeList />
        </div>
    )
}
