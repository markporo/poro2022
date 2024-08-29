import Head from 'next/head'
import Releases from '../components/Releases';
import { width85 } from '../styles/pages.module.scss';


export default function Listen() {

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
