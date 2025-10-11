import { useState } from "react";

const RegistrationForm = () => {
    // Controlled state variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Object to hold validation errors
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        // ✅ Explicit field checks
        if (!username) newErrors.username = "Username is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";

        // ✅ Update error state
        setErrors(newErrors);

        // Stop submission if any errors exist
        if (Object.keys(newErrors).length > 0) return;

        // If no errors, simulate registration
        console.log("User Registered:", { username, email, password });
        alert(`User ${username} registered successfully!`);

        // Reset form
        setUsername("");
        setEmail("");
        setPassword("");
        setErrors({});
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Controlled Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label><br />
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </div>

                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;