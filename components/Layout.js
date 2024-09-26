import TopNav from './TopNav'
import BottomNav from './BottomNav'
import styles from '../styles/Layout.module.scss'
import Meta from './Meta'
import CursiveLink from './CursiveLink'


const Layout = ({ children, title, description, additionalMeta, keywords }) => {
    return ( 
        <div className={styles.container}>
            <Meta title={title} description={description} keywords ={keywords} additionalMeta={additionalMeta} />
            <TopNav></TopNav>
            <main className={styles.main}>
                {children}
            </main>
            <CursiveLink></CursiveLink>
            <BottomNav className={styles.navText}></BottomNav>
        </div>
    )
}

export default Layout;