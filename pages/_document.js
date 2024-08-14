// pages/_document.js...next should find this automatically and update info globally
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* I am using a custom meta.js for global meta */}
                    {/* Add the MailerLite script here */}
                    {/* <script
                        src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127"
                        type="text/javascript"
                        async
                    ></script> */}
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
                    {/* <script
                        dangerouslySetInnerHTML={{
                            __html: `
                function ml_webform_success_17102286() {
                  var $ = ml_jQuery || jQuery;
                  $('.ml-subscribe-form-17102286 .row-success').show();
                  $('.ml-subscribe-form-17102286 .row-form').hide();
                }
              `,
                        }}
                    /> */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;
