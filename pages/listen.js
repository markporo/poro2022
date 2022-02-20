import Meta from '../components/Meta'
import Image from 'next/image'
import Releases from '../components/Releases'
import { width85, box } from '../styles/pages.module.scss'
import { vinyl } from '../styles/Listen.module.scss'

export default function listen() {
    return (
        <div className={width85}>
            <Meta title='Listen' />
            <Releases></Releases>
        </div>
    )
}
