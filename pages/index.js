import React from 'react';
import Head from 'next/head'
import Image from "next/legacy/image"
import SongTitle from '../components/SongReleaseTitle';
import { indexContentContainer, indexPageContainerSingleSquare, pageContainer, homePageImage, homePageText, noWrap, presave, color3, color2, color1 } from '../styles/index.module.scss';
import { indexBlurrePhoto } from '../lib/base-64.js';
import { textBlurb, aboutTitle } from '../styles/pages.module.scss';


export default function Home({ articles }) {
  return (
    <div className={pageContainer}>
      <Head>
        <title>Poro</title>
        <meta name='keywords' content='poro, Cleveland OHIO, poromusic, dance with me, moonlight, porostosky' />
      </Head>
      <div className={indexContentContainer}>
        {/* <div className={textBlurb}>
          <h1 className={aboutTitle}>News</h1>
        </div> */}
        <div className={homePageImage}>
          <a href="https://hypeddit.com/poromusic/moonlight" target="_blank" rel="noopener noreferrer">
            <Image className={indexPageContainerSingleSquare} alt="Moonlight Album Cover" src="/images/releases/moonlight artwork-150kb.webp" placeholder='blur' blurDataURL={indexBlurrePhoto} width={500} height={500} priority layout="responsive"></Image>
          </a>
        </div>
        <div className={homePageText}>
          
          <SongTitle></SongTitle>
          {/* <h6>Is Out Now!</h6> */}
          <h6>Releasing on <span className={noWrap}>10-25-24!</span></h6>
          <a href="https://hypeddit.com/poromusic/moonlight" target="_blank" rel="noopener noreferrer">
            {/* <h4 className={presave}>Click To Listen!</h4> */}
            <h4 className={presave}>Presave Now!</h4>
          </a>

          {/* <h1>Dance <span className={noWrap}>With Me</span></h1> */}
          {/* <h1><span className={color1}>Dance</span> <span className={noWrap}><span className={color2}>With</span> <span className={color3}>Me</span></span></h1> */}
          


        </div>
      </div>
    </div>
  )
}

// #047E89 - greenish color -try on body -- maybe #d4fbff

