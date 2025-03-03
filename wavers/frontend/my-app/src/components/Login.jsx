import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyle.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate successful login
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', formData.username);
    
    alert('Login successful! Redirecting to home...');
    navigate('/');  // Redirects to home page
  };

  return (
    <div className="form-container">
      <h2>𝕷𝖔𝖌𝖎𝖓</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        <p className="link">Don't have an account? <a href="/register">Register here</a></p>
      </form>
    </div>
  );
};

export default Login;