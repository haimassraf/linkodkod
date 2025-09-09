import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import makeRequest from "../../utils/makeRequest";

const Login = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const body = {
                name: name.toLowerCase(),
                password
            }
            setLoading(true);
            const res = await makeRequest('/auth/login', 'POST', body, true);
            setLoading(false)
            if (res.token) {
                alert('Logged in successfully');
                navigate("index");
            } else {
                setMessage(res);
            }
        } catch (err: any) { setMessage(err.message) }
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    User Name
                    <input
                        id="name"
                        required
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        required
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <button type="submit">Login</button>
                <p>New? Please <Link to="/signup">signup</Link> first</p>
                {loading && <p className="loading">Loading...</p>}
                {message && <p className="failed">{message}</p>}
            </form>
        </>
    );
};

export default Login;
