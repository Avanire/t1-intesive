import { FC } from 'react'
import { Head } from '@shared/ui'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export const Page404: FC = () => {
    return (
        <section className={styles.page404}>
            <Head head="h1" highlightNumber={2}>
                404 Error
            </Head>
            <Link to="/">Go back to the main page</Link>
        </section>
    )
}
