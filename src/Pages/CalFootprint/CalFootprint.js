import React, { useState } from "react"; // Import React and useState hook from React library
import "./CalFootprint.css"; // Import the CSS file for styling

// Import images for different carbon footprint levels
import lowcf from '../../Assets/Image low.png'; // Low Carbon Footprint Image
import medcf from '../../Assets/Image med.png'; // Medium Carbon Footprint Image
import highcf from '../../Assets/Image high.png'; // High Carbon Footprint Image
import image1 from '../../Assets/Image 2.png'; // Additional image for the content
import image2 from '../../Assets/Image 3.png'; // Another additional image for the content

const CarbonFootprint = () => { // Define the CarbonFootprint functional component
  // Define an array of questions related to carbon footprint
  const questions = [
    "Do you drive a gasoline or diesel-powered car regularly?",
    "Do you use electricity from non-renewable sources (coal, gas, or oil)?",
    "Do you take more than five short flights (under 3 hours) per year?",
    "Do you buy new clothes or gadgets more than once a month?",
    "Do you eat meat (beef or lamb) more than 3 times a week?",
    "Do you frequently waste food by throwing it away instead of finishing or composting it?"
  ];

  // State variables to manage answers, submission status, and error messages
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Initialize answers with null values
  const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted
  const [error, setError] = useState(""); // Track any error messages

  // Function to handle answer selection
  const handleAnswer = (index, value) => {
    const newAnswers = [...answers]; // Create a copy of the current answers
    newAnswers[index] = value; // Update the answer at the specified index
    setAnswers(newAnswers); // Update the state with new answers
    setError(""); // Clear any existing error messages
  };

  // Function to calculate the score based on "yes" answers
  const calculateScore = () => {
    return answers.filter((answer) => answer === "yes").length; // Count the number of "yes" answers
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (answers.includes(null)) { // Check if any answers are still null
      setError("⚠️ Please fill all the answers before submitting!"); // Set error message
      return; // Exit the function
    }
    setSubmitted(true); // Set submitted state to true
  };

  // Function to determine the result image based on the score
  const getResultImage = () => {
    const score = calculateScore(); // Get the current score
    if (score >= 4) return "/images/high.png"; // Return high image path for high score
    if (score >= 2) return "/images/moderate.png"; // Return moderate image path for medium score
    return "/images/low.png"; // Return low image path for low score
  };

  return (
    <div className='header-section'> {/* Main container for the component */}
      <div className="container"> {/* Inner container for content */}
        <h2>Carbon Footprint Calculator</h2> {/* Title of the calculator */}

        {!submitted ? ( // Conditional rendering based on submission status
          <div>
            {questions.map((question, index) => ( // Map through questions to display them
              <div key={index} className="question-container"> {/* Container for each question */}
                <p>{question}</p> {/* Display the question */}
                <div className="button-group"> {/* Button group for answers */}
                  <button
                    className={`yes-button ${answers[index] === "yes" ? "selected" : ""}`} // Yes button with conditional styling
                    onClick={() => handleAnswer(index, "yes")} // Handle yes answer
                  >
                    Yes
                  </button>
                  <button
                    className={`no-button ${answers[index] === "no" ? "selected" : ""}`} // No button with conditional styling
                    onClick={() => handleAnswer(index, "no")} // Handle no answer
                  >
                    No
                  </button>
                </div>
              </div>
            ))}

            {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}

            <button className="submit-button" onClick={handleSubmit}> {/* Submit button */}
              Calculate
            </button>
          </div>
        ) : ( // If submitted, show the results
          <div>
            <h3>Your Carbon Footprint Score: {calculateScore()} / 6</h3> {/* Display the score */}
            <p>
              {calculateScore() >= 4
                ? <img src={highcf} alt="High Carbon Footprint" /> // Show high footprint image
                : calculateScore() >= 2
                ? <img src={medcf} alt="Medium Carbon Footprint" /> // Show medium footprint image
                : <img src={lowcf} alt="Low Carbon Footprint" />} 
            </p>

            {/* Display result image */}
            <img src={getResultImage()} alt="Carbon Footprint Result" className="result-image" /> {/* Show result image based on score */}

            <button className="submit-button" onClick={() => { // Try Again button
              setSubmitted(false); // Reset submitted state
              setAnswers(Array(questions.length).fill(null)); // Reset answers
              setError(""); // Clear error message
            }}>
              Try Again
            </button>
          </div>
        )}
      </div>
      <div className="section"> {/* Additional content section */}
        <h2>Carbon Footprint</h2> {/* Title for the section */}
        <p>
          <h1>Reputation</h1> {/* Subheading for reputation */}
          Lorem ipsum dolor sit amet. Aut dolores animi in rerum galisum in
          voluptatem Quis quo alias numquam. Ut dignissimos nulla quo dolores
          obcaecati est facilis quia est velit consequatur qui perspiciatis
          quidem in molestias ipsum aut commodi magni. {/* Placeholder text */}
        </p>
        <div className="images"> {/* Container for images */}
          <img src={image1} alt="Green Tech" /> {/* Display first additional image */}
        </div>
        <p>
          <h1>Future Goals</h1> {/* Subheading for future goals */}
          Lorem ipsum dolor sit amet. Aut dolores animi in rerum galisum in
          voluptatem Quis quo alias numquam. Ut dignissimos nulla quo dolores
          obcaecati est facilis quia est velit consequatur qui perspiciatis
          quidem in molestias ipsum aut commodi magni. {/* Placeholder text */}
        </p>
        <div className="images">
          <img src={image2}alt="Green Tech" />
        </div>
      </div>
      
    </div>
  );
};

export default CarbonFootprint;
