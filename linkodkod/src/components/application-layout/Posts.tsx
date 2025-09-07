import { useEffect, useState } from 'react'
import Post from './Post'
import type { PostType } from '../../Types/PostType'
import makeRequest from '../../utils/makeRequest'

function Posts() {

    const [allPosts, setAllPosts] = useState<PostType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            const posts = await makeRequest('/posts', 'GET');
            setAllPosts(posts)
            setIsLoading(false)
        };
        fetchPosts();
    }, [])

    return (
        <main>
            <h1>Posts:</h1>
            <div className='posts'>
                {allPosts.map((post, i) => (<Post post={post} key={i} />))}
                {isLoading && <p>Loading...</p>}
            </div>
        </main>
    )
}

export default Posts
