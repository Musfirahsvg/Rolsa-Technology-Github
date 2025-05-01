// import "./Auth.css";
// import { useState } from "react";
// import axios from "axios";

// import { useContext } from "react";
// import { UserContext } from "../../Contexts/userContext";

// export default function LoginForm({ toggle }) {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")



//     const [error, setError] = useState("");
//     const { user, login, logout } = useContext(UserContext)



//     function onEmailChange(event) {
//         setEmail(event.target.value);
//     }




//     function loginUser(event) {
//         event.preventDefault();

//         const ENDPOINT_URL = "http://localhost:8001/auth/login";
//         const FORM_DATA = {
//             "email": email,
//             "password": password,
 
//         }


//         axios.post(ENDPOINT_URL, FORM_DATA)
//             .then(response => {
//                 login(response.data)
//                 //alert("created user:" + JSON.stringify(response.data));
//             })
//             .catch(error => {
//                 setError(error?.response?.data?.detail || "Error occured")
//             })
//     }



//     return (
//         <form className="auth-form" onSubmit={loginUser}>
//             current email eneter is {email}
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={onEmailChange}
//             />

//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />


//             <div className="auth-options-row">
//                 <button type="submit" className="auth-confirm">Login</button>

//                 <div className="auth-swap-container">
//                     <span> Already have an account?</span>
//                     <button className="auth-swap-btn" onClick={toggle}>
//                         Log In
//                     </button>
//                 </div>


//                 {
//                     error ? <div className="error">{error}</div>
//                         : null
//                 }


//             </div>
//         </form>
//     )
// }   









// // Importing the CSS file for styling the login form
// import "./Auth.css";

// // React hooks for managing component state and accessing context
// import { useState, useContext } from "react";

// // Axios for making HTTP requests to the backend
// import axios from "axios";

// // Importing the UserContext to use authentication-related logic like logging in
// import { UserContext } from "../../Contexts/userContext";

// // React Router hook to navigate programmatically between pages
// import { useNavigate } from "react-router-dom";

// // Defining the LoginForm component, receives a 'toggle' function as prop to switch to sign-up form
// export default function LoginForm({ toggle }) {

//     // State to hold email input value
//     const [email, setEmail] = useState("");

//     // State to hold password input value
//     const [password, setPassword] = useState("");

//     // State to hold error messages (e.g., login failure)
//     const [error, setError] = useState("");

//     // Accessing the login function from UserContext to set user data globally after successful login
//     const { login } = useContext(UserContext);

//     // Getting the navigate function from React Router to programmatically redirect users
//     const navigate = useNavigate();

//     // Function that gets triggered when the login form is submitted
//     function loginUser(event) {
//         event.preventDefault(); // Prevents default form submission behavior (page reload)

//         // Backend endpoint to authenticate user
//         const ENDPOINT_URL = "http://localhost:8001/auth/login";

//         // Data to be sent in the POST request
//         const FORM_DATA = { email, password };

//         // Sending a POST request to the login endpoint
//         axios.post(ENDPOINT_URL, FORM_DATA)
//             .then(response => {
//                 // If login is successful, use context's login function to store user data
//                 login(response.data);
//             })
//             .catch(error => {
//                 // If login fails, show the error message to the user
//                 setError(error?.response?.data?.detail || "Error occurred");
//             });
//     }

//     // JSX that renders the login form UI
//     return (
//         <form className="auth-form" onSubmit={loginUser}>
//             {/* Input field for email, binds value to state and updates state on change */}
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

//             {/* Input field for password, same logic as email */}
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

//             {/* Button to submit the form */}
//             <button type="submit" className="auth-confirm">Login</button>

//             {/* Row with a message and button to switch to the Sign Up form */}
//             <div className="auth-options-row">
//                 <span>Don't have an account?</span>
//                 <button className="auth-swap-btn" onClick={toggle}>Sign Up</button>
//             </div>

//             {/* If an error exists, display it */}
//             {error && <div className="error">{error}</div>}

//             {/* Button to navigate to the 'Change Password' page */}
//             <div className="auth-options-row">
//                 <button
//                     type="button" // Important: prevents form submission when clicked
//                     className="auth-swap-btn"
//                     onClick={() => navigate('/change-password')} // Redirect to change password page
//                 >
//                     Change Password
//                 </button>
//             </div>
//         </form>
//     );
// }








// import "./Auth.css";
// import { useState, useContext } from "react";
// import axios from "axios";
// import { UserContext } from "../../Contexts/userContext";



// export default function LoginForm({ toggle, toRegister, toChangePassword }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const { login } = useContext(UserContext);

//     function handleLogin(event) {
//         event.preventDefault();
//         axios.post("http://localhost:8001/auth/login", { email, password })
//             .then(res => {
//                 login(res.data); // store user and redirect to /profile
//             })
//             .catch(err => {
//                 setError(err?.response?.data?.detail || "Login failed");
//             });
//     }

//     return (
//         <form className="auth-form" onSubmit={handleLogin}>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Log In</button>
//             <div className="auth-options-row">
//                 <button className="auth-swap-btn" onClick={toRegister}>Sign Up</button>
//                 <button className="auth-swap-btn" onClick={toChangePassword}>Change Password</button>
//             </div>
//             {error && <div className="error">{error}</div>}
//         </form>
//     );
// }



import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import axios from "axios";
import { UserContext } from "../../Contexts/userContext";

export default function LoginForm({ toRegister, toChangePassword }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(UserContext);

    const navigate = useNavigate(); // ✅ initialize navigation

    function handleLogin(event) {
        event.preventDefault();
        axios.post("https://rolsa-technology-backend.onrender.com/auth/login", { email, password })
            .then(res => {
                login(res.data); // ✅ store user in context
                navigate("/cal-footprint"); // ✅ redirect to /profile
            })
            .catch(err => {
                setError(err?.response?.data?.detail || "Login failed");
            });
    }

    return (
        <form className="auth-form" onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Log In</button>
            <div className="auth-options-row">
                <button className="auth-swap-btn" onClick={toRegister}>Sign Up</button>
                <button className="auth-swap-btn" onClick={toChangePassword}>Change Password</button>
            </div>
            {error && <div className="error">{error}</div>}
        </form>
    );
}





