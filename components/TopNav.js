import { header, topNavs, navLeft, navRight, navText } from "../styles/Nav.module.scss"
import Link from "next/link";


function TopNav() {
    return (
        <nav className={topNavs}>
            <div className={navLeft}>
                <Link href='/listen'>Listen</Link>
            </div>
            <div><h1 className={header}> <Link href='/'>Mash Bash</Link></h1></div>
            <div className={navRight}>
                <Link href='/follow'>Follow</Link>
            </div>
        </nav>
    )

}

export default TopNav;