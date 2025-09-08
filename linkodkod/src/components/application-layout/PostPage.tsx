import { useEffect, useState } from "react";
import type { PostType } from "../../Types/PostType";
import { useParams } from 'react-router';
import makeRequest from "../../utils/makeRequest";

const PostPage = () => {
    const { id } = useParams<{ id: string }>();
    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [post, setPost] = useState<PostType>();

    useEffect(() => {
        async function fetchPost() {
            setLoading(true)
            const wantedPost: PostType = await makeRequest(`/posts/${id}`, 'GET');
            setLoading(false)
            console.log(wantedPost)
            if (!wantedPost.id) {
                setMessage("Faild to fetch post, please try again later")
                return
            }
            setPost(wantedPost)
        }
        fetchPost()
    }, [])
    return (
        <>
            <div className="postPage post">
            {loading && <p className="loading">Loading</p>}
            {message && <p className="failed">{message}</p>}
                <img src={post?.image} alt="" />
                <h3 className="description">{post?.description}</h3>
                <span className="likes">👍{post?.likes}</span>
                <p className="poster">✍️{post?.poster}</p>
                <p className="addedTime">{post?.date}</p>
            </div>
        </>
    )
}

export default PostPage