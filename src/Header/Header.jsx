
import {  NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';

function Header() {
  return (
    <header className="bg-purple-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo এবং Brand Name */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Gadget Heaven</span>
        </div>
        
        {/* Navbar Links */}
        <nav className="space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'text-gray-200 font-semibold' : 'text-white hover:text-gray-200'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/statistics" 
            className={({ isActive }) => 
              isActive ? 'text-gray-200 font-semibold' : 'text-white hover:text-gray-200'
            }
          >
            Statistics
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              isActive ? 'text-gray-200 font-semibold' : 'text-white hover:text-gray-200'
            }
          >
            Dashboard
          </NavLink>
        </nav>

        {/* Icons */}
        <div className="space-x-4">
          <button className="hover:text-gray-200">
            {/* Cart Icon */}
            <span role="img" aria-label="cart" className="text-xl">🛒</span>
          </button>
          <button className="hover:text-gray-200">
            {/* Wishlist Icon */}
            <span role="img" aria-label="wishlist" className="text-xl">❤️</span>
          </button>
        </div>
      </div>
      <Banner></Banner>
    </header>
     
  );
}

export default Header;
