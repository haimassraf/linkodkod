import { useEffect, useState } from 'react'
import Post from './Post'
import type { PostType } from '../Types/PostType'
import postsDB from '../db/postsDB'

function Posts() {

    const [allPosts, setAllPosts] = useState<PostType[]>([])
    useEffect(() => {
        setAllPosts(postsDB)
    }, [])

    return (
        <main>
            <h1>Posts:</h1>
            <div className='posts'>
                {allPosts.map((post, i) => (<Post post={post} key={i} />))}
            </div>
        </main>
    )
}

export default Posts
