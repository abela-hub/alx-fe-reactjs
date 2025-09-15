import axios from "axios";

const baseURL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
    baseURL,
    headers: token ? { Authorization: `token ${token}` } : undefined,
});

/**
 * Search GitHub users by query string.
 * Returns the axios response data object which includes .items
 */
export async function searchUsers(query) {
    const res = await api.get("/search/users", { params: { q: query } });
    return res.data;
}
