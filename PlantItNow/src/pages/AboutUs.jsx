import { Link } from 'react-router-dom';
import { Users, Calendar, Award, Globe, Target, Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function AboutUs() {
  // Données de l'équipe
  const teamMembers = [
    {
      name: "Sarah Dubois",
      image: "/src/assets/team/sarah.jpg",
    },
    {
      name: "Karim Benani",
      image: "/src/assets/team/karim.jpg",
    },
    {
      name: "Leila Mansouri",
      image: "/src/assets/team/leila.jpg",
    },
  ];

  // Statistiques
  const stats = [
    { icon: <Users size={24} />, value: "150 000+", label: "Utilisateurs actifs" },
    { icon: <Calendar size={24} />, value: "10 000+", label: "Événements organisés" },
    { icon: <Award size={24} />, value: "98%", label: "Taux de satisfaction" },
    { icon: <Globe size={24} />, value: "15+", label: "Villes couvertes" }
  ];

  // Valeurs
  const values = [
    { 
      icon: <Target size={32} className="text-red-600" />, 
      title: "Innovation", 
      description: "Nous repoussons constamment les limites pour offrir des solutions créatives et efficaces."
    },
    { 
      icon: <Users size={32} className="text-red-600" />, 
      title: "Communauté", 
      description: "Nous croyons au pouvoir des connections humaines pour créer des expériences mémorables."
    },
    { 
      icon: <Heart size={32} className="text-red-600" />, 
      title: "Passion", 
      description: "Notre amour pour l'événementiel nous pousse à l'excellence dans tout ce que nous faisons."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Background */}
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/bg.jpg')" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">À propos de nous</h1>
          <p className="text-xl text-white max-w-2xl">
          Nous révolutionnons la manière dont les événements sont découverts, planifiés et vécus au Maroc.
          </p>
        </div>
      </div>

      {/* Notre histoire */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">About PlanItNow</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 mb-8">
          Notre projet est un devoir scolaire dans lequel nous visons à créer une application web fonctionnelle en utilisant React.js. L’objectif de ce projet est de démontrer notre compréhension du développement front-end et des frameworks JavaScript modernes. En mettant l’accent sur une conception conviviale et une fonctionnalité responsive, nous avons créé une solution simple mais efficace pour gérer des événements, mettant en valeur notre capacité à intégrer diverses technologies dans une expérience cohérente.
          </p>
          <p className="text-gray-700">
          Ce projet constitue à la fois une expérience d’apprentissage et un moyen de démontrer nos compétences dans la création d’une application web pratique. Bien qu’il s’agisse principalement d’un travail académique, les techniques et concepts que nous avons acquis seront inestimables pour notre évolution en tant que développeurs.
          </p>
        </div>
      </div>

      {/* Nos valeurs */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Nos valeurs</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notre équipe */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Notre équipe</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Derrière PlanItNow se trouve une équipe passionnée de professionnels dédiés à créer la meilleure expérience possible pour nos utilisateurs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/api/placeholder/300/300" 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-red-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contactez-nous */}
      <div className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Une question, une suggestion ou simplement envie d'en savoir plus sur nos services ? 
              Notre équipe est à votre disposition pour vous répondre.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
              
              <div className="flex items-start mb-4">
                <Mail className="text-red-600 mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@eventmanager.com" className="text-gray-600 hover:text-red-600">
                    contact@eventmanager.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Phone className="text-red-600 mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <a href="tel:+212522123456" className="text-gray-600 hover:text-red-600">
                    +212 522 123 456
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-red-600 mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-gray-600">
                    Twin Center, Tour Ouest, 16ème étage<br />
                    Casablanca, Maroc
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-red-400"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-red-400"
                    placeholder="Votre email"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows="4" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:border-red-400"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Prêt à commencer votre aventure avec EventManager ?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Créer un compte
            </Link>
            <Link 
              to="/login" 
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}