import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Profile Page</h1>

            {/* Navigation for nested routes */}
            <nav className="mb-6">
                <Link
                    to="details"
                    className="mr-4 px-3 py-1 bg-blue-500 text-white rounded"
                >
                    Details
                </Link>
                <Link
                    to="settings"
                    className="px-3 py-1 bg-green-500 text-white rounded"
                >
                    Settings
                </Link>
            </nav>

            {/* Nested routes render here */}
            <Outlet />
        </div>
    );
};

export default Profile;
