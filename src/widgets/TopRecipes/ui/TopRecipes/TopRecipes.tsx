import { FC, useMemo } from 'react'
import { Head } from '../../../../shared/ui'
import styles from './styles.module.css'
import {
    RecipesCard,
    useRecipesByMealTypeQuery,
} from '../../../../entities/recipes'
import Skeleton from 'react-loading-skeleton'
import _ from 'lodash'

export const TopRecipes: FC = () => {
    const { data = [], isFetching } = useRecipesByMealTypeQuery('lunch')

    const top3Recipes = useMemo(() => {
        const sortedData = _.sortBy(data, [
            function (o) {
                return -o.rating
            },
        ])

        return sortedData.slice(0, 3)
    }, [data])

    return (
        <div className={styles.topRecipes}>
            <div className={styles.heading}>
                <Head highlightNumber={3} head="h3">
                    Our Top Recipes
                </Head>
            </div>
            <div className={styles.topRecipesList}>
                {isFetching ? (
                    <Skeleton
                        containerClassName={styles.topRecipesList}
                        count={3}
                        width={320}
                        height={297}
                        inline={true}
                    />
                ) : (
                    top3Recipes.map((recipe) => (
                        <RecipesCard key={recipe.id} {...recipe} />
                    ))
                )}
            </div>
        </div>
    )
}
