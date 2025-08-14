import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 3000); // 3000 milliseconds = 3 seconds
      
      // In a real application, you would send the form data to a server here
    }
  };

  return (
    <div className="pt-32"> {/* Padding top to account for navbar */}
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-black">
      <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-violet-100/80 max-w-2xl mx-auto">
              Ready to transform your video content? Contact us today to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <div className="card mb-8">
                <h2 className="heading-md mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-800/50 flex items-center justify-center">
                      <FiMail className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-neutral-100/70">hello@pixelperfect.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-800/50 flex items-center justify-center">
                      <FiPhone className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-neutral-100/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-800/50 flex items-center justify-center">
                      <FiMapPin className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Office</h3>
                      <p className="text-neutral-100/70">123 Creative Studio St.<br />Los Angeles, CA 90210</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Our team at work" 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="card">
              <h2 className="heading-md mb-6">Send Us a Message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-violet-800/30 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-violet-600/20 flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="text-3xl text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-violet-100/70">{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-200 mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-neutral-700/30 border ${errors.name ? 'border-red-500' : 'border-neutral-500/50'} rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-neutral-400/70`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-200 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-neutral-700/30 border ${errors.name ? 'border-red-500' : 'border-neutral-500/50'} rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-neutral-400/70`}
                        placeholder="Your email"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-200 mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-neutral-400/70"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-200 mb-2">Subject (Optional)</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-neutral-400/70"
                        placeholder="Subject of your message"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-200 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 bg-neutral-700/30 border ${errors.name ? 'border-red-500' : 'border-neutral-500/50'} rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-neutral-400/70`}
                      placeholder="Tell us about your project"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Send Message <FiSend className="ml-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser Section */}
      <section className="py-20 bg-gradient-to-b from-violet-950/10 to-transparent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Have Questions?</h2>
            <p className="text-lg text-violet-100/70 mb-8">
              Check out our frequently asked questions for quick answers to common inquiries about our video editing services.
            </p>
            <Link to="/faq" className="btn-secondary inline-flex items-center gap-2">
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;