import React from "react";
import "./Service.css";
import flightImg from "../assets/flight.jpg"; // Example image, replace with actual path
import hotelImg from "../assets/hotel.jpg";
import tourImg from "../assets/tour.jpg";
import { FaPlane, FaHotel, FaMapMarkedAlt } from "react-icons/fa"; // Importing icons

const Service = () => {
  return (
    <div className="service-container">
      <h2>𝓞𝓾𝓻 𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼</h2>
      
      <div className="service-list">
        {/* Flight Booking Service */}
        <div className="service-item">
          <img src={flightImg} alt="Flight Booking" className="service-img" />
          <div className="service-info">
            <FaPlane className="service-icon" />
            <h3>Flight Bookings</h3>
            <p>Book flights at the best prices.</p>
          </div>
        </div>

        {/* Hotel Booking Service */}
        <div className="service-item">
          <img src={hotelImg} alt="Hotel Booking" className="service-img" />
          <div className="service-info">
            <FaHotel className="service-icon" />
            <h3>Hotel Reservations</h3>
            <p>Find and book hotels with great discounts.</p>
          </div>
        </div>

        {/* Guided Tours Service */}
        <div className="service-item">
          <img src={tourImg} alt="Guided Tours" className="service-img" />
          <div className="service-info">
            <FaMapMarkedAlt className="service-icon" />
            <h3>Guided Tours</h3>
            <p>Explore new places with expert guides.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;