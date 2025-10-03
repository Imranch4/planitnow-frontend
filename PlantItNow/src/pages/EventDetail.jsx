import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CalendarClock, 
  MapPin, 
  Clock, 
  Users, 
  CreditCard, 
  Share2, 
  Heart, 
  ChevronLeft, 
  Star, 
  Phone, 
  Mail, 
  ExternalLink, 
  MessageCircle,
  Calendar
} from 'lucide-react';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Simuler un appel API pour récupérer les détails de l'événement
    setLoading(true);
    setTimeout(() => {
      // Exemple de données d'événement
      setEvent({
        id: parseInt(id),
        title: "Festival de Musique de Marrakech",
        description: "Le Festival de Musique de Marrakech revient pour sa 15ème édition ! Venez découvrir des artistes nationaux et internationaux dans un cadre exceptionnel. Au programme : concerts, masterclass, et découvertes musicales dans différents lieux emblématiques de la ville ocre.",
        longDescription: "Le Festival de Musique de Marrakech est devenu un événement incontournable dans le paysage culturel marocain. Pendant 3 jours, la ville s'anime au rythme de performances musicales variées allant du traditionnel au contemporain, du local à l'international.\n\nCette année, nous accueillons des artistes de renom venant des quatre coins du monde. Les concerts se dérouleront dans des lieux prestigieux comme le Palais Bahia, les Jardins de la Ménara et la Place Jemaa el-Fna.\n\nEn plus des concerts, nous proposons des ateliers d'initiation à différents instruments traditionnels marocains ainsi que des rencontres avec les artistes. Un village de food trucks sera disponible sur le site principal pour vous permettre de vous restaurer entre les performances.",
        image: "https://via.placeholder.com/800x400",
        gallery: [
          "https://via.placeholder.com/400x300?text=Photo+1",
          "https://via.placeholder.com/400x300?text=Photo+2",
          "https://via.placeholder.com/400x300?text=Photo+3",
          "https://via.placeholder.com/400x300?text=Photo+4"
        ],
        location: "Marrakech",
        venue: "Palais Bahia",
        address: "Rue Riad Zitoun el Jdid, 40000 Marrakech",
        date: "25-27 Mai 2025",
        startTime: "16:00",
        endTime: "23:00",
        price: 250,
        rating: 4.8,
        reviews: 124,
        type: "Festival",
        maxAttendees: 3000,
        remainingSpots: 856,
        organizer: {
          name: "Association Culturelle du Maroc",
          phone: "+212 522 123 456",
          email: "contact@festivalmarrakech.ma",
          website: "www.festivalmarrakech.ma"
        },
        tags: ["Musique", "Festival", "International", "Concert", "Culture"],
        similarEvents: [
          {
            id: 7,
            title: "Concert de Jazz International",
            image: "https://via.placeholder.com/300x200",
            location: "Tanger",
            date: "22 Juillet 2025",
            price: 180,
            type: "Concert"
          },
          {
            id: 9,
            title: "Festival du Film Marocain",
            image: "https://via.placeholder.com/300x200",
            location: "Agadir",
            date: "10 Août 2025",
            price: 100,
            type: "Festival"
          },
          {
            id: 11,
            title: "Concert de Musique Amazigh",
            image: "https://via.placeholder.com/300x200",
            location: "Agadir",
            date: "28 Mai 2025",
            price: 120,
            type: "Concert"
          }
        ]
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl font-bold mb-4">Événement introuvable</h2>
        <p className="text-gray-600 mb-8">L'événement que vous recherchez n'existe pas ou a été supprimé</p>
        <Link to="/events" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
          Retour aux événements
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation retour */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/events" className="inline-flex items-center text-gray-600 hover:text-red-600">
            <ChevronLeft size={20} />
            <span className="ml-1">Retour aux événements</span>
          </Link>
        </div>
      </div>

      {/* Image principale */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block bg-red-600 text-white text-sm font-medium px-3 py-1 rounded mb-3">
              {event.type}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <MapPin size={18} className="mr-1" />
                {event.venue}, {event.location}
              </div>
              <div className="flex items-center">
                <CalendarClock size={18} className="mr-1" />
                {event.date}
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-1" />
                {event.startTime} - {event.endTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2">
            {/* Actions rapides */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="flex items-center bg-white rounded-lg border border-gray-200 px-4 py-2 mr-3">
                  <Star size={18} className="text-yellow-500 mr-1" />
                  <span className="font-medium">{event.rating}</span>
                  <span className="text-gray-500 ml-1">({event.reviews} avis)</span>
                </div>
                <div className="text-lg font-bold text-red-600">{event.price} €</div>
              </div>
              <div className="flex items-center">
                <button 
                  className={`mr-3 p-2 rounded-full border ${isLiked ? 'bg-red-50 border-red-200 text-red-600' : 'bg-white border-gray-200 text-gray-500'}`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                </button>
                <button className="p-2 rounded-full bg-white border border-gray-200 text-gray-500">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">À propos de cet événement</h2>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <p className="text-gray-700 whitespace-pre-line">{event.longDescription}</p>
            </div>

            {/* Galerie */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Galerie</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {event.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img src={image} alt={`${event.title} image ${index + 1}`} className="w-full h-40 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Lieu */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Lieu de l'événement</h2>
              <div className="flex items-start mb-4">
                <MapPin size={20} className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">{event.venue}</h3>
                  <p className="text-gray-600">{event.address}</p>
                </div>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg mb-4">
                {/* Ici on pourrait intégrer une carte Google Maps */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span>Carte de localisation</span>
                </div>
              </div>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 font-medium flex items-center"
              >
                Voir sur Google Maps
                <ExternalLink size={16} className="ml-1" />
              </a>
            </div>

            {/* Commentaires */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Avis et commentaires</h2>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">{event.reviews} avis</span>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  <div className="text-4xl font-bold mr-2">{event.rating}</div>
                  <div className="flex flex-col">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < Math.floor(event.rating) ? "#FFC107" : "none"} 
                          stroke={i < Math.floor(event.rating) ? "#FFC107" : "#CBD5E0"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">sur 5</span>
                  </div>
                </div>
              </div>
              
              {/* Exemple de commentaires */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <h4 className="font-medium">Ahmed K.</h4>
                        <div className="flex items-center text-gray-500 text-sm">
                          <CalendarClock size={14} className="mr-1" />
                          <span>Édition 2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < 5 ? "#FFC107" : "none"} stroke={i < 5 ? "#FFC107" : "#CBD5E0"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">Un événement exceptionnel ! J'ai adoré l'ambiance et la programmation était très variée. À ne pas manquer lors de la prochaine édition.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <h4 className="font-medium">Sophie M.</h4>
                        <div className="flex items-center text-gray-500 text-sm">
                          <CalendarClock size={14} className="mr-1" />
                          <span>Édition 2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < 4 ? "#FFC107" : "none"} stroke={i < 4 ? "#FFC107" : "#CBD5E0"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">Très bon festival, bien organisé. Les artistes étaient talentueux et les lieux magnifiques. Je retire une étoile car la file d'attente pour les boissons était trop longue.</p>
                </div>
              </div>
              
              <button className="mt-6 w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition flex items-center justify-center">
                <MessageCircle size={18} className="mr-2" />
                Voir tous les avis
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Réservation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Réserver</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Prix</span>
                  <span className="font-medium">{event.price} €</span>
                </div>
                
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Users size={18} className="text-gray-500 mr-2" />
                    <span className="text-gray-600">Places disponibles</span>
                  </div>
                  <span className="font-medium">{event.remainingSpots}/{event.maxAttendees}</span>
                </div>
              </div>
              
              <div className="text-center">
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors mb-4">
                  Réserver maintenant
                </button>
                <p className="text-sm text-gray-500">
                  <Clock size={14} className="inline mr-1" />
                  La réservation sera confirmée instantanément
                </p>
              </div>
            </div>
            
            {/* Dates */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Dates et horaires</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar size={20} className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Dates</h3>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Horaires</h3>
                    <p className="text-gray-600">De {event.startTime} à {event.endTime}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 flex items-center">
                  <CreditCard size={14} className="mr-1" />
                  Paiement sécurisé
                </p>
              </div>
            </div>
            
            {/* Organisateur */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Organisateur</h2>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-500">
                  {event.organizer.name.charAt(0)}
                </div>
                <h3 className="font-medium">{event.organizer.name}</h3>
              </div>
              
              <div className="space-y-3">
                <a href={`tel:${event.organizer.phone}`} className="flex items-center text-gray-600 hover:text-red-600">
                  <Phone size={18} className="mr-2" />
                  {event.organizer.phone}
                </a>
                
                <a href={`mailto:${event.organizer.email}`} className="flex items-center text-gray-600 hover:text-red-600">
                  <Mail size={18} className="mr-2" />
                  {event.organizer.email}
                </a>
                
                <a href={`https://${event.organizer.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-red-600">
                  <ExternalLink size={18} className="mr-2" />
                  {event.organizer.website}
                </a>
              </div>
            </div>
            
            {/* Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Événements similaires */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Événements similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.similarEvents.map(similarEvent => (
              <Link to={`/events/${similarEvent.id}`} key={similarEvent.id} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="relative">
                    <img 
                      src={similarEvent.image} 
                      alt={similarEvent.title} 
                      className="w-full h-48 object-cover" 
                    />
                    <div className="absolute top-0 right-0 m-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                      {similarEvent.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <MapPin size={16} className="text-gray-500 mr-1" />
                      <span className="text-gray-600 text-sm">{similarEvent.location}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{similarEvent.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CalendarClock size={16} className="text-gray-500 mr-1" />
                        <span className="text-gray-600 text-sm">{similarEvent.date}</span>
                      </div>
                      <span className="font-bold">{similarEvent.price} €</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}