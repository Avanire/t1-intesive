export type Post = {
    id: number
    body: string
    reactions: number
    tags: Array<string>
    title: string
    userId: number
}

export type Posts = {
    posts: Array<Post>
    limit: number
    skip: number
    total: number
}
