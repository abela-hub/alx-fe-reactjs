import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // ✅ async/await usage
            const results = await searchUsers({ username, location, minRepos });
            setUsers(results);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            {/* Search Form */}
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

            {/* Results Section */}
            <div className="mt-6">
                {users.length > 0 && ({/* ✅ "&&" conditional rendering */ }
                    < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => ({/* ✅ "map" usage */ }
                    < div
                key = { user.id }
                className = "p-4 bg-white shadow-md rounded-xl flex flex-col items-center"
                    >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-20 h-20 rounded-full mb-3"
                />
                <h2 className="font-semibold text-lg">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            ))}
        </div>
    )
}
      </div >
    </div >
  );
}

export default Search;
