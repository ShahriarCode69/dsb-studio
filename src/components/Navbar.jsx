import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dsblogo from "/images/dsblogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`mt-6 fixed left-1/2 -translate-x-1/2 w-[90%] max-w-6xl rounded-full z-50 transition-all duration-300 font-['Outfit'] bg-black/10 backdrop-blur-md border-2 border-white/20`}>
      <div className="px-6 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={dsblogo} alt="" className='w-12' />
            </Link>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-purple-300 px-4 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button - Right aligned */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-violet-800/20 border border-violet-600 text-white hover:bg-violet-600 px-6 py-3 rounded-full text-base font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed left-1/2 -translate-x-1/2 w-[100%] max-w-6xl transition-all duration-300 ease-in-out mt-4  ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        } ${!isOpen && 'pointer-events-none'}`}
      >
        {/* Menu Container with same styling as navbar */}
        <div className="rounded-3xl  bg-neutral-900">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="text-white hover:text-purple-300 block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-xl"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="bg-violet-800/20 border border-violet-600 text-white hover:bg-violet-600 block text-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 shadow-md"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;