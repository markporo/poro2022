import TopNav from './TopNav'
import BottomNav from './BottomNav'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'
import MobileLogo from './MobileLogo'
import {mobileLogoStyles} from '../styles/Logo.module.scss'


const Layout = ({ children, title, description, additionalMeta, keywords }) => {
    return ( 
        <div className={styles.container}>
            <Meta title={title} description={description} keywords ={keywords} additionalMeta={additionalMeta} />
            <MobileLogo></MobileLogo>
            <TopNav></TopNav>
            <main className={styles.main}>
                {children}
            </main>
            <BottomNav className={styles.navText}></BottomNav>
        </div>
    )
}

export default Layout;