import { useEffect, useState } from 'react'
import Card from './Card'
import type { PostType } from '../../Types/PostType'
import makeRequest from '../../utils/makeRequest'

function Posts() {

    const [allPosts, setAllPosts] = useState<PostType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await makeRequest('/posts', 'GET', null);
            if (!res[0].id) {
                setMessage(res)
            }
            setAllPosts(res)
            setLoading(false)
        };
        fetchPosts();
    }, [])

    return (
        <>
            <h1>Posts</h1>
            <div className='posts'>
                {!message && allPosts.map((post, i) => (<Card post={post} key={i} />))}
                {loading && <p className='loading'>Loading...</p>}
                {message && !loading && <p className='failed'>{message}</p>}
            </div>
        </>
    )
}

export default Posts
