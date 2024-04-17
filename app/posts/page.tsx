import type { Metadata } from 'next'
import prisma from '@/libs/prisma'

export const metadata: Metadata = {
    title: 'Pages'
}

export default async function PostsPage() {
    const posts = await prisma.post.findMany()

    if (!posts.length) <div>Loading...</div>
    return <div>
        {posts.map(post => <div key={post.id}>
            {post.title}

        </div>)}
    </div>
}
