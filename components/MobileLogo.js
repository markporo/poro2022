/* eslint-disable @next/next/link-passhref */
import styles from '../styles/Logo.module.scss';
import { header } from "../styles/Nav.module.scss"
import Link from 'next/link';


export default function MobileLogo() {
    return (
        <div className={`${header} ${styles.mobileLogoStyles}`}>
            <Link href='/'>
                <div>
                    <h1>Poro</h1>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </Link>
        </div >
    );
}

