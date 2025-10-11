import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth.js";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.login(() => navigate("/profile"));
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
