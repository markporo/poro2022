import Head from 'next/head'
import Image from 'next/image';
import Bio from '../components/Bio.js';
import Socials from '../components/Socials.js'
import { infoPageContainer, infoPagePhoto, bioText, mobile, desktop } from '../styles/components/Info.module.scss';
import { pageContainer } from '../styles/index.module.scss';
import { infoBlurredPhoto } from '../lib/base-64.js';
import { textBlurb, aboutTitle } from '../styles/pages.module.scss';


export default function info() {
    return (
        <div className={pageContainer}>
            <Head>
                <title>About</title>
                <meta name='keywords' content='poro, shows, tour, bio, tour dates, dates' />
            </Head>
            <div className={infoPageContainer}>
                <div className={textBlurb}>
                    <h1 className={aboutTitle}>About</h1>
                </div>
                <div className={infoPagePhoto}>
                    <Image alt="Poro Image" className={mobile} src="/images/site-images/bw-cali-photo-head-305kb.webp" placeholder='blur' blurDataURL={infoBlurredPhoto} responsive='true' width={500} height={500} priority></Image>
                    <Image alt="Poro Image" className={desktop} src="/images/site-images/bw-cali-photo-cropped-370kb.jpg" placeholder='blur' blurDataURL={infoBlurredPhoto} responsive='true' width={500} height={500} priority></Image>
                </div>
                <div className={bioText}>
                    <Bio />
                </div>
                <Socials />
            </div>
        </div>
    )
}
