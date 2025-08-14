import { Link } from 'react-router-dom';
import { FiUsers, FiTarget, FiAward, FiHeart, FiArrowRight } from 'react-icons/fi';
import AboutImg from '/images/hero_thumb.jpeg'
import TeamMember1 from '/images/hero_thumb.jpeg'

const About = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Lead Editor & Founder',
      bio: 'Former Hollywood editor with 15+ years of experience working on award-winning films and commercials.',
      image: TeamMember1
    },
    {
      name: 'Jamie Chen',
      role: 'Senior Motion Graphics Artist',
      bio: 'Specialist in creating stunning visual effects and animations that elevate storytelling to new heights.',
      image: TeamMember1
    },
    {
      name: 'Taylor Reed',
      role: 'Color Grading Specialist',
      bio: 'Expert in creating distinctive visual styles through advanced color science and grading techniques.',
      image: TeamMember1
    },
    {
      name: 'Sam Wilson',
      role: 'Sound Design Expert',
      bio: 'Audio engineer with a passion for creating immersive soundscapes that complement visual storytelling.',
      image: TeamMember1
    }
  ];

  // Sample data for values
  const values = [
    {
      icon: <FiHeart className="text-3xl text-violet-400" />,
      title: 'Passion',
      description: 'We\'re driven by a genuine love for the craft of video editing and storytelling.'
    },
    {
      icon: <FiAward className="text-3xl text-violet-400" />,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in every project we undertake.'
    },
    {
      icon: <FiUsers className="text-3xl text-violet-400" />,
      title: 'Collaboration',
      description: 'We work closely with clients to ensure their vision is realized and exceeded.'
    },
    {
      icon: <FiTarget className="text-3xl text-violet-400" />,
      title: 'Innovation',
      description: 'We constantly explore new techniques and technologies to push creative boundaries.'
    }
  ];

  return (
    <div className="pt-32"> {/* Padding top to account for navbar */}
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-12 bg-black">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
              About DSB Studio
            </h1>
            <p className="text-lg md:text-xl text-violet-100/80 mb-8 max-w-2xl mx-auto">
              We're a team of passionate editors dedicated to transforming ordinary footage into extraordinary stories.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-lg text-violet-100/70 mb-6">
                Founded in 2018 by Alex Morgan, PixelPerfect began with a simple mission: to make professional-quality video editing accessible to creators and businesses of all sizes.
              </p>
              <p className="text-lg text-violet-100/70 mb-6">
                After years in Hollywood's editing suites, Alex recognized that the same techniques that made blockbuster films compelling could be applied to business videos, social media content, and independent projects.
              </p>
              <p className="text-lg text-violet-100/70">
                Today, our team of specialized editors, motion graphics artists, and sound designers has helped hundreds of clients transform their raw footage into powerful visual stories that engage audiences and drive results.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-violet-800/20 rounded-2xl blur-xl opacity-70 -z-10"></div>
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden border border-violet-700/30 shadow-xl">
                <img 
                  src={AboutImg}
                  alt="Our team collaborating" 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-b from-violet-950/10 to-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="card hover:bg-neutral-800/30">
              <h2 className="heading-md mb-6">Our Vision</h2>
              <p className="text-lg text-neutral-100/70 mb-6">
                To revolutionize video content by making cinematic editing techniques accessible to all creators, enabling stories that captivate and inspire audiences worldwide.
              </p>
              <p className="text-lg text-neutral-100/70">
                We envision a world where every video, regardless of budget, can achieve its full potential through expert editing that elevates the viewer experience.
              </p>
            </div>
            
            {/* Mission */}
            <div className="card hover:bg-neutral-800/30">
              <h2 className="heading-md mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-100/70 mb-6">
                To provide exceptional video editing services that transform ordinary footage into compelling visual stories, helping our clients achieve their communication goals and stand out in a crowded digital landscape.
              </p>
              <p className="text-lg text-neutral-100/70">
                We accomplish this through technical excellence, creative innovation, and a deep understanding of visual storytelling principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">Our Core Values</h2>
            <p className="text-lg text-violet-100/70">
              The principles that guide our work and relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card hover:bg-neutral-800/30 hover:-translate-y-2 text-center">
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-violet-100/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-violet-950/10 to-transparent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">Meet Our Team</h2>
            <p className="text-lg text-violet-100/70">
              The talented professionals behind our exceptional editing work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card hover:bg-neutral-800/30 hover:-translate-y-2 overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden mb-6 -mx-6 -mt-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-violet-400 mb-3">{member.role}</p>
                <p className="text-neutral-100/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-violet-100/70 mb-8">
              Let's collaborate to bring your video vision to life with our expert editing services.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch <FiArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;