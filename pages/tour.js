import Head from 'next/head'
import Image from 'next/image'
import { vinyl, rotate } from '../styles/Tour.module.scss'

export default function tour() {
    return (
        <div>
            <Head>
                <title>TOUR</title>
                <meta name='keywords' content='poro, shows, tour, tour dates, dates' />
            </Head>
            <h1>Upcoming Shows</h1>

            <div className={vinyl}>
                <Image className={rotate} alt="spinning vinyl record" src="/../public/images/vinyl_PNG.png" height="100px" width="100px" layout='responsive'></Image>
            </div>

        </div>
    )
}
