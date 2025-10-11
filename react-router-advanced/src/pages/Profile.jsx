import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <nav className="mb-4">
                <Link to="details" className="mr-4 text-blue-500">Details</Link>
                <Link to="settings" className="text-blue-500">Settings</Link>
            </nav>
            {/* Nested routes will render here */}
            <Outlet />
        </div>
    );
};

export default Profile;
