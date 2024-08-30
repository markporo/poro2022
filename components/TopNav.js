import {topNavs, navLeft, navRight, navText } from "../styles/Nav.module.scss"
import Link from "next/link";
import Logo from '../components/Logo';


function TopNav() {
    return (
        <div className={topNavs}>
            <div className={navLeft}>
                <Link href='/listen'>Listen</Link>
            </div>
            <Logo></Logo>
            <div className={navRight}>
                <Link href='/follow'>Follow</Link>
            </div>
        </div>
    )
}

export default TopNav;