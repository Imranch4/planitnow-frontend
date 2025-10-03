import { useState, useEffect } from 'react';
import { User, Calendar, Bell, Settings, MapPin, Star, Edit, Plus, CalendarClock, LogOut, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('informations');
  const [userProfile, setUserProfile] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const [savedEvents, setSavedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user profile data
    setTimeout(() => {
      setUserProfile({
        id: 1,
        name: 'Sophie Martin',
        email: 'sophie.martin@email.com',
        phone: '+33 6 12 34 56 78',
        city: 'Casablanca',
        avatar: 'src/assets/profile-avatar.jpg',
        createdAt: '12/03/2023',
        bio: 'Passionnée d\'événements culturels et festifs. J\'adore organiser des rencontres et découvrir de nouvelles expériences.',
        preferences: ['Concert', 'Festival', 'Gastronomie']
      });
      
      setUserEvents([
        {
          id: 1,
          title: 'Festival de Jazz',
          date: '15 Mai 2025',
          location: 'Marrakech',
          image: 'src/assets/event-jazz.jpg',
          participants: 45,
          status: 'À venir'
        },
        {
          id: 2,
          title: 'Atelier Pâtisserie',
          date: '2 Juin 2025',
          location: 'Casablanca',
          image: 'src/assets/event-cuisine.jpg',
          participants: 12,
          status: 'À venir'
        }
      ]);
      
      setSavedEvents([
        {
          id: 3,
          title: 'Exposition d\'Art Contemporain',
          date: '10 Mai 2025',
          location: 'Rabat',
          image: 'src/assets/event-art.jpg',
          price: '75',
          rating: 4.8,
          reviews: 24
        },
        {
          id: 4,
          title: 'Concert Symphonique',
          date: '22 Mai 2025',
          location: 'Casablanca',
          image: 'src/assets/event-concert.jpg',
          price: '120',
          rating: 4.9,
          reviews: 37
        },
        {
          id: 5,
          title: 'Marathon de Marrakech',
          date: '5 Juin 2025',
          location: 'Marrakech',
          image: 'src/assets/event-marathon.jpg',
          price: '50',
          rating: 4.6,
          reviews: 52
        }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  const tabContent = {
    informations: (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex justify-between mb-6">
          <h3 className="text-xl font-semibold">Informations personnelles</h3>
          <button className="flex items-center text-red-600 hover:text-red-800">
            <Edit size={16} className="mr-1" /> Modifier
          </button>
        </div>
        
        {userProfile && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 text-sm mb-1">Nom complet</p>
                <p className="font-medium">{userProfile.name}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Email</p>
                <p className="font-medium">{userProfile.email}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Téléphone</p>
                <p className="font-medium">{userProfile.phone}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Ville</p>
                <p className="font-medium">{userProfile.city}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Membre depuis</p>
                <p className="font-medium">{userProfile.createdAt}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-600 text-sm mb-1">Bio</p>
              <p className="font-medium">{userProfile.bio}</p>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-600 text-sm mb-2">Préférences d'événements</p>
              <div className="flex flex-wrap gap-2">
                {userProfile.preferences.map((pref, index) => (
                  <span key={index} className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">
                    {pref}
                  </span>
                ))}
                <button className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full flex items-center">
                  <Plus size={14} className="mr-1" /> Ajouter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    ),
    
    events: (
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Mes événements</h3>
            <Link to="/create" className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center">
              <Plus size={16} className="mr-1" /> Créer un événement
            </Link>
          </div>
          
          {userEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userEvents.map(event => (
                <div key={event.id} className="flex bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                  <img src={event.image} alt={event.title} className="w-32 h-32 object-cover" />
                  <div className="p-4 flex-1">
                    <h4 className="font-semibold mb-1">{event.title}</h4>
                    <div className="flex items-center text-gray-600 text-sm mb-1">
                      <CalendarClock size={14} className="mr-1" /> {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin size={14} className="mr-1" /> {event.location}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {event.participants} participants
                      </span>
                      <span className={`text-sm ${event.status === 'À venir' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'} px-2 py-1 rounded`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Vous n'avez pas encore créé d'événements</p>
              <Link to="/create" className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Créer votre premier événement
              </Link>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-6">Événements sauvegardés</h3>
          
          {savedEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedEvents.map(event => (
                <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="relative">
                    <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                    <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm hover:text-red-600">
                      <Heart size={18} className="text-red-600 fill-red-600" />
                    </button>
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
                      <span className="font-bold">{event.price} DH</span>
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-500 mr-1" />
                        <span className="text-gray-700 text-sm">{event.rating} ({event.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Vous n'avez pas encore sauvegardé d'événements</p>
              <Link to="/events" className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Explorer les événements
              </Link>
            </div>
          )}
        </div>
      </div>
    ),
    
    settings: (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-6">Paramètres</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Notifications</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Rappels d'événements</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Nouveaux événements recommandés</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Messages privés</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-medium mb-3">Confidentialité</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Profil public</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Partager mon historique d'événements</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-medium mb-3">Sécurité</h4>
            <div className="space-y-3">
              <button className="text-red-600 hover:text-red-800 font-medium flex items-center">
                Changer le mot de passe
              </button>
              <button className="text-red-600 hover:text-red-800 font-medium flex items-center">
                Connexions actives
              </button>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <button className="text-red-600 hover:text-red-800 font-medium flex items-center">
              <LogOut size={16} className="mr-1" /> Déconnexion
            </button>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-600">EventManager</h1>
            <Link to="/" className="text-gray-700 hover:text-red-600">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de votre profil...</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="relative">
                  <img
                    src={userProfile?.avatar || 'src/assets/default-avatar.jpg'}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-red-100"
                  />
                  <button className="absolute bottom-0 right-0 bg-red-600 text-white p-1 rounded-full hover:bg-red-700">
                    <Edit size={14} />
                  </button>
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">{userProfile?.name}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" /> {userProfile?.city}
                </div>
                <p className="text-gray-700">{userProfile?.bio}</p>
              </div>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'informations' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-600 hover:text-red-600'}`}
              onClick={() => setActiveTab('informations')}
            >
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                Informations
              </div>
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'events' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-600 hover:text-red-600'}`}
              onClick={() => setActiveTab('events')}
            >
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                Mes événements
              </div>
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'settings' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-600 hover:text-red-600'}`}
              onClick={() => setActiveTab('settings')}
            >
              <div className="flex items-center">
                <Settings size={18} className="mr-2" />
                Paramètres
              </div>
            </button>
          </div>
          
          {/* Tab Content */}
          {tabContent[activeTab]}
        </div>
      )}
      
      {/* Footer */}
      <div className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4">EventManager</h2>
              <p className="text-gray-400">La plateforme pour tous vos événements</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Produit</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Fonctionnalités</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Tarifs</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Entreprise</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">À propos</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Carrières</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Légal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Confidentialité</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Conditions</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 EventManager. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </div>
  );
}