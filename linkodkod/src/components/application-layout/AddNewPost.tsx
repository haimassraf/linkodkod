import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import makeRequest from "../../utils/makeRequest";

const AddNewPost = () => {
    const [poster, setPoster] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [file, setFile] = useState<File | undefined>();
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>("")

    const navigate = useNavigate();

    function handleOnChange(e: FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files: FileList
        }
        setFile(target.files[0])
    }

    useEffect(() => {
        const userName = localStorage.getItem("userName")
        if (userName) setName(userName)
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
            const res = await makeRequest('/posts', 'POST', formData, true)
            setLoading(false)

            if (res.id) {
                navigate('/layout/posts')
            } else {
                setMessage(res);
            }
        } catch (err: any) {
            setMessage(err.message)
        };
    }

    return (
        <>
            <h1>Add New Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="poster">
                    Poster
                    <input
                        id="poster"
                        required
                        defaultValue={name}
                        type="text"
                        placeholder="poster"
                        onChange={(e) => setPoster(e.target.value)}
                    />
                </label>

                <label htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        required
                        placeholder="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <label htmlFor="file">
                    Image
                    <input
                        id="file"
                        accept="image/*"
                        required
                        type="file"
                        onChange={handleOnChange}
                    />
                </label>

                <button type="submit">add new post</button>
                {loading && <p className="loading">Loading...</p>}
                {message && !loading && <p className="failed">{message}</p>}
            </form>
        </>
    );
};

export default AddNewPost;
