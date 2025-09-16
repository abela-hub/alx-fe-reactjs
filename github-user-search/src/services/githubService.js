const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function searchUsers({ username, location, minRepos }) {
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=30`;

    const response = await fetch(url, {
        headers: GITHUB_TOKEN
            ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
            : {}, // ✅ only add if exists
    });

    if (!response.ok) throw new Error("Failed to fetch users");
    const data = await response.json();
    return data.items || [];
}
