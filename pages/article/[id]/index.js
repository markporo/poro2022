import { useRouter } from 'next/router'
import Link from 'next/link'

export default function article({ article }) {
    // const router = useRouter()
    // const { id } = router.query


    return (
        <div>
            {article.title}
            <p> {article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </div>
    )
}


// data fetching provided to next pages
// getServerSideProps fetches the data at time of request
// getStaticProps fetches at build time
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article,
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map((article) => {
//         article.id
//     })

//     const paths = ids.map(id => ({
//         params: {
//             id: String(id)
//         }
//     }))

//     return {

//         paths, fallback: false,


//     }
// }