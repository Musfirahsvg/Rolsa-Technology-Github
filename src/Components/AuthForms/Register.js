
import "./Auth.css";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm({ toggle, toLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState(""); // Optional username field
    const [error, setError] = useState("");
    function registerUser(event) {
        event.preventDefault();
        const ENDPOINT_URL = "http://localhost:8001/auth/register";
    
        // Include username in the form data if provided
        const FORM_DATA = {
            email,
            password,
            ...(username && { username }) // only add username if it's not empty
        };
    
        console.log(FORM_DATA);  // Debugging: Check the data being sent
    
        axios.post(ENDPOINT_URL, FORM_DATA)
            .then(response => {
                alert("Registration successful! Please log in.");
                toLogin(); // redirect to login
            })
            .catch(error => {
                console.error(error);    // Log the full error object for debugging
                setError(JSON.stringify(error?.response?.data?.detail) || "Error occurred");
            });
    }
    

    return (
        <form className="auth-form" onSubmit={registerUser}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Username (optional)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Register</button>
            <div className="auth-options-row">
                <span>Already have an account?</span>
                <button className="auth-swap-btn" onClick={toLogin}>Log In</button>
            </div>
            {error && <div className="error">{error}</div>}
        </form>
    );
}









