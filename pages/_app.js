import Layout from '../components/Layout';
import "../lib/fontawesome";
import '../styles/globals.css';
import '../styles/fonts.scss';


// wrap a layout around component 
//(which is the pages) to have header, 
//footer, nav everywhere


function MyApp({ Component, pageProps }) {
  return (
    <Layout title={pageProps.title} description={pageProps.description} keywords={pageProps.keywords} additionalMeta={pageProps.additionalMeta}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
