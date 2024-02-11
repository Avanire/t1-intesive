import { FC } from 'react'
import { Head, Link } from '../../../../shared/ui'
import styles from './styles.module.css'
import { useTopRecipesQuery } from '../../../../entities/recipes/api/recipesApi'
import { RecipesCard } from 'entities/recipes'
import linkArrowIcon from '../../../../assets/images/link-arrow.svg'

export const TopRecipes: FC = () => {
    const { data: recipes = [] } = useTopRecipesQuery()
    const items = recipes.slice(0, 3)

    return (
        <div className={styles.topRecipes}>
            <div className={styles.heading}>
                <Head highlightNumber={3} head="h3">
                    Our Top Recipes
                </Head>
            </div>
            <div className={styles.topRecipesList}>
                {items.map((recipe) => (
                    <RecipesCard key={recipe.id} {...recipe} />
                ))}
            </div>
            <div className={styles.link}>
                <Link url="#" icon={linkArrowIcon}>
                    View All
                </Link>
            </div>
        </div>
    )
}
