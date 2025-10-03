import { useState } from 'react';
import { Mail, Lock, User, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    userType: 'ticketBuyer',
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true;
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    // التحقق من تطابق كلمات المرور
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      setIsLoading(false);
      return;
    }

    // التحقق من صحة البريد الإلكتروني
    if (!validateEmail(formData.email)) {
      setError("Adresse email invalide");
      setIsLoading(false);
      return;
    }

    // التحقق من صحة رقم الهاتف
    if (formData.phone && !validatePhone(formData.phone)) {
      setError("Numéro de téléphone invalide (10 chiffres requis)");
      setIsLoading(false);
      return;
    }

    // التحقق من الموافقة على الشروط
    if (!formData.agreeTerms) {
      setError("Vous devez accepter les conditions d'utilisation");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/signup', {  // Ensure endpoint matches backend
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        userType: formData.userType
      });

      if (response.data.success) {
        setSuccessMessage("Inscription réussie! Redirection...");
        setTimeout(() => {
          navigate('/login', { 
            state: { 
              registrationSuccess: true,
              email: formData.email 
            } 
          });
        }, 2000);
      } else {
        setError(response.data.message || "Erreur lors de l'inscription");
      }
    } catch (err) {
      console.error("Signup error:", err); // Added logging for debugging
      if (err.response) {
        setError(err.response.data?.message || "Erreur lors de l'inscription");
      } else if (err.request) {
        setError("Impossible de se connecter au serveur. Veuillez vérifier votre connexion.");
      } else {
        setError("Une erreur inattendue s'est produite. Veuillez réessayer.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Background */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/bg.jpg')" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 pt-16">
          <h1 className="text-3xl font-bold text-white">Créer un compte</h1>
        </div>
      </div>

      {/* Signup Form Card */}
      <div className="max-w-lg w-full mx-auto -mt-24 relative z-20 px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <button 
            onClick={() => navigate('/')} 
            className="mb-4 text-red-600 hover:text-red-800 font-medium flex items-center"
          >
            ← Retour
          </button>
          
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Rejoignez EventManager</h2>
            <p className="text-gray-600 mt-1">Créez votre compte pour organiser et découvrir des événements</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* User Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type d'utilisateur
              </label>
              <div className="flex justify-between">
                <label className="flex flex-col items-center w-1/2 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition">
                  <input
                    type="radio"
                    name="userType"
                    value="ticketBuyer"
                    checked={formData.userType === 'ticketBuyer'}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${formData.userType === 'ticketBuyer' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    🎫
                  </div>
                  <span className={`text-sm font-medium ${formData.userType === 'ticketBuyer' ? 'text-red-600' : 'text-gray-700'}`}>
                    Acheteur de ticket
                  </span>
                </label>
                <label className="flex flex-col items-center w-1/2 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition ml-4">
                  <input
                    type="radio"
                    name="userType"
                    value="organizer"
                    checked={formData.userType === 'organizer'}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${formData.userType === 'organizer' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    📅
                  </div>
                  <span className={`text-sm font-medium ${formData.userType === 'organizer' ? 'text-red-600' : 'text-gray-700'}`}>
                    Organisateur
                  </span>
                </label>
              </div>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom *
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-red-400 transition">
                  <User size={20} className="text-gray-500 mr-3" />
                  <input 
                    id="firstName"
                    name="firstName"
                    type="text" 
                    placeholder="Votre prénom" 
                    className="w-full bg-transparent focus:outline-none text-gray-700"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom *
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-red-400 transition">
                  <User size={20} className="text-gray-500 mr-3" />
                  <input 
                    id="lastName"
                    name="lastName"
                    type="text" 
                    placeholder="Votre nom" 
                    className="w-full bg-transparent focus:outline-none text-gray-700"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse e-mail *
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-red-400 transition">
                <Mail size={20} className="text-gray-500 mr-3" />
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="exemple@domaine.com" 
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Numéro de téléphone
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-red-400 transition">
                <Phone size={20} className="text-gray-500 mr-3" />
                <input 
                  id="phone"
                  name="phone"
                  type="tel" 
                  placeholder="0612345678" 
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe *
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-red-400 transition">
                <Lock size={20} className="text-gray-500 mr-3" />
                <input 
                  id="password"
                  name="password"
                  type="password" 
                  placeholder="Au moins 8 caractères" 
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="8"
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirmer le mot de passe *
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-red-400 transition">
                <Lock size={20} className="text-gray-500 mr-3" />
                <input 
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password" 
                  placeholder="Retapez votre mot de passe" 
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="8"
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeTerms" className="text-gray-600">
                    J'accepte les <Link to="/terms" className="text-red-600 hover:underline">conditions d'utilisation</Link> et la <Link to="/privacy" className="text-red-600 hover:underline">politique de confidentialité</Link> *
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Traitement...
                </span>
              ) : (
                <>
                  Créer mon compte <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400">ou</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Vous avez déjà un compte?</p>
            <Link 
              to="/login" 
              className="inline-flex items-center font-medium text-red-600 hover:text-red-800"
            >
              Se connecter <CheckCircle2 size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}