import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials'
import { linksContainer, linksPhoto, linksButtons, linksBox, linksText } from '../styles/components/Links.module.scss';
import { pageContainer } from '../styles/index.module.scss'


export default function info() {
    return (
        <div className={pageContainer}>
            <Head>
                <title>Links</title>
                <meta name='keywords' content='poro, shows, tour, bio, tour dates, dates' />
            </Head>
            <div className={linksContainer}>
                <div className={linksPhoto}>
                    <Image alt="Poro Image" src="/images/site-images/bw-cali-photo-head3-2x3.jpg" intrinsic="true" width={400} height={400} priority></Image>
                </div>
                <div className={linksBox}>
                    <div className={linksButtons}>
                        <a
                            href="https://hypeddit.com/iuiue5" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linksText}
                        >
                            Pre-save DJTSA!
                        </a>
                    </div>
                    <div className={linksButtons}>
                        <a
                            href="https://open.spotify.com/playlist/0lpFHhSIftcZIzdBxCTvSy?si=79f277c05ae84ca4" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linksText}
                        >
                            Listen to Poro Remixes
                        </a>
                    </div>
                    <div className={linksButtons}>
                        <Link
                            href="/"
                            className={linksText}
                        >
                            Poro Home Page
                        </Link>
                    </div>
                    <Socials />
                </div>
            </div>
        </div>
    )
} 