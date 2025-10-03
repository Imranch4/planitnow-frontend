import { useState, useEffect } from 'react';
import { CalendarClock, Search, MapPin, Music2, ArrowRight, Star, Paintbrush, Dumbbell, Utensils, Handshake} from 'lucide-react';
import { Link } from 'react-router-dom'; // Added import for Link

export default function EventManagerHome() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [featuredEvents, setFeaturedEvents] = useState([]);

  const eventTypes = [
  { name: "Concert", icon: <Music2 size={24} /> },
  { name: "Conférence", icon: <CalendarClock size={24} /> },
  { name: "Exposition", icon: <Paintbrush size={24} /> },
  { name: "Sport", icon: <Dumbbell size={24} /> },
  { name: "Gastronomie", icon: <Utensils size={24} /> },
  { name: "Festival", icon: <Star size={24} /> },
  { name: "Atelier", icon: <Search size={24} /> },
  { name: "Networking", icon: <Handshake size={24} /> },
  ];

  useEffect(() => {
    // Fetch featured events
    fetch('/api/featured-events')
      .then((response) => response.json())
      .then((data) => setFeaturedEvents(data))
      .catch((error) => console.error('Error fetching featured events:', error));
  }, []);

  return (
    <div className="min-h-screen bg-white">
        <div className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('src/assets/bg.jpg')" }}>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Trouvez et gérez vos événements</h1>
            <p className="text-xl text-white mb-8">Créez, publiez et participez à des événements en quelques clics</p>
            
          {/* 🔍 Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl px-6 py-4 max-w-5xl mx-auto mt-8">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4">

              {/* 🔤 Search input */}
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-blue-400 transition flex-1.2">
                <Search size={20} className="text-gray-500 mr-3" />
                <input 
                  type="text" 
                  placeholder="Rechercher un événement" 
                  className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* 📍 Ville selector */}
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-blue-400 transition flex-1.3">
                <MapPin size={20} className="text-gray-500 mr-3" />
                <select 
                  className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="" disabled>Choisir une ville</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Rabat">Rabat</option>
                  <option value="Fès">Fès</option>
                  <option value="Tanger">Tanger</option>
                  <option value="Agadir">Agadir</option>
                </select>
              </div>

              {/* 📅 Type d'événement */}
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-blue-400 transition flex-1.2">
                <CalendarClock size={20} className="text-gray-500 mr-3" />
                <select 
                  className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                >
                  <option value="" disabled>Type d'événement</option>
                  {eventTypes.map((type, index) => (
                    <option key={index} value={type.name}>{type.name}</option>
                  ))}
                </select>
              </div>


              
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Types */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8">Explorer par catégorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {eventTypes.map((type, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                {type.icon}
              </div>
              <span className="font-medium">{type.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Events */}
      <div className="max-w-6xl mx-auto pb-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Événements à la une</h2>
          <Link to="/events" className="text-red-600 hover:text-red-800 font-medium">
          <button className="flex items-center text-red-600 hover:text-red-800 font-medium">
            Voir tout <ArrowRight size={16} className="ml-1" />
          </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <MapPin size={16} className="text-gray-500 mr-1" />
                    <span className="text-gray-600 text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarClock size={16} className="text-gray-500 mr-1" />
                    <span className="text-gray-600 text-sm">{event.date}</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{event.price} €</span>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-500 mr-1" />
                    <span className="text-gray-700 text-sm">{event.rating} ({event.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Vous organisez un événement?</h2>
          <p className="text-gray-700 mb-8 text-lg">Créez, gérez et promouvez facilement vos événements avec EventManager</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Créer un événement
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}