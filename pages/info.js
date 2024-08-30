import Head from 'next/head'
import Image from 'next/image';
import Bio from '../components/Bio';
import Socials from '../components/Socials'
import { infoPageContainer, infoPagePhoto, bioText } from '../styles/components/Info.module.scss';
import { pageContainer } from '../styles/index.module.scss'


export default function info() {
    return (
        <div className={pageContainer}>
            <Head>
                <title>Info</title>
                <meta name='keywords' content='poro, shows, tour, bio, tour dates, dates' />
            </Head>
            <div className={infoPageContainer}>
                <div className={infoPagePhoto}>
                    <Image alt="Poro Image" src="/images/site-images/bw-cali-photo-cropped-370kb.jpg" responsive='true' width={500} height={500} priority></Image>
                </div>
                <div className={bioText}>
                    <Bio />
                </div>
                <Socials />
            </div>
        </div>
    )
}
