import Image from "next/legacy/image"
import listenStyles from '../styles/Listen.module.scss'
import releases from '../data/releases'
import Socials from "./Socials";



const PreviousReleases = releases.slice(1, 5).map((release, i) => (
    <div key={i} className={listenStyles.image}>
        <a href={release.link} target="_blank" rel="noopener noreferrer">
            <Image
                src={release.src}
                alt={release.alt}
                layout='responsive'
                width={parseInt(release.width, 10)}
                height={parseInt(release.height, 10)}
            />
        </a>
    </div>
));

const PreviousOlderReleases = releases.slice(5).map((release, i) => (
    <div key={i} className={listenStyles.image}>
        <a href={release.link} target="_blank" rel="noopener noreferrer">
            <Image
                src={release.src}
                alt={release.alt}
                layout='responsive'
                width={parseInt(release.width, 10)}
                height={parseInt(release.height, 10)}
            />
        </a>
    </div>
));


export default function Releases() {
    return (
        <div className={listenStyles.columnWrapper}>
            <div className={listenStyles.featureReleaseWrapper}>
                <div className={listenStyles.featureRelease}>
                    <a href={releases[0].link} target="_blank" rel="noopener noreferrer">
                        <Image key='first and feature image' src={releases[0].src} alt={releases[0].alt} layout='responsive' priority width={releases[0].width} height={releases[0].height}></Image>
                    </a>
                </div>
            </div>
            <div className={listenStyles.previousReleasesWrapper}>
                {PreviousReleases}
            </div>
            <div className={listenStyles.previousReleasesWrapperTwo}>
                {PreviousOlderReleases}
            </div>
            <Socials />
        </div>
    )
}