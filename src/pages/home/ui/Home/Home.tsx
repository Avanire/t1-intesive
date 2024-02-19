import { FC } from 'react'
import { Banner } from '@widgets/Banner'
import styles from './styles.module.css'
import { Advantages } from '@widgets/Advantages'
import { InfoBlock } from '@widgets/InfoBlock'
import { TopRecipes } from '@widgets/TopRecipes'
import { PresentationDashboard } from '@widgets/PresentationDashboard'
import { Reviews } from '@widgets/Reviews/ui/Reviews/Reviews'
import { FAQ } from '@widgets/FAQ'

const Home: FC = () => {
    return (
        <>
            <section className={styles.bannerBlock}>
                <Banner />
            </section>
            <section className={styles.advantagesBlock}>
                <Advantages />
            </section>
            <section className={styles.infoBlock}>
                <InfoBlock />
            </section>
            <section className={styles.topRecipesBlock} id="top-recipes">
                <TopRecipes />
            </section>
            <section className={styles.presentationDashboardBlock}>
                <PresentationDashboard />
            </section>
            <section className={styles.reviewsBlock}>
                <Reviews />
            </section>
            <section className={styles.faqBlock} id="faq">
                <FAQ />
            </section>
        </>
    )
}

export default Home
