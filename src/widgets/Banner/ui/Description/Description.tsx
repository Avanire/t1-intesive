import { FC } from 'react'
import { Button, Head, Subtitle } from '../../../../shared/ui'
import styles from './styles.module.css'

export const Description: FC = () => {
    return (
        <div className={styles.bannerDescription}>
            <div className={styles.subtitle}>
                <Subtitle title="OVER 1000 USERS" />
            </div>
            <div className={styles.h1}>
                <Head highlightNumber={6} head="h1">
                    Enjoy Foods All Over The World
                </Head>
            </div>
            <p className={styles.p}>
                EatLy help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a <strong>$20 bonus.</strong>
            </p>
            <div className={styles.buttonBlock}>
                <Button>Get Started</Button>
                <Button theme="Secondary">Go Pro</Button>
            </div>
        </div>
    )
}
