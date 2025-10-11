import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx"; // custom hook to check auth

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Redirect to login if user is not authenticated
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
