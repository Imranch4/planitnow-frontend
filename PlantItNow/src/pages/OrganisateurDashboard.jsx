import { useState, useEffect } from 'react';
import { User, Calendar, Bell, Settings, MapPin, Star, Edit, Plus, CalendarClock, LogOut, Heart, BarChart, Users, Briefcase, Award, Phone, Mail, Link as LinkIcon, ChevronDown, ChevronRight, Share2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrganizerProfilePage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [organizerProfile, setOrganizerProfile] = useState(null);
  const [organizerEvents, setOrganizerEvents] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching organizer profile data
    setTimeout(() => {
      setOrganizerProfile({
        id: 1,
        name: 'Ahmed Benjelloun',
        businessName: 'Maroc Events Pro',
        email: 'contact@marocevents.ma',
        phone: '+212 661 234 567',
        website: 'www.marocevents.ma',
        city: 'Casablanca',
        avatar: 'src/assets/organizer-avatar.jpg',
        coverPhoto: 'src/assets/organizer-cover.jpg',
        createdAt: '26/08/2022',
        bio: 'Organisation professionnelle d\'événements culturels, corporatifs et sportifs au Maroc depuis 2015. Spécialistes en concerts, festivals et conférences.',
        categories: ['Concert', 'Festival', 'Conférence', 'Sport'],
        verified: true,
        followers: 1245,
        rating: 4.8,
        reviews: 87,
        social: {
          facebook: 'marocevents',
          instagram: 'maroceventspro',
          linkedin: 'maroc-events-pro'
        }
      });
      
      setOrganizerEvents([
        {
          id: 1,
          title: 'Festival de Jazz de Casablanca',
          date: '15-17 Mai 2025',
          location: 'Parc Sindibad, Casablanca',
          image: 'src/assets/event-jazz.jpg',
          registrations: 458,
          status: 'À venir',
          visibility: 'Public',
          ticketsSold: 325,
          ticketsTotal: 500
        },
        {
          id: 2,
          title: 'Conférence Marketing Digital',
          date: '2 Juin 2025',
          location: 'Hôtel Hyatt, Casablanca',
          image: 'src/assets/event-conference.jpg',
          registrations: 89,
          status: 'À venir',
          visibility: 'Public',
          ticketsSold: 65,
          ticketsTotal: 150
        },
        {
          id: 3,
          title: 'Marathon de Marrakech',
          date: '14 Juin 2025',
          location: 'Marrakech',
          image: 'src/assets/event-marathon.jpg',
          registrations: 723,
          status: 'Brouillon',
          visibility: 'Privé',
          ticketsSold: 0,
          ticketsTotal: 2000
        },
        {
          id: 4,
          title: 'Festival Gnaoua',
          date: '20-22 Mars 2025',
          location: 'Essaouira',
          image: 'src/assets/event-gnaoua.jpg',
          registrations: 1245,
          status: 'Terminé',
          visibility: 'Public',
          ticketsSold: 1200,
          ticketsTotal: 1500
        }
      ]);
      
      setAnalytics({
        totalEvents: 17,
        totalAttendees: 8750,
        totalRevenue: 875000,
        averageRating: 4.8,
        mostPopularCategory: 'Festival',
        revenueByMonth: [
          { month: 'Jan', revenue: 45000 },
          { month: 'Fév', revenue: 52000 },
          { month: 'Mar', revenue: 98000 },
          { month: 'Avr', revenue: 75000 },
          { month: 'Mai', revenue: 0 },
          { month: 'Juin', revenue: 0 }
        ],
        registrationsByEvent: [
          { event: 'Festival Gnaoua', registrations: 1245 },
          { event: 'Marathon de Marrakech', registrations: 723 },
          { event: 'Festival de Jazz', registrations: 458 },
          { event: 'Conférence Marketing', registrations: 89 }
        ]
      });
      
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'À venir': return 'bg-green-100 text-green-700';
      case 'Terminé': return 'bg-gray-100 text-gray-700';
      case 'Brouillon': return 'bg-yellow-100 text-yellow-700';
      case 'Annulé': return 'bg-red-100 text-red-700';
      default: return 'bg-blue-100 text-blue-700';
    }
  };

  const tabContent = {
    dashboard: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Calendar className="text-red-600 mr-3" size={24} />
              <h3 className="text-lg font-semibold">Événements</h3>
            </div>
            <p className="text-3xl font-bold mb-1">{analytics?.totalEvents || 0}</p>
            <p className="text-gray-600 text-sm">Total des événements organisés</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Users className="text-red-600 mr-3" size={24} />
              <h3 className="text-lg font-semibold">Participants</h3>
            </div>
            <p className="text-3xl font-bold mb-1">{analytics?.totalAttendees?.toLocaleString() || 0}</p>
            <p className="text-gray-600 text-sm">Total des participants</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <BarChart className="text-red-600 mr-3" size={24} />
              <h3 className="text-lg font-semibold">Revenus</h3>
            </div>
            <p className="text-3xl font-bold mb-1">{analytics?.totalRevenue?.toLocaleString() || 0} DH</p>
            <p className="text-gray-600 text-sm">Revenus totaux générés</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Événements récents</h3>
            <Link to="/create" className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center">
              <Plus size={16} className="mr-1" /> Créer un événement
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Événement</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ventes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {organizerEvents.map(event => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-10 w-10 rounded object-cover" src={event.image} alt={event.title} />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{event.title}</div>
                          <div className="text-sm text-gray-500">{event.visibility}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {event.ticketsSold}/{event.ticketsTotal}
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: `${(event.ticketsSold / event.ticketsTotal * 100)}%` }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye size={16} />
                        </button>
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Edit size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-right">
            <Link to="/events" className="text-red-600 hover:text-red-800 font-medium flex items-center justify-end">
              Voir tous les événements <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Revenus mensuels</h3>
            <div className="h-64 flex items-end">
              {analytics?.revenueByMonth.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full px-1">
                    <div 
                      className="bg-red-600 rounded-t" 
                      style={{ 
                        height: `${(item.revenue / Math.max(...analytics.revenueByMonth.map(i => i.revenue))) * 180}px`,
                        minHeight: item.revenue > 0 ? '10px' : '0'
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-2">{item.month}</div>
                  <div className="text-xs font-medium">{item.revenue > 0 ? `${(item.revenue/1000)}k` : '0'}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Inscriptions par événement</h3>
            {analytics?.registrationsByEvent.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{item.event}</span>
                  <span className="text-sm text-gray-600">{item.registrations}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full" 
                    style={{ 
                      width: `${(item.registrations / Math.max(...analytics.registrationsByEvent.map(i => i.registrations))) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    
    events: (
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Mes événements</h3>
            <div className="flex gap-3">
              <div className="relative">
                <select className="appearance-none bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-red-500">
                  <option>Tous les statuts</option>
                  <option>À venir</option>
                  <option>Terminés</option>
                  <option>Brouillons</option>
                  <option>Annulés</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
              
              <Link to="/create" className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center">
                <Plus size={16} className="mr-1" /> Créer un événement
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizerEvents.map(event => (
              <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="relative">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
                  <div className="flex items-center text-gray-600 text-sm mb-1">
                    <CalendarClock size={14} className="mr-1" /> {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin size={14} className="mr-1" /> {event.location}
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Inscriptions</div>
                      <div className="font-medium">{event.registrations}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Ventes</div>
                      <div className="font-medium">{event.ticketsSold}/{event.ticketsTotal}</div>
                    </div>
                    
                    <div className="flex gap-1">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-full">
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    
    profile: (
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex justify-between mb-6">
            <h3 className="text-xl font-semibold">Informations de l'organisateur</h3>
            <button className="flex items-center text-red-600 hover:text-red-800">
              <Edit size={16} className="mr-1" /> Modifier
            </button>
          </div>
          
          {organizerProfile && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Nom de l'organisation</p>
                  <p className="font-medium">{organizerProfile.businessName}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Responsable</p>
                  <p className="font-medium">{organizerProfile.name}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Email</p>
                  <div className="flex items-center">
                    <Mail size={16} className="text-gray-500 mr-2" />
                    <p className="font-medium">{organizerProfile.email}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Téléphone</p>
                  <div className="flex items-center">
                    <Phone size={16} className="text-gray-500 mr-2" />
                    <p className="font-medium">{organizerProfile.phone}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Site web</p>
                  <div className="flex items-center">
                    <LinkIcon size={16} className="text-gray-500 mr-2" />
                    <p className="font-medium text-blue-600">{organizerProfile.website}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Ville</p>
                  <div className="flex items-center">
                    <MapPin size={16} className="text-gray-500 mr-2" />
                    <p className="font-medium">{organizerProfile.city}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-gray-600 text-sm mb-1">Description</p>
                <p className="font-medium">{organizerProfile.bio}</p>
              </div>
              
              <div>
                <p className="text-gray-600 text-sm mb-2">Catégories d'événements</p>
                <div className="flex flex-wrap gap-2">
                  {organizerProfile.categories.map((category, index) => (
                    <span key={index} className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                  <button className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full flex items-center">
                    <Plus size={14} className="mr-1" /> Ajouter
                  </button>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 text-sm mb-3">Réseaux sociaux</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                      <span className="text-lg font-bold">f</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Facebook</p>
                      <p className="font-medium">{organizerProfile.social.facebook}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full mr-3">
                      <span className="text-lg font-bold">in</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Instagram</p>
                      <p className="font-medium">{organizerProfile.social.instagram}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mr-3">
                      <span className="text-lg font-bold">in</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="font-medium">{organizerProfile.social.linkedin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-6">Page publique</h3>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-6">
            <div className="flex-1">
              <p className="font-medium mb-1">Votre page organisateur publique</p>
              <p className="text-sm text-gray-600">C'est ainsi que le public voit votre profil d'organisateur</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center">
                <Eye size={16} className="mr-1" /> Prévisualiser
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center">
                <Edit size={16} className="mr-1" /> Personnaliser
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-40 bg-gray-200">
              <img src={organizerProfile?.coverPhoto || 'src/assets/default-cover.jpg'} alt="Cover Photo" className="w-full h-full object-cover" />
              <button className="absolute bottom-2 right-2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100">
                <Edit size={16} />
              </button>
            </div>
            
            <div className="p-6 relative">
              <div className="absolute -top-12 left-6 w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                <img src={organizerProfile?.avatar || 'src/assets/default-avatar.jpg'} alt="Avatar" className="w-full h-full object-cover" />
                <button className="absolute bottom-0 right-0 bg-white text-gray-700 p-1 rounded-full shadow-md hover:bg-gray-100">
                  <Edit size={14} />
                </button>
              </div>
              
              <div className="mt-12">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold">{organizerProfile?.businessName}</h3>
                  {organizerProfile?.verified && (
                    <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                      <Award size={12} className="mr-1" /> Vérifié
                    </span>
                  )}
                </div>
                
                <div className="flex items-center mt-1 text-gray-600">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">{organizerProfile?.city}</span>
                  <span className="mx-2">•</span>
                  <Users size={14} className="mr-1" />
                  <span className="text-sm">{organizerProfile?.followers} abonnés</span>
                  <span className="mx-2">•</span>
                  <Star size={14} className="mr-1" />
                  <span className="text-sm">{organizerProfile?.rating} ({organizerProfile?.reviews} avis)</span>
                </div>
                
                <p className="text-gray-700 mt-4">{organizerProfile?.bio}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {organizerProfile?.categories.map((category, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    settings: (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-6">Paramètres</h3>
        
        <div className="space-y-8">
          <div>
            <h4 className="font-medium mb-3">Paramètres du compte</h4>
            <div className="space-y-4 border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Statut de vérification</p>
                  <p className="text-sm text-gray-600">Votre compte est vérifié</p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center">
                  <Award size={14} className="mr-1" /> Vérifié
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Plan d'abonnement</p>
                  <p className="text-sm text-gray-600">Plan Pro (mensuel)</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Gérer
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Devise par défaut</p>
                  <p className="text-sm text-gray-600">Dirham marocain (MAD)</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Modifier
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Notifications</h4>
            <div className="space-y-3 border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Nouvelles inscriptions</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Rappels d'événements</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Emails marketing</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Sécurité</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Mot de passe</p>
                  <p className="text-sm text-gray-600">Dernière modification il y a 3 mois</p>
                </div>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Changer
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Authentification à deux facteurs</p>
                  <p className="text-sm text-gray-600">Activée</p>
                </div>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Gérer
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sessions actives</p>
                  <p className="text-sm text-gray-600">1 session active</p>
                </div>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Voir
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <button className="text-red-600 hover:text-red-800 font-medium flex items-center">
              <LogOut size={16} className="mr-1" /> Déconnexion
            </button>
          </div>
        </div>
      </div>
    )
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            <span className="ml-3 text-lg text-gray-700">Chargement...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img src="src/assets/logo.svg" alt="Logo" className="h-8 w-auto" />
              </div>
            </div>
            
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full"></span>
              </button>
              
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <img src={organizerProfile?.avatar || 'src/assets/default-avatar.jpg'} alt="Avatar" className="h-8 w-8 rounded-full" />
                  <div className="ml-2 hidden md:block">
                    <div className="text-sm font-medium">{organizerProfile?.name}</div>
                    <div className="text-xs text-gray-500">Organisateur</div>
                  </div>
                  <ChevronDown size={16} className="ml-1 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar navigation */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <img src={organizerProfile?.avatar || 'src/assets/default-avatar.jpg'} alt="Avatar" className="h-10 w-10 rounded-full" />
                  <div className="ml-3">
                    <div className="font-medium">{organizerProfile?.businessName}</div>
                    <div className="text-sm text-gray-500">Organisateur depuis {organizerProfile?.createdAt}</div>
                  </div>
                </div>
              </div>
              
              <nav className="space-y-1 p-2">
                <button 
                  onClick={() => setActiveTab('dashboard')} 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${activeTab === 'dashboard' ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <BarChart size={18} className="mr-3" />
                  Tableau de bord
                </button>
                
                <button 
                  onClick={() => setActiveTab('events')} 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${activeTab === 'events' ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Calendar size={18} className="mr-3" />
                  Événements
                </button>
                
                <button 
                  onClick={() => setActiveTab('profile')} 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${activeTab === 'profile' ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <User size={18} className="mr-3" />
                  Profil
                </button>
                
                <button 
                  onClick={() => setActiveTab('settings')} 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${activeTab === 'settings' ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Settings size={18} className="mr-3" />
                  Paramètres
                </button>
              </nav>
              
              <div className="p-4 border-t border-gray-200">
                <Link to="/help" className="flex items-center text-sm text-gray-700 hover:text-red-600">
                  <Heart size={18} className="mr-3" />
                  Centre d'aide
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="flex-1">
            {tabContent[activeTab]}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <img src="src/assets/logo.svg" alt="Logo" className="h-6 w-auto" />
              <span className="ml-2 text-sm text-gray-500">© 2025 EventHub. Tous droits réservés.</span>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-700">Conditions d'utilisation</Link>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Politique de confidentialité</Link>
              <Link to="/help" className="text-sm text-gray-500 hover:text-gray-700">Aide</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}