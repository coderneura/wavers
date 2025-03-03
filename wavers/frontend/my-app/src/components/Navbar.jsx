import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">𝕎𝑨𝑽𝑬𝑹'𝑺...!</h1>
      </div>

      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/service">Service</Link></li>
        {!isAuthenticated ? (
          <li><Link to="/register" className="button-link">Register</Link></li>
        ) : (
          <li><button onClick={handleLogout} className="button-link">Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;