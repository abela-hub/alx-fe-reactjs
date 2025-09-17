import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

export default function Search() {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setUsers([]);
        setSingleUser(null);

        try {
            if (location || minRepos) {
                // Advanced search (multiple users)
                const data = await searchUsers(query, location, minRepos);
                setUsers(data.items || []);
            } else {
                // Basic search (single user)
                const data = await fetchUserData(query);
                setSingleUser(data);
            }
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

            {/* Single user result */}
            {singleUser && (
                <div className="border rounded p-4 shadow">
                    <img
                        src={singleUser.avatar_url}
                        alt={singleUser.login}
                        className="w-16 h-16 rounded-full mb-2"
                    />
                    <h2 className="text-lg font-bold">{singleUser.login}</h2>
                    <a
                        href={singleUser.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500"
                    >
                        View Profile
                    </a>
                </div>
            )}

            {/* Multiple users result */}
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
