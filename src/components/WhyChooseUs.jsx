import { FiCheck } from 'react-icons/fi';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FiCheck className="text-3xl text-violet-400" />,
      title: 'Time Saver',
      description: 'We handle the entire editing process efficiently, delivering high-quality videos fast so you can focus on your core business.'
    },
    {
      icon: <FiCheck className="text-3xl text-violet-400" />,
      title: 'Unique Customization',
      description: 'Every project is tailored to your brand’s voice, style, and goals—no templates, just one-of-a-kind videos that stand out.'
    },
    {
      icon: <FiCheck className="text-3xl text-violet-400" />,
      title: 'Expert Editing',
      description: 'Our skilled team uses advanced tools, precise cuts, and creative techniques to produce videos that captivate and inspire your audience.'
    },
    {
      icon: <FiCheck className="text-3xl text-violet-400" />,
      title: 'Seamless Communication',
      description: 'We keep you updated at every stage, ensuring your feedback is heard and your vision is brought to life smoothly.'
    }
  ];

  const stats = [
    { value: '250+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Industry Awards' },
    { value: '40%', label: 'Average Conversion Increase' }
  ];
  return (
    <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Why Choose PixelPerfect</h2>
              <p className="text-lg text-violet-100/70 mb-8">
                We combine technical expertise with creative vision to deliver edits that exceed expectations.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-violet-100/70">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card text-center hover:bg-neutral-800/30 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-violet-400 mb-2">{stat.value}</div>
                  <p className="text-violet-100/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUs