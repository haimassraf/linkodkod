import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

const AddNewPost = () => {
    const [poster, setPoster] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [file, setFile] = useState<File | undefined>();
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate();

    function handleOnChange(e: FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files: FileList
        }
        setFile(target.files[0])
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) return;

        const formData = new FormData();
        formData.set('file', file)
        formData.set('poster', poster)
        formData.set('description', description)

        try {
            setLoading(true)
            const res = await fetch('http://localhost:3000/posts', {
                method: "POST",
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
            <h1>Add New Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="poster">
                    Poster
                    <input
                        id="poster"
                        required
                        type="text"
                        placeholder="poster"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                    />
                </label>

                <label htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        required
                        placeholder="description"
                        value={description}
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
