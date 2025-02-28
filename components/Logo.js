// /* eslint-disable @next/next/link-passhref */
import styles from '../styles/Logo.module.scss';
import { header } from "../styles/Nav.module.scss"
import Link from 'next/link';


export default function Logo() {
    return (
        <div className={`${header} ${styles.desktopLogoStyles}`}>
            <Link href='/' passHref>
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

