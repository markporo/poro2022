import Head from 'next/head'
import Image from "next/legacy/image"
import { vinyl, rotate } from '../styles/Tour.module.scss'
import { pageContainer } from '../styles/index.module.scss'


export default function store() {
    return (
        <div className={pageContainer}>
            <Head>
                <title>PORO STORE</title>
                <meta name='keywords' content='poro, shop, store, Poro Merch, Merchandise, merch' />
            </Head>
            <div className={vinyl}>
                <h1>Merch</h1>
                <p>...coming soon!</p>
                <Image className={rotate} alt="spinning vinyl record" src="/images/site-images/vinyl-80kb.webp" width={200} height={200} layout="responsive"></Image>
            </div>
        </div>
    )
}
