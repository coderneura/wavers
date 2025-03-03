import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormStyle.css";

const API_URL = import.meta.env.VITE_API_URL;

const Registration = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required.");
      return;
    }

    try {
      await axios.post(`${API_URL}/register`, formData);
      alert("Registration successful! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="form-container">
      <h2>𝕽𝖊𝖌𝖎𝖘𝖙𝖗𝖆𝖙𝖎𝖔𝖓</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;