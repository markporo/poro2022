
import listenStyles from '../../styles/Listen.module.scss'


const LegacyPlaylist = () => {
    return (
        <div className={listenStyles.playlist}>
            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/7ddv6Nw9UTcvEpNHo7iOyV?utm_source=generator&theme=0" width="150%" height={250} frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </div>
    );
};

export default LegacyPlaylist;