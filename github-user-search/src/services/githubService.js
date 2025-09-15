import axios from "axios";

const baseURL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
    baseURL,
    headers: token ? { Authorization: `token ${token}` } : undefined,
});

/**
 * Fetch a GitHub user's data by username
 */
export async function fetchUserData(username) {
    const res = await api.get(`/users/${username}`);
    return res.data;
}
