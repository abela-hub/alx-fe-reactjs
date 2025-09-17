import axios from "axios";

// If you have a GitHub token in .env for higher rate limits
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Axios instance
const api = axios.create({
    baseURL: "https://api.github.com",
    headers: token ? { Authorization: `token ${token}` } : undefined,
});

/**
 * Fetch a single user's full GitHub profile by username
 * Example endpoint: https://api.github.com/users/{username}
 */
export const fetchUserData = async (username) => {
    const response = await api.get(`/users/${username}`);
    return response.data;
};

/**
 * Advanced search users (optional)
 * Example endpoint: https://api.github.com/search/users?q={query}
 */
export const searchUsers = async (query) => {
    const response = await api.get(`/search/users?q=${query}`);
    return response.data.items;
};
