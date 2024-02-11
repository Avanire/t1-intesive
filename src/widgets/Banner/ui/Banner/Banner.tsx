import { FC } from 'react'
import { Description } from '../Description/Description'
import styles from './styles.module.css'
import { BannerImage } from '../BannerImage/BannerImage'

export const Banner: FC = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.descriptionBlock}>
                <Description />
            </div>
            <div className={styles.bannerImgBlock}>
                <BannerImage />
            </div>
        </div>
    )
}
