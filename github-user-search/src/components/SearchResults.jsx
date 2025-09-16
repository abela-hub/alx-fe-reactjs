function SearchResults({ users }) {
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center"
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
                    {/* Extra details (requires another API call for user details) */}
                </div>
            ))}
        </div>
    );
}

export default SearchResults;
