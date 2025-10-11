import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

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

            {/* Nested Routes defined here */}
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
                <Route path="/" element={<p>Please select a section above.</p>} />
            </Routes>
        </div>
    );
};

export default Profile;
