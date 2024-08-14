import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { socialsSection, emailSignUp, icon, followContentContainer, fb, tt, insta } from '../styles/components/Follow.module.scss'
import { pageContainer } from '../styles/index.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";


export default function Follow() {
    useEffect(() => {
        // Check if the page has already been reloaded
        const reloaded = sessionStorage.getItem('reloaded');
    
        if (!reloaded) {
          // Mark the page as reloaded
          sessionStorage.setItem('reloaded', 'true');
    
          // Reload the page
          location.replace(location.href);
        }
      }, []);

    return (
        <div className={pageContainer}>
            <Head>
                <title>Poro</title>
                <meta name='keywords' content='poro, music, follow poro on social media, follow, poromusic, dance with me, moonlight, porostosky' />
                {/* // Script for Mailer Lite Form */}

            </Head>
            <Script
                    id="ml-webform-success"
                    strategy="afterInteractive"
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
                />
            <div className={followContentContainer}>
                <div className={socialsSection}>
                    <a href="https://www.facebook.com/poromusic" target="_blank" rel="noopener noreferrer">
                        <div className={`${icon} ${fb}`} >
                            <FontAwesomeIcon
                                icon={faFacebook}

                            />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/poromusic" target="_blank" rel="noopener noreferrer">
                        <div className={`${icon} ${insta}`}>
                            <FontAwesomeIcon
                                icon={faInstagram}
                            />
                        </div>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <div className={`${icon} ${tt}`}>
                            <FontAwesomeIcon
                                icon={faTiktok}
                            />
                        </div>
                    </a>
                </div>
                <div className={emailSignUp}>
                    <div className="ml-embedded" data-form="akfEN9"></div>
                </div>
            </div>
        </div>
    )
}

// link for poro remixes playlist ---form to submit for remix
// https://open.spotify.com/playlist/0lpFHhSIftcZIzdBxCTvSy?si=586a09aca5214af9