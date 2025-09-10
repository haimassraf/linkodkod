import { useEffect, useState } from "react";
import type { PostType } from "../../Types/PostType";
import { useNavigate, useParams } from 'react-router';
import makeRequest from "../../utils/makeRequest";

const PostPage = () => {
    const { id } = useParams<{ id: string }>();
    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [post, setPost] = useState<PostType>();
    const navigate = useNavigate();

    async function deleteById() {
        setLoading(true)
        const res = await makeRequest(`/posts/${id}`, 'DELETE', null, true);
        setLoading(false)
        if (!res.id) {
            setMessage(res);
            return
        }
        navigate('/layout/posts')
    }

    async function updateById() {
        navigate(`/layout/update-post/${id}`)
    }

    useEffect(() => {
        async function fetchPost() {
            setLoading(true)
            const res = await makeRequest(`/posts/${id}`, 'GET', null, true);
            setLoading(false)
            if (!res.id) {
                setMessage(res)
                return
            }
            setPost(res)
        }
        fetchPost()
    }, [])
    return (
        <>
            <div className="postPage card">
                <img src={post?.image} alt="" />
                <h3 className="description">{post?.description}</h3>
                <span className="likes">👍{post?.likes}</span>
                <p className="poster">✍️{post?.poster}</p>
                <p className="addedTime">{post?.date}</p>
            </div>
            <div className="options">
                <button onClick={updateById}>Update Post</button>
                <button className="delete" onClick={deleteById}>Delete Post</button>
            </div>
            {loading && <p className="loading">Loading...</p>}
            {message && !loading && <p className="failed">{message}</p>}
        </>
    )
}

export default PostPage