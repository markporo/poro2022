import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials'
import { linksContainer, linksPhoto, linksButtons, linksBox, linksText } from '../styles/components/Links.module.scss';
import { pageContainer } from '../styles/index.module.scss'
import { linksBlurredPhoto } from '../lib/base-64';

export default function info() {
    return (
        <div className={pageContainer}>
            <Head>
                <title>Links</title>
                <meta name='keywords' content='poro, shows, tour, bio, tour dates, dates' />
            </Head>
            <div className={linksContainer}>
                <div className={linksPhoto}>
                    <Image alt="Poro Image" src="/images/site-images/bw-cali-photo-head-305kb.webp" placeholder='blur' intrinsic="true" width={400} height={400} priority blurDataURL={linksBlurredPhoto}></Image>
                </div>
                <div className={linksBox}>
                    <div className={linksButtons}>
                        <a
                            href="https://hypeddit.com/7vi4hn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linksText}
                        >
                            {`Listen to the new EP "Let Me Love You"`}
                        </a>
                    </div>
                    <div className={linksButtons}>
                        <a
                            href="https://open.spotify.com/playlist/1Uk5W1YhZu5YbUA3Iyb0QI?si=2dfb2ca165ef43ff"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linksText}
                        >
                            {`Listen to 'This Is Poro' Playlist`}
                        </a>
                    </div>
                    <div className={linksButtons}>
                        <a
                            href="https://open.spotify.com/playlist/0lpFHhSIftcZIzdBxCTvSy?si=79f277c05ae84ca4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linksText}
                        >
                            {`Listen to Poro Remixes Playlist`}
                        </a>
                    </div>
                    <div className={linksButtons}>
                        <a
                            href="https://instagram.com/poromusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linksText}
                        >
                            {`Follow Poro on Instagram`}
                        </a>
                    </div>
                    {/* <div className={linksButtons}>
                            <a
                                href="https://tiktok.com/poromusic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linksText}
                            >
                                {`Follow Poro on Tiktok`}
                            </a>
                        </div> */}
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