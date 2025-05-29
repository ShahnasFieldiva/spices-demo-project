import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <header className="w-full bg-blue-600 text-white flex flex-col sm:flex-row items-center justify-between px-6 py-4 ">
      <nav className="flex space-x-4">
        <button
          onClick={() => navigate('/chemical')}
          className={`px-4 py-2 rounded ${
            currentPath === '/chemical' || currentPath === '/'
              ? 'bg-white text-blue-600 font-semibold'
              : 'hover:bg-blue-500 transition-colors duration-200'
          }`}
        >
          Chemical
        </button>
        <button
          onClick={() => navigate('/batch')}
          className={`px-4 py-2 rounded ${
            currentPath === '/batch'
              ? 'bg-white text-blue-600 font-semibold'
              : 'hover:bg-blue-500 transition-colors duration-200'
          }`}
        >
          Batch
        </button>
      </nav>
    </header>
  );
};

export default Header;
