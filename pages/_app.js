import Layout from '../components/Layout'
import styles from '../styles/globals.css'


// wrap a layout around component 
//(which is the pages) to have header, 
//footer, nav everywhere


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
