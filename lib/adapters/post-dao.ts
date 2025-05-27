export type PostSummary = {
    id: number
    title: string
    body: string
}

export type Post = PostSummary & {}

export class PostDao {
    async fetchLatest(): Promise<PostSummary[]> {
        const response = await fetch('https://dummyjson.com/posts')
        const { posts } = await response.json() as { posts: PostSummary[] }
        return posts
    }
    async fetchById(id: number): Promise<Post> {
        const response = await fetch(`https://dummyjson.com/posts/${id}`)
        const post = await response.json() as Post
        return post
    }
}