export type User = {
    id: number
    username: string
}

export type Comment = {
    id: number
    postId: number
    user: User
    body: string
}

export type Comments = {
    comments: Comment[]
    limit: number
    skip: 0
    total: number
}
