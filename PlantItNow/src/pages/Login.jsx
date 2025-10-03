import { useState } from 'react';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({ setUser }) { // Accept setUser as a prop
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe
      });

      if (response.data.success) {
        // Store token and user data
        localStorage.setItem('eventManagerToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Update user state
        setUser(response.data.user); // Update global user state
        
        // Redirect to the homepage
        navigate('/');
      } else {
        setError(response.data.message || "Erreur lors de la connexion");
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        setError(error.response.data?.message || "Erreur lors de la connexion");
      } else if (error.request) {
        setError("Impossible de se connecter au serveur. Vérifiez votre connexion.");
      } else {
        setError("Une erreur inattendue s'est produite");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Background */}
      <div className="relative h-78 w-full bg-cover bg-center" style={{ backgroundImage: "url('src/assets/bg.jpg')" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 pt-16">
          <h1 className="text-3xl font-bold text-white">Connexion à votre compte</h1>
        </div>
      </div>

      {/* Login Form Card */}
      <div className="max-w-md w-full mx-auto -mt-24 relative z-20 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Retour Button */}
          <button 
            onClick={() => navigate('/')} 
            className="mb-4 text-red-600 hover:text-red-800 font-medium flex items-center"
          >
            ← Retour
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Bienvenue sur PlanItNow</h2>
            <p className="text-gray-600 mt-2">Connectez-vous pour accéder à votre espace</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse e-mail
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-red-400 transition">
                <Mail size={20} className="text-gray-500 mr-3" />
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="Votre adresse e-mail" 
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 hover:border-red-400 transition">
                <Lock size={20} className="text-gray-500 mr-3" />
                <input 
                  id="password"
                  name="password"
                  type="password" 
                  placeholder="Votre mot de passe" 
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  Se souvenir de moi
                </label>
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
                  Connexion...
                </span>
              ) : (
                <>
                  Se connecter <ArrowRight size={18} className="ml-2" />
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

          {/* Create Account Link */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Vous n'avez pas encore de compte?</p>
            <Link 
              to="/signup" 
              className="inline-flex items-center font-medium text-red-600 hover:text-red-800"
            >
              Créer un compte <User size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}