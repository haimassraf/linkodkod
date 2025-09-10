import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router";
import makeRequest from "../../utils/makeRequest";
import type { PostType } from "../../Types/PostType";

const UpdatePost = () => {
    const { id } = useParams<{ id: string }>();
    const [poster, setPoster] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [file, setFile] = useState<File | undefined>();
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)
    const [post, setPost] = useState<PostType>()

    const navigate = useNavigate();

    function handleOnChange(e: FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files: FileList
        }
        setFile(target.files[0])
    }

    useEffect(() => {
        async function fetchPost() {
            setLoading(true)
            const res = await makeRequest(`/posts/${id}`, 'GET', null);
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

        if (!file) return;

        const formData = new FormData();
        formData.set('file', file)
        formData.set('poster', poster)
        formData.set('description', description)

        try {
            setLoading(true)
            const res = await fetch(`http://localhost:3000/posts/${id}`, {
                method: "PUT",
                body: formData,
                credentials: 'include'
            })

            const parsedResponse = await res.json()
            setLoading(false)
            if (res.ok) {
                navigate('/layout/posts')
            } else {
                setMessage(parsedResponse);
            }
        } catch (err: any) {
            setMessage(err.message)
        };
    }

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

                <label htmlFor="file">
                    Image
                    <input
                        required
                        id="file"
                        accept="image/*"
                        type="file"
                        onChange={handleOnChange}
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
