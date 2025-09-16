const BASE_URL = "https://api.github.com/search/users?q";  // required string

// filters = { username, location, minRepos }
export async function searchUsers({ username, location, minRepos }) {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const url = `${BASE_URL}=${encodeURIComponent(query)}&per_page=30`;
    // ✅ includes https://api.github.com/search/users?q

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items || [];
}
