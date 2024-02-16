import { FC, useState } from 'react'
import styles from './styles.module.css'
import { PostCategoryCard, useAllPostQuery } from '../../entities/posts'
import Skeleton from 'react-loading-skeleton'

const CategoryPostListing: FC = () => {
    const [page, setPage] = useState(0)
    const [itemPerPage] = useState(12)

    const { data, isFetching } = useAllPostQuery({
        limit: itemPerPage,
        skip: itemPerPage * page,
        selectFields: ['reactions', 'body', 'tags', 'title'],
    })

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
    }

    return (
        <div>
            <div className={styles.categoryListing}>
                {isFetching ? (
                    <Skeleton
                        width={349}
                        height={252}
                        count={12}
                        containerClassName={styles.categoryListingSkeleton}
                    />
                ) : (
                    data &&
                    data.posts.map((post) => (
                        <PostCategoryCard key={post.id} {...post} />
                    ))
                )}
            </div>
            <div className={styles.arrows}>
                <button
                    onClick={handlePrevPage}
                    disabled={data && data.skip === 0}
                    className={styles.button}
                >
                    <svg
                        width="45.221222"
                        height="30.000000"
                        viewBox="0 0 45.2212 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs />
                        <path
                            id="Vector 165 (Stroke)"
                            d="M45.2212 14.9999C45.2212 15.9203 44.475 16.6665 43.5546 16.6665L3.55313 16.6665C2.63266 16.6665 1.88647 15.9203 1.88647 14.9999C1.88647 14.0793 2.63266 13.3331 3.55313 13.3331L43.5546 13.3331C44.475 13.3331 45.2212 14.0793 45.2212 14.9999Z"
                            fill="#605E5E"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                        />
                        <path
                            id="Vector 166 (Stroke)"
                            d="M13.51 29.6136C12.8029 30.2029 11.752 30.1074 11.1627 29.4003L0.643951 16.7783C-0.214539 15.7482 -0.214539 14.2518 0.643951 13.2217L11.1627 0.599731C11.752 -0.107422 12.8029 -0.202881 13.51 0.386353C14.2171 0.975586 14.3127 2.02661 13.7234 2.73364L3.50104 15L13.7234 27.2664C14.3126 27.9734 14.2171 29.0244 13.51 29.6136Z"
                            fill="#605E5E"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={data && data.skip + itemPerPage > data.total}
                    className={styles.button}
                >
                    <svg
                        width="45.221191"
                        height="30.000000"
                        viewBox="0 0 45.2212 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs />
                        <path
                            id="Vector 165 (Stroke)"
                            d="M0 15.0001C0 14.0797 0.746216 13.3335 1.66669 13.3335L41.6681 13.3335C42.5886 13.3335 43.3347 14.0797 43.3347 15.0001C43.3347 15.9207 42.5886 16.6669 41.6681 16.6669L1.66669 16.6669C0.746216 16.6669 0 15.9207 0 15.0001Z"
                            fill="#605E5E"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                        />
                        <path
                            id="Vector 166 (Stroke)"
                            d="M31.7112 0.386353C32.4183 -0.202881 33.4693 -0.107422 34.0585 0.599731L44.5773 13.2217C45.4357 14.2518 45.4357 15.7482 44.5773 16.7783L34.0585 29.4003C33.4693 30.1074 32.4183 30.2029 31.7112 29.6136C31.0041 29.0244 30.9086 27.9734 31.4979 27.2664L41.7202 15L31.4979 2.73364C30.9086 2.02661 31.0041 0.975586 31.7112 0.386353Z"
                            fill="#605E5E"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CategoryPostListing
