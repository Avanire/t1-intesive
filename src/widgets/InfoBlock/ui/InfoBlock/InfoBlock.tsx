import { FC } from 'react'
import { Button, Head, LinkedList } from '../../../../shared/ui'
import image from '../../../../assets/images/Mobile-Screen.png'
import arrowIcon from '../../../../assets/images/Arrow.svg'
import { linkedList } from '../../constants'
import styles from './styles.module.css'

export const InfoBlock: FC = () => {
    return (
        <div className={styles.infoBlock}>
            <div className={styles.imageBlock}>
                <img
                    src={image}
                    alt="Premium Quality For Your Health"
                    className={styles.image}
                    width={304}
                />
            </div>
            <div className={styles.description}>
                <div className={styles.heading}>
                    <Head highlightNumber={2} head="h2">
                        Premium Quality For Your Health
                    </Head>
                </div>
                <div className={styles.list}>
                    <LinkedList list={linkedList} />
                </div>
                <div className={styles.button}>
                    <Button icon={arrowIcon}>Download</Button>
                </div>
            </div>
        </div>
    )
}
