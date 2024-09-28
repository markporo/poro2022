import Head from 'next/head'
import Socials from '../components/Socials.js';
import { videoContainer, videoWrapper, socialContainer } from '../styles/components/VideoCarousel.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';



export default function videos() {
    return (
        <div className={videoContainer}>
            <Head>
                <title>PORO Videos</title>
                <meta name='keywords' content='videos, music videos, Poro' />
            </Head>
            <Carousel showThumbs={false} showStatus={false} useKeyboardArrows autoPlay>
                <div className={videoWrapper}>
                    <iframe
                        src="https://www.youtube.com/embed/vwdU0zgDq9E"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Video 1"
                    ></iframe>
                </div>
                <div className={videoWrapper}>
                    <iframe
                        src="https://www.youtube.com/embed/0phMNP9KyTo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Video 2"
                    ></iframe>
                </div>
            </Carousel>
            <div className={socialContainer}>
                <Socials />
            </div>
        </div>
    )
}
