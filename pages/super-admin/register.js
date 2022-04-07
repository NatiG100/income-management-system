import Head from 'next/head';
import RegisterPage from '../../src/components/pageComponents/Register';

export default function Register() {
    return (
        <div>
            <Head>
                <title>register</title>
                <meta name="description" content="Register page for ims" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RegisterPage />
        </div>
    )
}
