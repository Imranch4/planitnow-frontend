import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Image, DollarSign, Info, Tag, ListChecks, ArrowLeft } from 'lucide-react';

export default function CreateEventPage() {
  const navigate = useNavigate();
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventCity, setEventCity] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventCapacity, setEventCapacity] = useState('');
  const [eventPrice, setEventPrice] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  
  const categories = [
    "Concert", "Conférence", "Exposition", "Sport", 
    "Gastronomie", "Festival", "Atelier", "Networking"
  ];

  const cities = [
    "Casablanca", "Rabat", "Marrakech", "Fès", 
    "Tanger", "Agadir", "Meknès", "Oujda"
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      title: eventTitle,
      description: eventDescription,
      location: eventLocation,
      city: eventCity,
      date: eventDate,
      time: eventTime,
      capacity: eventCapacity,
      price: eventPrice,
      category: eventCategory,
    };

    fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Événement créé avec succès');
          navigate('/'); // Redirection vers la page d'accueil après création
        } else {
          console.error('Erreur lors de la création de l\'événement');
        }
      })
      .catch((error) => console.error('Erreur:', error));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* En-tête */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 py-6 px-8">
          <button 
            onClick={() => navigate('/')} 
            className="mb-4 text-white hover:text-red-100 font-medium flex items-center"
          >
            <ArrowLeft size={18} className="mr-1" /> Retour
          </button>
          <h1 className="text-2xl font-bold text-white">Créer un nouvel événement</h1>
          <p className="text-red-100 mt-2">Remplissez les informations ci-dessous pour créer votre événement</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Colonne gauche */}
            <div className="space-y-6">
              {/* Titre de l'événement */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Titre de l'événement*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Donnez un titre accrocheur à votre événement"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Description*
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center justify-center">
                    <Info size={18} className="text-gray-400" />
                  </div>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Décrivez votre événement en détail"
                    rows="5"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Catégorie */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Catégorie*
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center justify-center">
                    <Tag size={18} className="text-gray-400" />
                  </div>
                  <select
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none"
                    value={eventCategory}
                    onChange={(e) => setEventCategory(e.target.value)}
                    required
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Image de couverture */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Image de couverture*
                </label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-red-300 transition-colors">
                  <Image size={36} className="text-gray-400 mb-3" />
                  <p className="text-gray-500 text-center mb-2">Glissez-déposez une image ou</p>
                  <label 
                    htmlFor="coverImage" 
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
                  >
                    Parcourir
                  </label>
                  <input 
                    id="coverImage" 
                    type="file" 
                    accept="image/png, image/jpeg" 
                    className="hidden" 
                    required
                  />
                  <p className="text-gray-400 text-sm mt-2">PNG, JPG, JPEG (max 5MB)</p>
                </div>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="space-y-6">
              {/* Lieu */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Lieu*
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center justify-center">
                    <MapPin size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Où se déroule l'événement?"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Ville */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Ville*
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center justify-center">
                    <MapPin size={18} className="text-gray-400" />
                  </div>
                  <select
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none"
                    value={eventCity}
                    onChange={(e) => setEventCity(e.target.value)}
                    required
                  >
                    <option value="">Sélectionnez une ville</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Date*
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center justify-center">
                    <Calendar size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Heure */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Heure*
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center justify-center">
                    <Clock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Capacité */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Capacité
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center justify-center">
                    <Users size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Nombre maximum de participants"
                    value={eventCapacity}
                    onChange={(e) => setEventCapacity(e.target.value)}
                    min="1"
                  />
                </div>
              </div>

              {/* Prix */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Prix (MAD)
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center justify-center">
                    <DollarSign size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Laissez vide si gratuit (en MAD)"
                    value={eventPrice}
                    onChange={(e) => setEventPrice(e.target.value)}
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Liste de vérification */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center mb-3">
              <ListChecks size={20} className="text-red-600 mr-2" />
              <h3 className="font-medium">Avant de publier</h3>
            </div>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>✓ Assurez-vous que toutes les informations sont correctes</li>
              <li>✓ Vérifiez que l'adresse est précise</li>
              <li>✓ Ajoutez une image attrayante pour attirer plus de participants</li>
              <li>✓ Définissez clairement les conditions d'annulation si nécessaire</li>
            </ul>
          </div>

          {/* Boutons d'action */}
          <div className="mt-8 flex flex-col sm:flex-row justify-end gap-4">
            <button 
              type="button" 
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-300 transition-colors"
            >
              Annuler
            </button>
            <button 
              type="submit" 
              className="px-6 py-3 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 transition-colors"
            >
              Publier l'événement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}