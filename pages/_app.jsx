import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import '@ui/scss/index.scss';

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};