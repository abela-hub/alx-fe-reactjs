import { useState } from "react";

const RegistrationForm = () => {
    // Define state for controlled inputs
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError("All fields are required!");
            return;
        }

        setError("");
        console.log("User Registered:", { username, email, password });
        alert(`User ${username} registered successfully!`);

        // Clear form
        setUsername("");
        setEmail("");
        setPassword("");
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
                        value={username}         {/* ✅ controlled input */}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={email}            {/* ✅ controlled input */}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        name="password"
                        value={password}         {/* ✅ controlled input */}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
