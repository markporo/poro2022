import React from 'react';
import Head from 'next/head'
import Image from "next/legacy/image"
import SongTitle from '../components/SongReleaseTitle';
import { indexContentContainer, indexPageContainerSingleSquare, pageContainer, homePageImage, homePageText, noWrap, presave, color3, color2, color1 } from '../styles/index.module.scss'

export default function Home({ articles }) {
  return (
    <div className={pageContainer}>
      <Head>
        <title>Poro</title>
        <meta name='keywords' content='poro, Cleveland OHIO, poromusic, dance with me, moonlight, porostosky' />
      </Head>
      <div className={indexContentContainer}>
        <div className={homePageImage}>
          <a href="https://hypeddit.com/iuiue5" target="_blank" rel="noopener noreferrer">
            <Image className={indexPageContainerSingleSquare} alt="Dance With Me Album Cover" src="/images/releases/DWM-album-cover-300kb.jpg" width={1000} height={1000} priority layout="responsive"></Image>
          </a>
        </div>
        <div className={homePageText}>
          {/* listen link/ presave link */}
          <SongTitle></SongTitle>
          {/* <h1>Dance <span className={noWrap}>With Me</span></h1> */}
          {/* <h1><span className={color1}>Dance</span> <span className={noWrap}><span className={color2}>With</span> <span className={color3}>Me</span></span></h1> */}
          <a href="https://hypeddit.com/iuiue5" target="_blank" rel="noopener noreferrer">
            <h4 className={presave}>Click To Presave!</h4>
          </a>
          <h6>Releasing on <span className={noWrap}>9-13-24!</span></h6>
          
        </div>
      </div>
    </div>
  )
}

// #047E89 - greenish color -try on body -- maybe #d4fbff

