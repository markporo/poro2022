// pages/_document.js...next should find this automatically and update info globally
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* I am using a custom meta.js for global meta */}
                </Head>
                <body>
                    {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-PC8ZT8HC"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>
                    </noscript>
                    {/* <!-- End Google Tag Manager (noscript) --> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
