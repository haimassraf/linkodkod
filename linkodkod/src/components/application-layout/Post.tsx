import type { PostType } from "../../Types/PostType"
import { useNavigate } from 'react-router'

const Post = ({ post }: { post: PostType }) => {
    const navigate = useNavigate();
    async function handlePost(id: number) {
        navigate(`${id}`)
    }
    return (
        <div className="post" onClick={() => handlePost(post.id)}>
            <img src={post.image} alt="" />
            <h3 className="description">{post.description}</h3>
            <span className="likes">👍{post.likes}</span>
            <p className="poster">✍️{post.poster}</p>
            <p className="addedTime">{post.date}</p>
        </div>
    )
}

export default Post