import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="pt-16 min-h-[80vh] flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center card py-16">
          <h1 className="text-6xl font-bold mb-6 text-purple-400">404</h1>
          <h2 className="heading-lg mb-6">Page Not Found</h2>
          <p className="text-lg text-purple-100/70 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
              <FiHome className="text-lg" /> Go to Homepage
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <FiArrowLeft className="text-lg" /> Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;