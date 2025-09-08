import { useEffect, useState } from 'react'
import Post from './Post'
import type { PostType } from '../../Types/PostType'
import makeRequest from '../../utils/makeRequest'

function Posts() {

    const [allPosts, setAllPosts] = useState<PostType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            const res = await makeRequest('/posts', 'GET');
            if (!res[0].id) {
                setMessage(res)
            }
            setAllPosts(res)
            setIsLoading(false)
        };
        fetchPosts();
    }, [])

    return (
        <main>
            <h1>Posts</h1>
            <div className='posts'>
                {message && <p className='failed'>{message}</p>}
                {!message && allPosts.map((post, i) => (<Post post={post} key={i} />))}
                {isLoading && <p className='loading'>Loading...</p>}
            </div>
        </main>
    )
}

export default Posts
