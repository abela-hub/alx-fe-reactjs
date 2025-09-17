import axios from "axios";

// Single user fetch (basic)
export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

// Advanced search (with location + minRepos)
export const searchUsers = async (query, location, minRepos) => {
    let q = query;

    if (location) {
        q += `+location:${location}`;
    }
    if (minRepos) {
        q += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(
        `https://api.github.com/search/users?q=${q}`
    );

    return response.data;
};
