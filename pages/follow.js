import Head from 'next/head'
import Image from 'next/image';
import { topSocials, emailSignUp, followContentContainer, followPagePhoto, emailAndSocials } from '../styles/components/Follow.module.scss'
import { pageContainer } from '../styles/index.module.scss'
import EmailSignUpForm from '../components/EmailSignUpForm.js';
import Socials from '../components/Socials';
import { followBlurredPhoto } from '../lib/base-64.js';
import { textBlurbConnect } from '../styles/pages.module.scss';

export default function Follow() {

    return (
        <div className={pageContainer}>
            <Head>
                <title>Poro Follow Page</title>
                <meta name='keywords' content='poro, music, follow poro on social media, follow, poromusic, dance with me, moonlight, porostosky' />
            </Head>
            <div className={textBlurbConnect}>
                <h1>{`Let's Hang! :)`}</h1>
            </div>
            <div className={followContentContainer}>
                <div className={followPagePhoto}>
                    <Image alt="Poro Image" src="/images/site-images/poro-colored-with-shadow-still-11kb.webp" placeholder='blur' blurDataURL={followBlurredPhoto} fill priority></Image>
                </div>
                <div className={topSocials}>
                        <Socials />
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