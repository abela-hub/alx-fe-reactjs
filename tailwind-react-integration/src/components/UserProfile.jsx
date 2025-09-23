import React from "react";

const UserProfile = () => {
    return (
        <div className="mx-auto my-20 p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <img
                src="https://via.placeholder.com/150"
                alt="User Profile"
                className="mx-auto rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-blue-500">
                John Doe
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600">
                Frontend Developer passionate about building interactive and responsive
                web applications.
            </p>
        </div>
    );
};

export default UserProfile;
