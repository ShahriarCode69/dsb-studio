import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFilm, FiMusic, FiTrendingUp, FiMonitor, FiCamera, FiPackage, FiArrowRight } from 'react-icons/fi';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import BeforeVideo from '/videos/hero_video.mp4'
import AfterVideo from '/videos/hero_video.mp4'

const Services = () => {
  // Sample data for services
  const services = [
    {
      icon: <FiFilm className="text-4xl text-violet-400" />,
      title: 'Commercial Editing',
      description: 'Compelling ads that drive conversions with professional pacing, color grading, and sound design.',
      features: ['Brand messaging integration', 'Call-to-action optimization', 'Platform-specific versions']
    },
    {
      icon: <FiMusic className="text-4xl text-violet-400" />,
      title: 'Music Videos',
      description: 'Visually stunning music videos with perfect sync, creative transitions, and artistic visual effects.',
      features: ['Beat-matched cuts', 'Color grading', 'Visual effects']
    },
    {
      icon: <FiTrendingUp className="text-4xl text-violet-400" />,
      title: 'Social Media Content',
      description: 'Scroll-stopping content optimized for each platform\'s unique requirements and audience expectations.',
      features: ['Platform-specific formats', 'Trend-aware editing', 'Engagement optimization']
    },
    {
      icon: <FiMonitor className="text-4xl text-violet-400" />,
      title: 'Corporate Videos',
      description: 'Professional corporate videos that communicate your message with clarity and reinforce brand identity.',
      features: ['Interview compilation', 'B-roll integration', 'Motion graphics']
    },
    {
      icon: <FiCamera className="text-4xl text-violet-400" />,
      title: 'Documentary Editing',
      description: 'Compelling storytelling that weaves footage into an emotional and impactful narrative.',
      features: ['Narrative structure', 'Pacing optimization', 'Emotional arc development']
    },
    {
      icon: <FiPackage className="text-4xl text-violet-400" />,
      title: 'Gaming & Streaming',
      description: 'Dynamic gaming content that highlights the best moments with energetic pacing and graphics.',
      features: ['Highlight compilation', 'Stream optimization', 'Branded intros/outros']
    }
  ];

  // State for the before/after comparison
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="pt-32">
      <section className="relative overflow-hidden py-16 md:py-12 bg-black">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="heading-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
              Our Editing Services
            </h1>
            <p className="text-lg md:text-xl text-violet-100/80 mb-8 max-w-2xl mx-auto">
              Professional video editing solutions tailored to your specific needs and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:bg-neutral-800/30 hover:-translate-y-2">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors">{service.title}</h3>
                <p className="text-violet-100/70 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-violet-200">
                      <FiArrowRight className="text-violet-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors">
                  Get a Quote <FiArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-gradient-to-b from-violet-950/10 to-transparent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">The Transformation</h2>
            <p className="text-lg text-violet-100/70">
              See the dramatic difference professional editing makes with our before and after comparison.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-neutral-500/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {/* Before Video */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <CustomVideoPlayer 
                    url={BeforeVideo} 
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-violet-900/80 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                  Before
                </div>
              </div>
              
              {/* After Video */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <div className="relative">
                    <CustomVideoPlayer 
                      url={AfterVideo}
                      className="w-full h-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-violet-400/10 mix-blend-overlay pointer-events-none z-30"></div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-violet-600/80 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                  After
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-neutral-900/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Corporate Brand Video Transformation</h3>
              <p className="text-violet-100/70">
                Watch how we transformed basic interview footage into a compelling brand story with professional color grading, dynamic transitions, and strategic pacing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">Our Approach</h2>
            <p className="text-lg text-violet-100/70">
              We follow a proven methodology to ensure your video achieves its full potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:bg-neutral-800/30 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-violet-800 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Analysis</h3>
              <p className="text-violet-100/70">
                We study your raw footage, understand your goals, and develop an editing strategy tailored to your audience.
              </p>
            </div>
            
            <div className="card hover:bg-neutral-800/30 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-violet-800 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Execution</h3>
              <p className="text-violet-100/70">
                Our editors apply technical expertise and creative vision to transform your footage into a compelling story.
              </p>
            </div>
            
            <div className="card hover:bg-neutral-800/30 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-violet-800 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Refinement</h3>
              <p className="text-violet-100/70">
                We perfect your video with color grading, sound design, and motion graphics to achieve a professional finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Video?</h2>
            <p className="text-lg text-violet-100/70 mb-8">
              Contact us today to discuss your project and discover how our editing services can elevate your content.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Book a Consultation <FiArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;