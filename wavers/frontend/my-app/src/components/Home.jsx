import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundVideo from '../assets/video.mp4';
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

// List of places with images and descriptions
const places = [
  { 
    name: "𝔼𝕚𝕗𝕗𝕖𝕝 𝕋𝕠𝕨𝕖𝕣", 
    country: "France", 
    image: "/places/eiffel.jpg",  
    description: "The Eiffel Tower is one of the most famous landmarks in Paris, France.",
  },
  { 
    name: "𝔾𝕣𝕖𝕒𝕥 𝕎𝕒𝕝𝕝 𝕠𝕗 ℂ𝕙𝕚𝕟𝕒", 
    country: "China", 
    image: "/places/greatwall.jpg",
    description: "A historic wall stretching across northern China, built for defense.",
  },
  { 
    name: "𝕊𝕥𝕒𝕥𝕦𝕖 𝕠𝕗 𝕃𝕚𝕓𝕖𝕣𝕥𝕪", 
    country: "USA", 
    image: "/places/liberty.avif",
    description: "A symbol of freedom, located in New York, USA.",
  },
  { 
    name: "ℂ𝕠𝕝𝕠𝕤𝕤𝕖𝕦𝕞", 
    country: "Italy", 
    image: "/places/colosseum.jpg",
    description: "A large ancient amphitheater in Rome, Italy, used for gladiator battles.",
  },
  { 
    name: "𝕋𝕒𝕛 𝕄𝕒𝕙𝕒𝕝", 
    country: "India", 
    image: "/places/tajmahal.jpg",
    description: "A beautiful white marble mausoleum in India, built by Emperor Shah Jahan.",
  },
  { 
    name: "𝕊𝕪𝕕𝕟𝕖𝕪 𝕆𝕡𝕖𝕣𝕒 ℍ𝕠𝕦𝕤𝕖", 
    country: "Australia", 
    image: "/places/opera.jpg",
    description: "An iconic performing arts center in Sydney, Australia.",
  },
];

const Home = () => {
  const [search, setSearch] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  // Handle search input
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm === '') {
      setFilteredPlaces([]); // Reset search results
    } else {
      // Filter places by name or country
      const results = places.filter(
        (place) =>
          place.name.toLowerCase().includes(searchTerm) ||
          place.country.toLowerCase().includes(searchTerm)
      );
      setFilteredPlaces(results);
    }
  };

  return (
    <div className="home-container">
      {/* Search Box Above Video */}
      <div className="bg-color">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a place..."
            value={search}
            onChange={handleSearch}
            className="search-box"
          />
        </div>
      </div>

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Display Filtered Places */}
      {filteredPlaces.length > 0 && (
        <div className="places-container">
          {filteredPlaces.map((place, index) => (
            <Link to={`/place/${place.name}`} key={index} className="place-link">
              <div className="place-item">
                <img src={place.image} alt={place.name} className="place-image" />
                <h3>{place.name}</h3>
                <p><strong>Country:</strong> {place.country}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Footer Section */}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='social-icons1'>
            <FaInstagram className="icon1" /> Waver's_Official
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className='social-icons2'>
            <FaWhatsapp className="icon2" /> +9876545092
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='social-icons3'>
            <FaTwitter className="icon3" /> Waver's
          </a>
        </div>
      </footer>
      </div>
  );
};

export default Home;