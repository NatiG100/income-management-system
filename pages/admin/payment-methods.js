import Head from 'next/head'
import PaymentMethodList from '../../src/components/pageComponents/CompanyList/PaymentForm/PaymentMethod'
import IncomeTypeList from '../../src/components/pageComponents/IncomeTypeList';
import companies from '../../src/data/companies';
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
