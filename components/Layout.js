import TopNav from './TopNav'
import BottomNav from './BottomNav'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'


const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Meta />
            <TopNav></TopNav>
            <main className={styles.main}>
                {children}
            </main>
            <BottomNav className={styles.navText}></BottomNav>
        </div>
    )
}

export default Layout;