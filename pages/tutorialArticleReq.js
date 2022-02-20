import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
    return (
        <div>
            <Head>
                <title>Poro</title>
                <meta name='keywords' content='poro, music, poromusic, dance with me, moonlight, porostosky' />
            </Head>
            <h1>PORO MAIN PAGE</h1>
            <ArticleList articles={articles} />
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}

// this page isn't to be seen, but was for practicing
// next code