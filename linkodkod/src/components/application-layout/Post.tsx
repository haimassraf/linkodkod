import type { PostType } from "../../Types/PostType"

const Post = ({ post }: { post: PostType }) => {
    return (
        <div className="post">
            <img src={post.image} alt="" />
            <h3 className="description">{post.description}</h3>
            <span className="likes">👍{post.likes}</span>
            <p className="poster">✍️{post.poster}</p>
            <p className="addedTime">{post.date}</p>
        </div>
    )
}

export default Post