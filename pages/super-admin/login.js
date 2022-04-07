import Head from 'next/head';
import LoginPage from '../../src/components/pageComponents/Login';

export default function Register() {
    return (
        <div>
            <Head>
                <title>login</title>
                <meta name="description" content="Login page for ims" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LoginPage />
        </div>
    )
}
