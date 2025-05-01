// import { useState } from "react";
// import axios from "axios";
// import "./Auth.css";

// export default function ChangePassword() {
//     const [email, setEmail] = useState("");
//     const [oldPassword, setOldPassword] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const handleChangePassword = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         try {
//             const res = await axios.post("http://localhost:8001/auth/change-password", {
//                 email,
//                 old_password: oldPassword,
//                 new_password: newPassword,
//             });
//             setSuccess(res.data.message);
//         } catch (err) {
//             setError(err.response?.data?.detail || "Something went wrong");
//         }
//     };

//     return (
//         <form className="auth-form" onSubmit={handleChangePassword}>
//             <h2>Change Password</h2>
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
//             <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
//             <button type="submit" className="auth-confirm">Change Password</button>

//             {error && <div className="error">{error}</div>}
//             {success && <div className="success">{success}</div>}
//         </form>
//     );
// }






// import "./Auth.css";
// import axios from "axios";
// import { useState } from "react";

// export default function ChangePasswordForm({ toggleBack }) {
//     const [email, setEmail] = useState("");
//     const [oldPassword, setOldPassword] = useState("");
//     const [newPassword, setNewPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Call API here (you can hook it up with FastAPI)
//         console.log("Changing password for:", email);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="auth-form">
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Old Password"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="New Password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Change Password</button>
//             <p onClick={toggleBack} style={{ cursor: "pointer", color: "blue", marginTop: "10px" }}>
//                 Back to Login
//             </p>
//         </form>
//     );
// }








import "./Auth.css";
import axios from "axios";
import { useState } from "react";

export default function ChangePasswordForm({ toLogin, toRegister }) {
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleChangePassword(e) {
        e.preventDefault();

        if (oldPassword === newPassword) {
            setError("New password must be different from old password.");
            return;
        }

        axios.post("https://rolsa-technology-backend.onrender.com/auth/change-password", {
            email,
            old_password: oldPassword,
            new_password: newPassword
        })
        .then(() => {
            setSuccess("Password changed successfully. Please log in with your new password.");
            setError("");
        })
        .catch(err => {
            setError(err?.response?.data?.detail || "Failed to change password");
            setSuccess("");
        });
    }

    return (
        <form className="auth-form" onSubmit={handleChangePassword}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />
            <button type="submit">Change Password</button>
            <div className="auth-options-row">
                <button className="auth-swap-btn" onClick={toLogin}>Log In</button>
                <button className="auth-swap-btn" onClick={toRegister}>Sign Up</button>
            </div>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
        </form>
    );
}


