import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link import
import { Menu, User, Home, Sparkles, PlusCircle } from 'lucide-react';

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('homes');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State for user menu
  let userMenuTimeout; // Timeout variable for delayed closing

  const handleMouseEnter = () => {
    clearTimeout(userMenuTimeout); // Clear any existing timeout
    setIsUserMenuOpen(true); // Open the menu
  };

  const handleMouseLeave = () => {
    userMenuTimeout = setTimeout(() => {
      setIsUserMenuOpen(false); // Close the menu after a delay
    }, 200); // Adjust delay as needed
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem('eventManagerToken'); // Remove token
    localStorage.removeItem('user'); // Remove user data
    navigate('/'); // Redirect to homepage
  };

  return (
    <div className="font-sans">
      <header className="w-full z-50 transition-all duration-300 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="src/assets/logo.png"
                  className="h-4 w-auto mr-40"
                  alt="Logo"
                />
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {user ? (
                user.role === 'organizer' ? ( // Check if user is an organizer
                  <Link
                    to="/create"
                    className="hidden md:flex items-center text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    <span>Créer des événements</span>
                  </Link>
                ) : (
                  <span className="hidden md:flex items-center text-sm font-medium px-4 py-2 rounded-full text-gray-400 cursor-not-allowed">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    <span>Créer des événements (Organisateurs uniquement)</span>
                  </span>
                )
              ) : (
                <Link
                  to="/signup"
                  className="hidden md:flex items-center text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-100 text-blue-600 transition-colors duration-200"
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  <span>Inscrivez-vous pour créer des événements</span>
                </Link>
              )}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter} // Open menu on hover
                onMouseLeave={handleMouseLeave} // Close menu with delay
              >
                <button
                  className="flex items-center space-x-2 border border-gray-200 rounded-full p-1 hover:shadow-md transition-shadow duration-200"
                >
                  <Menu className="h-5 w-5 text-gray-700 ml-2" />
                  <div className="bg-gray-200 rounded-full p-1 mr-1">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                </button>
                {isUserMenuOpen && ( // Conditionally render menu
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={handleMouseEnter} // Prevent closing when interacting with the menu
                    onMouseLeave={handleMouseLeave} // Close menu with delay when leaving
                  >
                    <ul className="py-1 text-sm text-gray-700">
                      {user ? (
                        <>
                          <li>
                            <Link to="/profile" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Profile</Link>
                          </li>
                          <li>
                            <button
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link to="/signup" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Sign Up</Link>
                          </li>
                          <li>
                            <Link to="/login" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Log In</Link>
                          </li>
                        </>
                      )}
                      <li>
                        <Link to="/about" className="block w-full text-left px-4 py-2 hover:bg-gray-100">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Filter Menu */}
          <div className="hidden lg:flex items-center justify-center mt-4 space-x-10 text-sm">
            <Link
              to="/"
              className={`flex items-center space-x-2 pb-4 transition-colors duration-200 ${
                activeTab === 'homes'
                  ? 'border-b-2 border-black text-black font-medium'
                  : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('homes')}
            >
              <Home className="h-4 w-4 mr-1" />
              <span>Acheter des billets</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}