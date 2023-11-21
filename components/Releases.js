import Image from 'next/image'
import listenStyles from '../styles/Listen.module.scss'
import { buttons } from '../styles/pages.module.scss'
import Link from 'next/link'
import { useState } from 'react'
// import RemixPlaylist from './Spotify Embed/RemixPlaylist'
// import LegacyPlaylist from './Spotify Embed/LegacyPlaylist'


export default function Releases() {
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [focusedAndUnfocused, setFocusedAndUnfocused] = useState(false);

    const toggleHover = () => {
        setHovered(!hovered)
    }

    const toggleHover2 = () => {
        setHovered2(!hovered2)
    }

    // const toggleFocusedAndUnfocused = () => {
    //     console.log('setting focus');
    //     // if clicked then set all other navs hover state to unfocused with a class.
    //     // include mixin color bg white when focus is true
    //     // when focus not true ... go back to colors...set bg color on each nav
    //     // how to detect color? 
    // }

    return (
        <div className={listenStyles.columnWrapper}>
            <div className={listenStyles.featureRelease} onClick={focusedAndUnfocused}>
                <Image src='/../public/images/tinified/Favorite Number Remix - Album Art -3000.jpg' alt='Favorite Number Remix' layout='responsive' width='400px' height='400px'></Image>
            </div>
            <div className={listenStyles.previousReleasesWrapper}>
                <div className={listenStyles.image} onClick={focusedAndUnfocused}>
                    <Image src='/../public/images/tinified/treat-yourself.jpg' alt='Favorite Number Remix' layout='responsive' width='300px' height='300px'></Image>
                </div>
                <div className={listenStyles.image} onClick={focusedAndUnfocused}>
                    <Image src='/../public/images/WAY-BACK-(Single) - bw - under 5mb.jpg' alt='Favorite Number Remix' layout='responsive' width='300px' height='300px'></Image>
                </div>
                <div className={listenStyles.image} onClick={focusedAndUnfocused}>
                    <Image src='/../public/images/legacyporo - 3.8mb.jpg' alt='Legacy Poro Tunes' layout='responsive' width='300px' height='300px'></Image>
                </div>
                <div className={listenStyles.image} onClick={focusedAndUnfocused}>
                    <Image src='/../public/images/tinified/poro remix square.jpg' alt='Favorite Number Remix' layout='responsive' width='300px' height='300px'></Image>
                </div>
            </div>
            {/* <div className={listenStyles.flexPlaylists}> */}
            {/* <LegacyPlaylist></LegacyPlaylist> */}
            {/* <div className={listenStyles.image}>
                    <Image src='/../public/images/Favorite Number Art5 noise border.jpg' alt='Favorite Number Remix' layout='responsive' width='100%' height='100%'></Image>
                    <button onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={buttons}><a target="_MusicLinks" href='https://album.link/poro-treatyourself'>"Favorite Number" Remix</a></button>
                    <div className={hovered ? [listenStyles.singleLine] : ''}></div>
                </div>
            {/* </div>  */}
        </div>
    )
}
