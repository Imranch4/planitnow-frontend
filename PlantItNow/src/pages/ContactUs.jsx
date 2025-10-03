import { useState } from 'react';
import { MapPin, Mail, Phone, HelpCircle, Send, CalendarClock, Ticket } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [userType, setUserType] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userType) {
      alert("Veuillez sélectionner si vous êtes un organisateur ou un acheteur.");
      return;
    }
    // Logique pour envoyer le formulaire
    console.log({ name, email, subject, message, userType });
    setFormSubmitted(true);
    // Réinitialiser le formulaire
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setUserType('');
    
    // Après 3 secondes, masquer le message de succès
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('src/assets/bg.jpg')" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-xl text-white">Nous sommes là pour vous aider</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        
        {/* Cartes d'information de contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4 inline-block">
              <MapPin size={24} className="text-red-600" />
            </div>
            <h3 className="font-semibold mb-2">Notre adresse</h3>
            <p className="text-gray-600">123 Avenue Mohammed V, Casablanca, Maroc</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4 inline-block">
              <Mail size={24} className="text-red-600" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contact@eventmanager.ma</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4 inline-block">
              <Phone size={24} className="text-red-600" />
            </div>
            <h3 className="font-semibold mb-2">Téléphone</h3>
            <p className="text-gray-600">+212 522 123 456</p>
          </div>
        </div>

        {/* Section formulaire de contact */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Envoyez-nous un message</h2>

          {/* Sélection du type d'utilisateur */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div 
              className={`flex flex-col items-center p-6 rounded-lg cursor-pointer border-2 transition-colors ${userType === 'organizer' ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-red-300'}`}
              onClick={() => setUserType('organizer')}
            >
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <CalendarClock size={24} className="text-red-600" />
              </div>
              <h3 className="font-semibold">Je suis un organisateur</h3>
              <p className="text-gray-600 text-sm text-center mt-2">J'organise des événements et j'ai besoin d'aide</p>
            </div>
            
            <div 
              className={`flex flex-col items-center p-6 rounded-lg cursor-pointer border-2 transition-colors ${userType === 'buyer' ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-red-300'}`}
              onClick={() => setUserType('buyer')}
            >
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <Ticket size={24} className="text-red-600" />
              </div>
              <h3 className="font-semibold">Je suis un acheteur</h3>
              <p className="text-gray-600 text-sm text-center mt-2">J'achète des billets et j'ai besoin d'assistance</p>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center"
                disabled={!userType}
              >
                Envoyer <Send size={16} className="ml-2" />
              </button>
            </div>

            {/* Message après soumission */}
            {formSubmitted && (
              <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</span>
              </div>
            )}

            {/* Message d'aide pour choisir un type d'utilisateur */}
            {!userType && (
              <div className="mt-6 flex items-center justify-center text-gray-500 text-sm">
                <HelpCircle size={16} className="mr-2" />
                <span>Veuillez sélectionner si vous êtes un organisateur ou un acheteur</span>
              </div>
            )}
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Questions fréquemment posées</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Comment puis-je créer un événement ?</h3>
              <p className="text-gray-600">Pour créer un événement, inscrivez-vous en tant qu'organisateur, puis utilisez notre plateforme intuitive pour remplir toutes les informations nécessaires sur votre événement.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Comment acheter des billets ?</h3>
              <p className="text-gray-600">Naviguez sur notre site pour trouver l'événement qui vous intéresse, puis cliquez sur "Acheter des billets" et suivez les instructions pour compléter votre achat en toute sécurité.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Quels sont les frais pour les organisateurs ?</h3>
              <p className="text-gray-600">Nos frais varient selon le type d'événement et le volume de billets. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins spécifiques.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Comment obtenir un remboursement ?</h3>
              <p className="text-gray-600">La politique de remboursement dépend de chaque organisateur. Veuillez consulter les conditions spécifiques de l'événement ou contactez directement l'organisateur pour plus d'informations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Rejoignez notre communauté</h2>
          <p className="text-gray-700 mb-8 text-lg">Restez informé des derniers événements et des nouvelles fonctionnalités</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full sm:w-auto"
            />
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}