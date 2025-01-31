import React from 'react';
import Head from 'next/head'
import Image from "next/legacy/image"
import SongTitle from '../components/SongReleaseTitle';
import { indexContentContainer, indexPageContainerSingleSquare, pageContainer, homePageImage, homePageText, noWrap, presave, color3, color2, color1 } from '../styles/index.module.scss';
import releases  from '../data/releases.js';
//import { textBlurb, aboutTitle } from '../styles/pages.module.scss';
//import Particles from '../components/Particles.js';

//blurDataURL={releases[0].blurDataURL}
const mostRecentRelease = releases[0];

export default function Home({ articles }) {
  return (
    <div className={pageContainer}>
      <Head>
        <title>Poro</title>
        <meta name='keywords' content='poro, Cleveland Ohio, poromusic, dance with me, moonlight, porostosky' />
      </Head>
      <div className={indexContentContainer}>
      {/* <Particles /> */}
        {/* <div className={textBlurb}>
          <h1 className={aboutTitle}>News</h1>
        </div> */}
        <div className={homePageImage}>
          <a href={mostRecentRelease.link} target="_blank" rel="noopener noreferrer">
            <Image className={indexPageContainerSingleSquare} alt={mostRecentRelease.alt} src={mostRecentRelease.src} placeholder='blur' blurDataURL={mostRecentRelease.blurPhoto}  width={500} height={500} priority layout="responsive"></Image>
          </a>
        </div>
        <div className={homePageText}>
          
          <SongTitle></SongTitle>
          <h6>Is Out Now!</h6>
          {/* <h6>Available on <span className={noWrap}></span></h6> */}
          <a href={mostRecentRelease.link} target="_blank" rel="noopener noreferrer">
            <h4 className={presave}>Click To Listen!</h4>
            {/* <h4 className={presave}>Presave Now!</h4> */}
          </a>

          {/* <h1>Dance <span className={noWrap}>With Me</span></h1> */}
          {/* <h1><span className={color1}>Dance</span> <span className={noWrap}><span className={color2}>With</span> <span className={color3}>Me</span></span></h1> */}
          


        </div>
      </div>
    </div>
  )
}

// #047E89 - greenish color -try on body -- maybe #d4fbff

