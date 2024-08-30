import Head from 'next/head'
import Image from 'next/image';
import { topSocials, emailSignUp, followContentContainer, followPagePhoto, emailAndSocials } from '../styles/components/Follow.module.scss'
import { pageContainer } from '../styles/index.module.scss'
import EmailSignUpForm from '../components/EmailSignUpForm.js';
import Socials from '../components/Socials';

export default function Follow() {

    return (
        <div className={pageContainer}>
            <Head>
                <title>Poro Follow Page</title>
                {/* <meta name='keywords' content='poro, music, follow poro on social media, follow, poromusic, dance with me, moonlight, porostosky' /> */}
            </Head>

            <div className={followContentContainer}>
                <div className={`${emailAndSocials} ${topSocials}`}>
                    <Socials />
                </div>
                <div className={followPagePhoto}>
                    <Image alt="Poro Image" src="/images/site-images/bw-cali-pockets.JPG" fill priority></Image>
                </div>
                <div className={emailAndSocials}>
                    <div className={emailSignUp}>
                        <EmailSignUpForm />
                    </div>
                    <Socials />
                </div>
            </div>
        </div>
    )
}

// link for poro remixes playlist ---form to submit for remix
// https://open.spotify.com/playlist/0lpFHhSIftcZIzdBxCTvSy?si=586a09aca5214af9