import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError(null);
        setUser(null);

        try {
            const data = await fetchUserData(username.trim());
            setUser(data);
        } catch (err) {
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            {/* Search Input */}
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    style={{
                        padding: "10px",
                        width: "250px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        marginLeft: "10px",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Search
                </button>
            </form>

            {/* Conditional Rendering */}
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {user && (
                <div style={{ marginTop: "20px" }}>
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        width="120"
                        style={{ borderRadius: "50%" }}
                    />
                    <h2>{user.name || user.login}</h2>
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
}
