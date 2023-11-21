import styles from "../styles/Nav.module.scss"
import Link from "next/link";


function BottomNav() {
    return (
        <nav className={styles.bottomNavs}>
            <div className={styles.navBottomLeft}>
              <Link href='/tour'>INFO</Link>
            </div>
            {/* <div className={styles.navBottomMiddle}>
              <Link href='/videos'>Watch</Link>
            </div> */}
            <div className={styles.navBottomRight}>
              <Link href='/store'>Shop</Link>
            </div>
        </nav>
    )

}

export default BottomNav;