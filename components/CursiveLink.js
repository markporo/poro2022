import {cursiveLink, normalText, songTitleText} from '../styles/components/CursiveLink.module.scss';

export default function CursiveLink() {
    return (
        <div className={cursiveLink}>
                <a href="https://hypeddit.com/rrmroh" target="_blank" rel="noopener noreferrer">
                    <span className={normalText}>listen now to</span>
                    <span className={songTitleText}>{`'Dance With Me'`}</span>
                </a>
        </div>
    );
}