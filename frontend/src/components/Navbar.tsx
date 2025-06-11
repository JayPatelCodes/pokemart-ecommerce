import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-red-500">PokéMart</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-red-500">Home</Link>
          <Link to="/cart" className="text-gray-700 hover:text-red-500">Cart</Link>
          <Link to="/auth" className="text-gray-700 hover:text-red-500">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
