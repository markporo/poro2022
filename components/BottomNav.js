import styles from "../styles/Nav.module.scss"
import Link from "next/link";


function BottomNav() {
    return (
        <div className={styles.bottomNavs}>
            <div className={styles.navBottomLeft}>
              <Link href='/info'>INFO</Link>
            </div>
            {/* <div className={styles.navBottomMiddle}>
              <Link href='/videos'>Watch</Link>
            </div> */}
            <div className={styles.navBottomRight}>
              <Link href='/store'>Shop</Link>
            </div>
        </div>
    )

}

export default BottomNav;