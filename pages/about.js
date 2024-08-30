import Head from 'next/head'


export default function about() {
    return (
        <div >
            {/* Add meta dat directly to client side page */}
            <Head>
                <title>About</title>
                <meta name='keywords' content='poro, music, poromusic, dance with me, moonlight, porostosky' />
            </Head>
             {/* <h1>About</h1> */}
            {/* <p>THIS IS ABOUT PAGE</p>  */}
        </div>
    )
}
