import Home from './Pages/Home/Home';
import GreenEnergy from './Pages/CalEnergy/Energy';
import CarbonFooprint from './Pages/CalFootprint/CalFootprint';
import Booking from './Pages/Booking/Booking';

import Auth from './Pages/Auth/Auth';
import EnergyInfo from './Pages/EnergyInfo/EnergyInfo';
import AboutUs from './Pages/About Us/AboutUs';


import { Routes, Route } from "react-router-dom";


export default function Pages() {

    return (
        <main id="page-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/join" element={<Auth />} />
                <Route path="/cal-footprint" element={<CarbonFooprint />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/green-energy" element={<GreenEnergy />} />
                <Route path="/energy-info" element={<EnergyInfo />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </main>
    )

}  

