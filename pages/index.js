import Head from 'next/head'
import Image from 'next/image'
import { sun, indexContainer, poroCurrentLogo, pageContainer, earth } from '../styles/index.module.scss'

export default function Home({ articles }) {
  return (
    <div className={pageContainer}>
      <Head>
        <title>Poro</title>
        <meta name='keywords' content='poro, music, poromusic, dance with me, moonlight, porostosky' />
        {/* Facebook Business Domain Verification*/}
        <meta name="facebook-domain-verification" content="4ky5otzrrc7cn5w4kxcu2lk7g4lbja" />
      </Head>
      {/* <h1>PORO MAIN PAGE</h1> */}

      {/* Animation of Sun moving that I probably won't use */}
         {/* <div className={indexContainer}> */}
           {/* <div className={sun}></div> */}
           {/* <Image className={poroCurrentLogo} alt="for the rest of our lives graphic" src='/../public/images/For the rest of our lives - old couple1-cutout.png' width="100%" height="100%" layout='intrinsic'></Image> */}
           {/* <div className={earth}></div> */}
         {/* </div> */}
    </div>
  )
}


// #047E89 - greenish color -try on body




// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
