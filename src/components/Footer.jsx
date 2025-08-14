import { Link } from 'react-router-dom';
import { FiInstagram, FiYoutube, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Commercial Editing', path: '/services' },
        { name: 'Music Videos', path: '/services' },
        { name: 'Social Media Content', path: '/services' },
        { name: 'Corporate Videos', path: '/services' },
        { name: 'Documentary Editing', path: '/services' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiInstagram />, url: 'https://instagram.com' },
    { icon: <FiYoutube />, url: 'https://youtube.com' },
    { icon: <FiTwitter />, url: 'https://twitter.com' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com' }
  ];

  return (
    <footer className="bg-violet-950/30 border-t border-violet-900/30">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-white text-2xl font-bold hover:text-violet-300 transition-colors">
              PixelPerfect
            </Link>
            <p className="mt-4 text-violet-100/70">
              Professional video editing services that transform ordinary footage into extraordinary stories. Elevate your content with our expert editing team.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-violet-800/50 flex items-center justify-center text-violet-300 hover:bg-violet-700 hover:text-white transition-colors"
                  aria-label={`Visit our social media ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-white mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-violet-100/70 hover:text-violet-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-violet-800/30 text-center">
          <p className="text-violet-100/50">
            © {currentYear} PixelPerfect Video Editing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;