import { socialsSection, icon, fb, tt, insta, spot, it, yt } from '../styles/components/Socials.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faSpotify, faYoutube, faItunes } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
    return (
        <div className={socialsSection}>
            <a href="https://www.instagram.com/poromusic" target="_blank" rel="noopener noreferrer">
                <div className={`${icon} ${insta}`}>
                    <FontAwesomeIcon
                        icon={faInstagram}
                    />
                </div>
            </a>
            <a href="https://www.facebook.com/poromusic" target="_blank" rel="noopener noreferrer">
                <div className={`${icon} ${fb}`} >
                    <FontAwesomeIcon
                        icon={faFacebook}

                    />
                </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <div className={`${icon} ${tt}`}>
                    <FontAwesomeIcon
                        icon={faTiktok}
                    />
                </div>
            </a>
            <a href="https://www.youtube.com/@poromusic7738" target="_blank" rel="noopener noreferrer">
                <div className={`${icon} ${yt}`}>
                    <FontAwesomeIcon
                        icon={faYoutube}
                    />
                </div>
            </a>
            <a href="https://open.spotify.com/artist/5oxkE3MdqnnoDfmUVbXZiN" target="_blank" rel="noopener noreferrer">
                <div className={`${icon} ${spot}`}>
                    <FontAwesomeIcon
                        icon={faSpotify}
                    />
                </div>
            </a>
            <a href="https://music.apple.com/us/artist/poro/151144689" target="_blank" rel="noopener noreferrer">
                <div className={`${icon} ${it}`}>
                    <FontAwesomeIcon
                        icon={faItunes}
                    />
                </div>
            </a>
        </div>
    )
}