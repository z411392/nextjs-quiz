import { PostDao, type Post } from "@/lib/adapters/post-dao"

export async function getStaticPaths() {
    // const postDao = new PostDao()
    // const posts = await postDao.fetchLatest()
    // const paths = posts.map(({ id }) => ({
    //     params: { postId: id.toString() },
    // }))
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params: { postId } }: { params: { postId: string } }) {
    const postDao = new PostDao()
    const post = await postDao.fetchById(parseInt(postId))
    const props = post
    return { props }
}

export default function Page({ title, body }: Post) {
    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>
        </>
    )
}