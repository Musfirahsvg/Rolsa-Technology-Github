import './Energy.css';
import React, { useState } from 'react';
import energyImage from '../../Assets/Image 6.png'; // importing the energy image to use with the information of energy usage
import PowerImage from '../../Assets/Image 8.png';

const EnergyCalculator = () => {
  // Used State hook to hold the input values
  const [power, setPower] = useState(''); // power input state
  const [time, setTime] = useState(''); // time input state
  const [calculation, setCalculation] = useState(''); // result of the calculation is updated with the use state value

  // this function is used to handle submission form
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // it would convert the input values to numbers
    const powerValue = parseFloat(power); // Parse power input as float
    const timeValue = parseFloat(time); // Parse time input as float

    // Validate if inputs are numbers and not empty
    if (powerValue && timeValue) { // Check that both power and time are valid numbers
      // Calculate energy consumption (kWh)
      const result = (powerValue * timeValue) / 1000; // Compute energy in kWh
      setCalculation(`${result.toFixed(5)} kWh`); // Set the formatted result
    } else {
      // Check if inputs are invalid or empty
      if (!powerValue && !timeValue) {
        alert('Both Power and Time are required!'); // Alert user for both fields
      } else if (!powerValue) {
        alert('Power is required!'); // Alert user for missing power
      } else if (!timeValue) {
        alert('Time is required!'); // Alert user for missing time
      }
      setCalculation('Invalid input'); // Set calculation to invalid input
    }
  };

  return (
    <div style={{ backgroundColor: 'green', padding: '20px', color: '#fff' }}>
      <h1>Calculating Energy Usage</h1>

      {/* Input Form */}
      <form onSubmit={handleSubmit}>
        <label>
          Power*:
          <input 
            type="number" 
            value={power} 
            onChange={(e) => setPower(e.target.value)} // Update power state on change
            placeholder="Enter power in kW"
            required 
          />
        </label>
        <label>
          Time*:
          <input 
            type="number" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} // Update time state on change
            placeholder="Enter time in hours"
            required 
          />
        </label>
        
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* Calculation Result */}
      <div className='cal'>
        <h2>Calculation:</h2>
        <p>{calculation || 'No calculation yet'}</p> {/* Display result or default message */}
      </div>

      {/* Additional Info */}
      <p className='para'>
        Find the daily energy consumption using the following formula: 
        (Wattage * Hours Used Per Day) ÷ 1000 = Daily Kilowatt-hour (kWh) consumption
      </p>

      {/* information about the energy usage under the energy calculator */}
      <div className='energy-usage-info'>
        <img src={energyImage} alt='energy-usage-image'/>
        <p>Technologies to track energy Consumption</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget dolor gravida, accumsan eros non, 
        blandit eros. Duis imperdiet mi vel elit auctor ornare. Sed eget tortor eget turpis volutpat lacinia. Donec aliquet ullamcorper bibendum. Etiam ut enim id erat pulvinar vestibulum. Aliquam erat volutpat. Proin aliquam ac eros vel lobortis. Maecenas eu euismod ipsum. Duis tincidunt tortor at sollicitudin laoreet. Curabitur pharetra, neque et dapibus mollis, libero sem malesuada ligula, vitae lobortis lacus sem nec diam. Aenean sed erat odio. Etiam eu blandit risus, vitae consectetur turpis. Integer quis urna ullamcorper, ullamcorper mi eu, pulvinar sapien. In nisl urna, blandit non tincidunt ut, mollis tempor nulla. Donec sodales augue et enim commodo varius. In sit amet tincidunt nulla, non pretium felis.
        </p>
        <br/>
        <img src={PowerImage} alt='energy-usage-image'/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget dolor gravida, accumsan eros non, 
        blandit eros. Duis imperdiet mi vel elit auctor ornare. Sed eget tortor eget turpis volutpat lacinia. Donec aliquet ullamcorper bibendum. Etiam ut enim id erat pulvinar vestibulum. Aliquam erat volutpat. Proin aliquam ac eros vel lobortis. Maecenas eu euismod ipsum. Duis tincidunt tortor at sollicitudin laoreet. Curabitur pharetra, neque et dapibus mollis, libero sem malesuada ligula, vitae lobortis lacus sem nec diam. Aenean sed erat odio. Etiam eu blandit risus, vitae consectetur turpis. Integer quis urna ullamcorper, ullamcorper mi eu, pulvinar sapien. In nisl urna, blandit non tincidunt ut, mollis tempor nulla. Donec sodales augue et enim commodo varius. In sit amet tincidunt nulla, non pretium felis.
        </p>
        </div>
    </div>
  );
};

export default EnergyCalculator; /* Energy Calculator Styles */
