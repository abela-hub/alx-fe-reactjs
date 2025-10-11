import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
};

const PostsComponent = () => {
    const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts, {
        staleTime: 60000, // 1 minute caching
        cacheTime: 300000, // 5 minutes
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
