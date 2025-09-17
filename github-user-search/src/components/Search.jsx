import { useState } from "react";
import { searchUsers } from "../services/githubService";

export default function Search() {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setUsers([]);

        try {
            const data = await searchUsers(query, location, minRepos);
            setUsers(data.items || []);
        } catch (err) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <form onSubmit={handleSearch} className="grid gap-2 mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search GitHub username..."
                    className="border rounded px-2 py-1"
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Filter by location..."
                    className="border rounded px-2 py-1"
                />
                <input
                    type="number"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    placeholder="Min repos..."
                    className="border rounded px-2 py-1"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid gap-4">
                {users.map((user) => (
                    <div key={user.id} className="border rounded p-4 shadow">
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="w-16 h-16 rounded-full mb-2"
                        />
                        <h2 className="text-lg font-bold">{user.login}</h2>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500"
                        >
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
