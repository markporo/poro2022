import Image from 'next/image'
import listenStyles from '../styles/Listen.module.scss'
import { buttons } from '../styles/pages.module.scss'
import Link from 'next/link'
import { useState } from 'react'


export default function Releases() {
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);

    const toggleHover = () => {
        setHovered(!hovered)
    }

    const toggleHover2 = () => {
        setHovered2(!hovered2)
    }

    return (
        <div>
            <h3 className={listenStyles.h3}>Click and Listen</h3>
            <div className={listenStyles.flex}>

                <div className={listenStyles.image}>
                    <Image src='/../public/images/Favorite Number Art5 noise border.jpg' alt='Favorite Number Remix' layout='responsive' width='100%' height='100%'></Image>
                    <button onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={buttons}><a target="_MusicLinks" href='https://album.link/poro-treatyourself'>"Favorite Number" Remix</a></button>
                    <div className={hovered ? [listenStyles.singleLine] : ''}></div>
                </div>
                <div className={listenStyles.image}>
                    <Image src='/../public/images/treat-yourself.jpg' alt='Poro Legacy Songs' layout='responsive' width='100%' height='100%'></Image>
                    <button onMouseEnter={toggleHover2} onMouseLeave={toggleHover2} className={buttons}><a target="_MusicLinks" href='https://album.link/poro-treatyourself'>Legacy Poro Songs</a></button>
                    <div className={hovered2 ? [listenStyles.singleLine] : ''}></div>
                </div>
            </div>
        </div>
    )
}
