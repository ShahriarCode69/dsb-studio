import Hero from '../components/Hero';
import Disadvantages from '../components/Disadvantages';
import TwoColumn from '../components/TwoColumn';
import AnimatedWorkingProcess from '../components/AnimatedWorkingProcess';
import Works from '../components/Works';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';


const Home = () => {
  

  return (
    <div className="pt-16"> 
      <Hero/>
      <Disadvantages/>
      <TwoColumn/>
      <Works/>
      <AnimatedWorkingProcess />
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/10">
        <Testimonials />
      </section>
      <WhyChooseUs/>
    </div>
  );
};

export default Home;