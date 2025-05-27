import { type PostSummary } from "@/lib/adapters/post-dao"
import { Routes } from "@/lib/constants/routes"

export default function Component({ posts }: { posts: PostSummary[] }) {
    return (
        <>
            <div className="grid gap-6 md:grid-cols-2">
                {posts.map(({ id, title, body }) => (
                    <div key={id} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-gray-700 mb-4 line-clamp-1">{body}</p>
                        <a href={Routes.Post.replaceAll("[postId]", id.toString())} className="text-blue-600 hover:underline">More →</a>
                    </div>

                ))}
            </div>
        </>
    )
}