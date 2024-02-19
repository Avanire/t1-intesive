import { FC } from 'react'
import { BannerImage, Description } from '@widgets/Banner'
import styles from './styles.module.css'

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
