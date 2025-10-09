import React, { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields are required!");
            return;
        }
        setError("");
        alert("User registered successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>User Registration (Controlled)</h2>

            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username} {/* ✅ Controlled */}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email} {/* ✅ Controlled */}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password} {/* ✅ Controlled */}
                    onChange={handleChange}
                />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
