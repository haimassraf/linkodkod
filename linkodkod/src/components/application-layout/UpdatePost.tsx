import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router";
import makeRequest from "../../utils/makeRequest";
import '../../style/addNewPost.css'
import type { PostType } from "../../Types/PostType";

const UpdatePost = () => {
    const { id } = useParams<{ id: string }>();
    const [poster, setPoster] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)
    const [post, setPost] = useState<PostType>()

    const navigate = useNavigate();

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const body = {
                poster,
                description,
                image
            }
            setLoading(true)
            const res = await makeRequest(`/posts/${id}`, 'PUT', body, true);
            setLoading(false)
            if (res.id) {
                alert('Post Added Successfully');
                navigate('/index/posts')
            } else {
                setMessage(res);
            }
        } catch (err: any) { setMessage(err.message) }
    };

    return (
        <>
            <h1>Update Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="poster">
                    Poster
                    <input
                        id="poster"
                        required
                        type="text"
                        placeholder="poster"
                        defaultValue={post?.poster}
                        onChange={(e) => setPoster(e.target.value)}
                    />
                </label>

                <label htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        required
                        placeholder="description"
                        defaultValue={post?.description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <label htmlFor="image">
                    Image
                    <input
                        id="image"
                        type="file"
                        placeholder="image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>

                <button type="submit">Update Post</button>
                {loading && <p className="loading">Loading...</p>}
                {message && !loading && <p className="failed">{message}</p>}
            </form>
        </>
    );
};

export default UpdatePost;
