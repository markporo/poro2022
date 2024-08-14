import Head from 'next/head'
import Releases from '../components/Releases'
import { width85, box } from '../styles/pages.module.scss'
import { useEffect } from 'react';

export default function Listen() {
    useEffect(() => {
        // Check if the page has already been reloaded
        const reloaded = sessionStorage.getItem('reloaded');
    
        if (reloaded) {
          // Mark the page as reloaded
          sessionStorage.setItem('reloaded', 'false');
        } else {
            // First time loading
            sessionStorage.setItem('reloaded', 'true');
          }
      }, []);
      
    return (
        <div className={width85}>
            <Head>
                <title>Listen to PORO</title>
                <meta name='keywords' content='poro, music, poromusic, listen page' />
            </Head>
            <Releases></Releases>
        </div>
    )
}
