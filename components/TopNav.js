import {topNavs, navLeft, navRight, navText } from "../styles/Nav.module.scss"
import Link from "next/link";
import Logo from '../components/Logo';


function TopNav() {
    return (
        <div className={topNavs}>
            <div className={navLeft}>
                <Link href='/listen'>Music</Link>
            </div>
            <Logo></Logo>
            <div className={navRight}>
            <Link href='/info'>About</Link>
            </div>
        </div>
    )
}

export default TopNav;