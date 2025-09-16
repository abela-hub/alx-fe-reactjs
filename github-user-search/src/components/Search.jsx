
import { useState } from "react";

function Search({ onSearch }) {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ username, location, minRepos });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-xl shadow-md"
        >
            <input
                type="text"
                placeholder="Search by username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 rounded-lg border border-gray-300 w-full"
            />
            <input
                type="text"
                placeholder="Filter by location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="p-2 rounded-lg border border-gray-300 w-full"
            />
            <input
                type="number"
                placeholder="Min repositories..."
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                className="p-2 rounded-lg border border-gray-300 w-full"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Search
            </button>
        </form>
    );
}

export default Search;
