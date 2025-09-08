import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import makeRequest from "../../utils/makeRequest";
import '../../style/addNewPost.css'

const AddNewPost = () => {
    const [poster, setPoster] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [loadin, setLoadin] = useState<boolean>(false)

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const body = {
                poster,
                description,
                image
            }
            setLoadin(true)
            const res = await makeRequest('/posts', 'POST', body);
            setLoadin(false)
            if (res.id) {
                alert('Post Added Successfully');
                navigate('/posts')
            } else {
                setMessage(res);
            }
        } catch (err: any) { setMessage(err.message) }
    };

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

                <label htmlFor="image">
                    Image
                    <input
                        id="image"
                        required
                        type="file"
                        placeholder="image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>

                <button type="submit">add new post</button>
                {loadin && <p className="loading">Loading...</p>}
                {message && <p className="failed">{message}</p>}
            </form>
        </>
    );
};

export default AddNewPost;
