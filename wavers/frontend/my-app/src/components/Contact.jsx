import React, { useState } from "react";
import "./Contact.css";
import { FaInstagram, FaWhatsapp, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h2>𝕮𝖔𝖓𝖙𝖆𝖈𝖙 𝖀𝖘</h2>

      {/* Contact Info */}
      <div className="contact-info">
        <p><FaPhone className="icon" /> Phone: +9856432091</p>
        <p><FaEnvelope className="icon" /> Email: wavers@gmail.com</p>
        <p><FaMapMarkerAlt className="icon" /> Location: 7/67 Travel Street, Chennai.</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Social Media Links */}
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icons1" /></a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="social-icons2" /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icons3" /></a>
      </div>
    </div>
  );
};

export default Contact;