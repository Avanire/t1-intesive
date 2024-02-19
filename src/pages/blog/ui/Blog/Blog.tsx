import { FC } from 'react'
import { Head } from '@shared/ui'
import styles from './styles.module.css'
import CategoryPostListing from '@widgets/CategoryPostListing/CategoryPostListing'

const Blog: FC = () => {
    return (
        <section className={styles.blog}>
            <div className={styles.heading}>
                <Head highlightNumber={2} head="h1">
                    Latest Articles
                </Head>
            </div>
            <CategoryPostListing />
        </section>
    )
}

export default Blog
