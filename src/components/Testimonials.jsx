import { AnimatedTestimonials } from './ui/animated-testimonials';

const Testimonials = ({
  title = "What Our Clients Say",
  subtitle = "Experience the future of storytelling through the eyes of those who've transformed their narratives with us."
}) => {

 
  return (
    <section className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg">
            {title}
          </h2>
          <p className="description max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>
        <AnimatedTestimonials/>
      </div>
    </section>
  );
};

export default Testimonials;