import { useState, useEffect } from 'react';
import { CalendarClock, Search, MapPin, Music2, ArrowRight, Star, Filter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [eventType, setEventType] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('date');

  const eventTypes = [
    { name: "Concert", icon: <Music2 size={24} /> },
    { name: "Conférence", icon: <CalendarClock size={24} /> },
    { name: "Exposition", icon: <Star size={24} /> },
    { name: "Sport", icon: <Star size={24} /> },
    { name: "Gastronomie", icon: <Star size={24} /> },
    { name: "Festival", icon: <Star size={24} /> },
    { name: "Atelier", icon: <Star size={24} /> },
    { name: "Networking", icon: <Star size={24} /> },
  ];

  const cities = [
    "Casablanca", "Marrakech", "Rabat", "Fès", "Tanger", "Agadir"
  ];

  // Exemple d'événements (à remplacer par une vraie API)
  useEffect(() => {
    // Simuler un appel API
    setLoading(true);
    setTimeout(() => {
      const sampleEvents = [
        {
          id: 1,
          title: "Festival de Musique de Marrakech",
          image: "https://via.placeholder.com/300x200",
          location: "Marrakech",
          date: "25 Mai 2025",
          price: 250,
          rating: 4.8,
          reviews: 124,
          type: "Festival"
        },
        {
          id: 2,
          title: "Conférence Tech Innovation",
          image: "https://via.placeholder.com/300x200",
          location: "Casablanca",
          date: "12 Juin 2025",
          price: 150,
          rating: 4.5,
          reviews: 87,
          type: "Conférence"
        },
        {
          id: 3,
          title: "Exposition d'Art Contemporain",
          image: "https://via.placeholder.com/300x200",
          location: "Rabat",
          date: "3 Juillet 2025",
          price: 80,
          rating: 4.6,
          reviews: 56,
          type: "Exposition"
        },
        {
          id: 4,
          title: "Marathon de Casablanca",
          image: "https://via.placeholder.com/300x200",
          location: "Casablanca",
          date: "20 Mai 2025",
          price: 50,
          rating: 4.7,
          reviews: 198,
          type: "Sport"
        },
        {
          id: 5,
          title: "Festival Gastronomique",
          image: "https://via.placeholder.com/300x200",
          location: "Fès",
          date: "8 Juin 2025",
          price: 120,
          rating: 4.9,
          reviews: 73,
          type: "Gastronomie"
        },
        {
          id: 6,
          title: "Atelier de Poterie Traditionnelle",
          image: "https://via.placeholder.com/300x200",
          location: "Marrakech",
          date: "15 Juin 2025",
          price: 90,
          rating: 4.4,
          reviews: 42,
          type: "Atelier"
        },
        {
          id: 7,
          title: "Concert de Jazz International",
          image: "https://via.placeholder.com/300x200",
          location: "Tanger",
          date: "22 Juillet 2025",
          price: 180,
          rating: 4.7,
          reviews: 61,
          type: "Concert"
        },
        {
          id: 8,
          title: "Séminaire Networking Entrepreneurs",
          image: "https://via.placeholder.com/300x200",
          location: "Casablanca",
          date: "17 Mai 2025",
          price: 200,
          rating: 4.6,
          reviews: 89,
          type: "Networking"
        },
        {
          id: 9,
          title: "Festival du Film Marocain",
          image: "https://via.placeholder.com/300x200",
          location: "Agadir",
          date: "10 Août 2025",
          price: 100,
          rating: 4.8,
          reviews: 104,
          type: "Festival"
        },
        {
          id: 10,
          title: "Exposition Photos Nature",
          image: "https://via.placeholder.com/300x200",
          location: "Rabat",
          date: "5 Juin 2025",
          price: 70,
          rating: 4.5,
          reviews: 51,
          type: "Exposition"
        },
        {
          id: 11,
          title: "Concert de Musique Amazigh",
          image: "https://via.placeholder.com/300x200",
          location: "Agadir",
          date: "28 Mai 2025",
          price: 120,
          rating: 4.9,
          reviews: 87,
          type: "Concert"
        },
        {
          id: 12,
          title: "Conférence sur l'Intelligence Artificielle",
          image: "https://via.placeholder.com/300x200",
          location: "Casablanca",
          date: "7 Juillet 2025",
          price: 180,
          rating: 4.7,
          reviews: 63,
          type: "Conférence"
        }
      ];
      setEvents(sampleEvents);
      setFilteredEvents(sampleEvents);
      setLoading(false);
    }, 1000);
  }, []);

  // Filtrer les événements
  useEffect(() => {
    let results = events;
    
    if (searchTerm) {
      results = results.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (location) {
      results = results.filter(event => event.location === location);
    }
    
    if (eventType) {
      results = results.filter(event => event.type === eventType);
    }
    
    // Trier les résultats
    switch(sortBy) {
      case 'date':
        // Pour un vrai tri par date, il faudrait convertir les chaînes en objets Date
        results = [...results]; // Tri fictif pour l'exemple
        break;
      case 'price-low':
        results = [...results].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results = [...results].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results = [...results].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    setFilteredEvents(results);
  }, [events, searchTerm, location, eventType, sortBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    // La recherche se fait automatiquement grâce à l'useEffect
  };

  const clearFilters = () => {
    setSearchTerm('');
    setLocation('');
    setEventType('');
    setSortBy('date');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec image de fond */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Découvrez tous nos événements</h1>
          <p className="text-xl text-white">Trouvez l'événement parfait pour vous</p>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="bg-white shadow-md py-6">
        <div className="max-w-6xl mx-auto px-4">
          <form onSubmit={handleSearch} className="flex flex-wrap gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-blue-400 transition flex-1">
              <Search size={20} className="text-gray-500 mr-3" />
              <input 
                type="text" 
                placeholder="Rechercher un événement" 
                className="w-full bg-transparent focus:outline-none text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button
              type="button"
              className="flex items-center bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} className="mr-2" />
              Filtres
              <ChevronDown size={16} className="ml-2" />
            </button>
            
            <button 
              type="submit" 
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Rechercher
            </button>
          </form>
          
          {/* Filtres supplémentaires */}
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col flex-1 min-w-48">
                  <label className="font-medium mb-2">Ville</label>
                  <select 
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Toutes les villes</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex flex-col flex-1 min-w-48">
                  <label className="font-medium mb-2">Type d'événement</label>
                  <select 
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    <option value="">Tous les types</option>
                    {eventTypes.map((type) => (
                      <option key={type.name} value={type.name}>{type.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex flex-col flex-1 min-w-48">
                  <label className="font-medium mb-2">Trier par</label>
                  <select 
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="date">Date (prochainement)</option>
                    <option value="price-low">Prix (croissant)</option>
                    <option value="price-high">Prix (décroissant)</option>
                    <option value="rating">Note</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button 
                  type="button" 
                  className="text-red-600 hover:text-red-800"
                  onClick={clearFilters}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Liste des événements */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            {filteredEvents.length} {filteredEvents.length > 1 ? 'événements trouvés' : 'événement trouvé'}
          </h2>
          <div className="text-gray-600">
            Page 1 sur 1
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <>
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-4">Aucun événement trouvé</h3>
                <p className="text-gray-600 mb-8">Essayez d'ajuster vos critères de recherche</p>
                <button 
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  onClick={clearFilters}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredEvents.map(event => (
                  <Link to={`/events/${event.id}`} key={event.id} className="block">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                      <div className="relative">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-48 object-cover" 
                        />
                        <div className="absolute top-0 right-0 m-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                          {event.type}
                        </div>
                      </div>
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
                  </Link>
                ))}
              </div>
            )}
            
            {filteredEvents.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                    &laquo;
                  </button>
                  <button className="px-4 py-2 bg-red-600 border border-red-600 rounded-lg text-white">
                    1
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                    &raquo;
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Call to Action */}
      <div className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Vous avez un événement à partager?</h2>
          <p className="text-gray-700 mb-8 text-lg">Partagez votre événement avec notre communauté</p>
          <div className="flex justify-center">
            <Link to="/create" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Créer un événement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}