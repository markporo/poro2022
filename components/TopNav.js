import { header, topNavs, navLeft, navRight, navText } from "../styles/Nav.module.css"
import Link from "next/link";


function TopNav() {
    return (
        <nav className={topNavs}>
            <div className={navLeft}>
                <Link href='/listen'>Listen</Link>
            </div>
            <div><h1 className={header}> <Link href='/'>Poro</Link></h1></div>
            <div className={navRight}>
                <Link href='/follow'>Connect</Link>
            </div>
        </nav>
    )

}

export default TopNav;