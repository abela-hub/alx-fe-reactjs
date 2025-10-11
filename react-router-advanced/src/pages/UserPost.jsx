import React from "react";
import { useParams } from "react-router-dom";

const UserPost = () => {
    const { postId } = useParams();

    return <h2>Viewing Post ID: {postId}</h2>;
};

export default UserPost;
