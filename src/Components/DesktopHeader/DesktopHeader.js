
import './DesktopHeader.css'; // Importing the CSS file for styling
import Lightmode from '../../Assets/light mode.png'; // Importing light mode icon
import Darkmode from '../../Assets/dark mode.png'; // Importing dark mode icon
import font from '../../Assets/font.png'; // Importing font size toggle icon
import Userhub from '../../Assets/user hub.png';

import React, { useState, useEffect } from "react"; // Importing React and hooks
import { useContext } from "react"; // Importing useContext for context API
import { Link } from "react-router-dom"; // Importing Link for navigation
import { UserContext } from '../../Contexts/userContext'; // Importing UserContext for user state management

export default function DesktopHeader() {
    const { user, logout } = useContext(UserContext);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLargeFont, setIsLargeFont] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('large-font', isLargeFont);
    }, [isDarkMode, isLargeFont]);

    return (
        <header className="navbar"> {/* Main header element */}
            <h1>Ralos Technology</h1> {/* Company title */}

            <nav> {/* Navigation links */}
                <Link to="/">Home</Link>
                <Link to="/cal-footprint">Carbon Footprint</Link>
                <Link to="/green-energy">Green Energy</Link>
                <Link to="/booking">Booking</Link>
                <Link to="/energy-info">Energy Info</Link>
                <Link to="/about-us">About Us</Link>
            </nav>

            <div className="icons"> {/* Icons for theme and font size toggles */}
                <button onClick={() => setIsLargeFont(!isLargeFont)}> {/* Toggle font size */}
                    <img src={font} alt="Font size toggle" />
                </button>
                <button onClick={() => setIsDarkMode(false)}> {/* Set light mode */}
                    <img src={Lightmode} alt="Light mode" />
                </button>
                <button onClick={() => setIsDarkMode(true)}> {/* Set dark mode */}
                    <img src={Darkmode} alt="Dark mode" />
                </button>
                {
                    user ? (
                        <a className="nav-link" onClick={logout}>Logout</a>    
                    ) : (
                        <Link to="/join" className="action-button"> 
                            <img src={Userhub} alt="User  Hub" />
                        </Link> 
                    )
                }
            </div>
        </header>
    );
}
