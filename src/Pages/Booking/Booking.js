import React from "react";
import "./Booking.css";
import image1 from '../../Assets/Image 1.png';

const Booking = () => {
  return (
    <div className="booking-container">
      <h2 className="booking-title">Booking</h2>
      <div className="booking-sections">
        <div className="consultation">
          <h3>Consultation</h3>
          <form>
            <label>Email:</label>
            <input type="email" placeholder="energysector@gmail.com" />

            <label>Phone:</label>
            <input type="text" placeholder="077446889223" />

            <label>Day & Date:</label>
            <input type="date" />

            <label>Message (Optional):</label>
            <textarea></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className='break-line'></div>
        
        <div className="installations">
          <h3>Installations</h3>
          <p>
            At OVO Energy, we have of course signed up to the Smart Meter
            Installation Schedule. But naturally we would always do our best to
            ensure our engineers are fully trained to give you an excellent
            service. To get an appointment, book a call on phone or send email.
          </p>
          <p>Phone: 08989767676</p>
          <p>Email: abd87@gmail.com</p>
          <label>Message (Optional):</label>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </div>
      </div>
    

    <div className="section1">
        <h2>Booking Steps</h2>
        <div className="images">
          <img src={image1}alt="Green Tech" />
        </div>
        <p>
          Lorem ipsum dolor sit amet. Aut dolores animi in rerum galisum in
          voluptatem Quis quo alias numquam. Ut dignissimos nulla quo dolores
          obcaecati est facilis quia est velit consequatur qui perspiciatis
          quidem in molestias ipsum aut commodi magni.
        </p> 
        </div>
        </div>
  );
};

export default Booking;
