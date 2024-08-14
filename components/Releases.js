import Image from 'next/image'
import listenStyles from '../styles/Listen.module.scss'
import Link from 'next/link'


export default function Releases() {
    return (
        <div className={listenStyles.columnWrapper}>
            <div className={listenStyles.featureRelease}>
                <Image src='/images/tinified/Favorite Number Remix - Album Art -3000.jpg' alt='Favorite Number Remix' layout='responsive' width={500} height={500}></Image>
            </div>
            <div className={listenStyles.previousReleasesWrapper}>
                <div className={listenStyles.image}>
                    <Image src='/images/tinified/treat-yourself.jpg' alt='Favorite Number Remix' layout='responsive' width={300} height={300}></Image>
                </div>
                <div className={listenStyles.image}>
                    <Image src='/images/WAY-BACK-(Single) - bw - under 5mb.jpg' alt='Favorite Number Remix' layout='responsive' width={300} height={300}></Image>
                </div>
                <div className={listenStyles.image}>
                    <Image src='/images/legacyporo - 3.8mb.jpg' alt='Legacy Poro Tunes' layout='responsive' width={300} height={300}></Image>
                </div>
                <div className={listenStyles.image}>
                    <Image src='/images/tinified/poro remix square.jpg' alt='Favorite Number Remix' layout='responsive' width={300} height={300}></Image>
                </div>
            </div>
        </div>
    )
}