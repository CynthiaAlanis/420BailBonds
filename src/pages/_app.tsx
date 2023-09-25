import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/utils/NavBar';
import { ScrollToTopButton } from '../components/utils/ScrollToTopButton';
import { Footer } from '../components/utils/Footer';
import '../styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => (
    <div className="root">
        <Head>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#00c2cc" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>420 Bail Bonds</title>

            <meta
                key="description"
                name="description"
                content="We are here to help"
            />
            <meta
                key="og:title"
                name="og:title"
                content="420 Bail Bonds"
            />
            <meta
                key="og:description"
                name="og:description"
                content="420 Bail Bonds"
            />
            <meta
                key="og:image"
                name="og:image"
                content="/Bail_Front.jpeg"
            />
        </Head>
        <NavBar />
        <ScrollToTopButton />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default App;
