import { createContext, useState } from "react"; // Import necessary hooks and methods from React library
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from React Router for page navigation

export const UserContext = createContext(); // Create a context that will be shared across components, storing user state

export function UserProvider({ children }) { // Define a functional component that wraps around the children components, providing user context
    const navigate = useNavigate() // Get the navigate function to programmatically navigate between pages

    const [user, setUser] = useState(  // Declare state variable `user` to hold the user's information, initialized from localStorage if available
        JSON.parse(localStorage.getItem("user")) || null  // If "user" exists in localStorage, parse and use it, otherwise initialize as null
    );

    function login(userData) {  // Function to log in a user, takes userData (likely from form submission)
        localStorage.setItem("user", JSON.stringify(userData)) // Store the user data in localStorage
        setUser(userData);  // Set the user state to the provided userData
        navigate("/profile");  // Redirect the user to the profile page after logging in
    }
    
    function logout() {  // Function to log out the user
        localStorage.removeItem("user");  // Remove user data from localStorage
        setUser(null);  // Set the user state to null, effectively logging out
        navigate("/join");  // Redirect the user to the join page (registration/login page)
    }

    return ( 
        <UserContext.Provider value={{user, login, logout}}>  
            {children}  
        </UserContext.Provider>  
    )
}  
