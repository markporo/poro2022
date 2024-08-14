/* eslint-disable @next/next/no-script-in-head */
/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head';
import React from 'react';

const Meta = ({ title, keywords, description, additionalMeta }) => {
    return (
        <Head>
            {/* Google Analytics */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i) {
                            w[l] = w[l] || [];
                            w[l].push({'gtm.start':
                            new Date().getTime(), event: 'gtm.js'});
                            var f = d.getElementsByTagName(s)[0],
                                j = d.createElement(s),
                                dl = l != 'dataLayer' ? '&l=' + l : '';
                            j.async = true;
                            j.src = 'https://www.googletagmanager.com/gtag/js?id=' + i + dl;
                            f.parentNode.insertBefore(j, f);
                        })(window, document, 'script', 'dataLayer', 'G-N6QRSXE1Q1');
                        
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', 'G-N6QRSXE1Q1');
                    `,
                }}
            />
            {/* End Google Analytics */}

            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords || 'default,keywords'} />
            <meta name='description' content={description || 'Default description'} />
            {additionalMeta && additionalMeta.map((meta, index) => (
                <meta key={index} {...meta} />
            ))}
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon-poro-simple.ico' />

            <title>{title || 'Default Title'}</title>

            {/* Facebook Business Domain Verification */}
            <meta name="facebook-domain-verification" content="4ky5otzrrc7cn5w4kxcu2lk7g4lbja" />
            
            {/* Facebook Pixel Code */}
            <script dangerouslySetInnerHTML={{
                __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '3771932013020325');
                fbq('track', 'PageView');
                `}}
            />
            <noscript>
                <style>{`img { display: none; }`}</style>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img height="1" width="1"
                    src="https://www.facebook.com/tr?id=3771932013020325&ev=PageView&noscript=1" alt="fb_pixel" />
            </noscript>
            {/* End Facebook Pixel Code */}

            {/* Google Tag Manager */}
            <script dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PC8ZT8HC');`,
            }}
            />
            {/* End Google Tag Manager */}

            {/* // Script for Mailer Lite Form */}
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(w,d,e,u,f,l,n){w[f] = w[f] || function () {
                            (w[f].q = w[f].q || [])
                            .push(arguments);
                        }, l = d.createElement(e), l.async = 1, l.src = u,
                            n = d.getElementsByTagName(e)[0], n.parentNode.insertBefore(l, n);})
                        (window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
                        ml('account', '1058959');
                    `,
                    }}
                />  */}
        </Head>
    );
};

Meta.defaultProps = {
    title: 'PORO Music',
    keywords: 'PORO music, Poro, poro, indie pop band, cleveland, mark porostosky, artist, dance with me, moonlight, embrace, remixes',
    description: 'A website for connecting and representing all things regarding the band PORO',
    additionalMeta: []
};

export default Meta;
