import { useParams } from 'react-router-dom';
import './PlaceDetails.css';

// Import the same places array
const places = [
  { name: "𝔼𝕚𝕗𝕗𝕖𝕝 𝕋𝕠𝕨𝕖𝕣", country: "France", image: "/places/eiffel.jpg", description: "The Eiffel Tower is one of the most famous landmarks in Paris, France." },
  { name: "𝔾𝕣𝕖𝕒𝕥 𝕎𝕒𝕝𝕝 𝕠𝕗 ℂ𝕙𝕚𝕟𝕒", country: "China", image: "/places/greatwall.jpg", description: "A historic wall stretching across northern China, built for defense." },
  { name: "𝕊𝕥𝕒𝕥𝕦𝕖 𝕠𝕗 𝕃𝕚𝕓𝕖𝕣𝕥𝕪", country: "USA", image: "/places/liberty.avif", description: "A symbol of freedom, located in New York, USA." },
  { name: "ℂ𝕠𝕝𝕠𝕤𝕤𝕖𝕦𝕞", country: "Italy", image: "/places/colosseum.jpg", description: "A large ancient amphitheater in Rome, Italy, used for gladiator battles." },
  { name: "𝕋𝕒𝕛 𝕄𝕒𝕙𝕒𝕝", country: "India", image: "/places/tajmahal.jpg", description: "A beautiful white marble mausoleum in India, built by Emperor Shah Jahan." },
  { name: "𝕊𝕪𝕕𝕟𝕖𝕪 𝕆𝕡𝕖𝕣𝕒 ℍ𝕠𝕦𝕤𝕖", country: "Australia", image: "/places/opera.jpg", description: "An iconic performing arts center in Sydney, Australia." },
];

const PlaceDetails = () => {
  const { placeName } = useParams();
  const place = places.find((p) => p.name.toLowerCase() === placeName.toLowerCase());

  if (!place) {
    return <h2>Place not found!</h2>;
  }

  return (
    <div className="place-details">
      <h1>{place.name}</h1>
      <img src={place.image} alt={place.name} className="detail-image" />
      <p><strong>Country:</strong> {place.country}</p>
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceDetails;