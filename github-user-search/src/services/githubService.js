
const BASE_URL = "https://api.github.com/search/users";

export async function searchUsers({ username, location, minRepos }) {
    let query = username ? `${username} in:login` : "";

    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await fetch(`${BASE_URL}?q=${query}`);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items || [];
}
