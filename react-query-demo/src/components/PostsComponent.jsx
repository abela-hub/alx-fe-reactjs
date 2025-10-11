import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// Fetch posts from JSONPlaceholder
const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
};

const PostsComponent = () => {
    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery("posts", fetchPosts, {
        staleTime: 60000,          // Cache fresh for 1 minute
        cacheTime: 300000,          // Keep cache for 5 minutes
        refetchOnWindowFocus: true, // Refetch when window regains focus
        keepPreviousData: true,     // Keep previous data while fetching new
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <button
                onClick={refetch}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Refresh Posts
            </button>
            {isFetching && <p className="text-gray-500 mb-2">Updating posts...</p>}
            <ul className="space-y-2">
                {data.map((post) => (
                    <li key={post.id} className="border p-2 rounded shadow">
                        <h2 className="font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
