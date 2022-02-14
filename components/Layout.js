import Head from 'next/head'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <TopNav></TopNav>
            <main className={styles.main}>
                {children}
            </main>
            <BottomNav className={styles.navText}></BottomNav>
        </div>
    )
}

export default Layout;