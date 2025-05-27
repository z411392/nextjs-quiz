import { PostDao, type PostSummary } from "@/lib/adapters/post-dao"
import PostList from "@/components/post-list"

export async function getStaticProps() {
  const postDao = new PostDao()
  const posts = await postDao.fetchLatest()
  const props = { posts }
  return { props }
}

export default function Page({ posts }: { posts: PostSummary[] }) {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Newest posts</h1>
        <PostList posts={posts} />
      </div>
    </>
  )
}