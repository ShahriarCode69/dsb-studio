import { Link } from 'react-router-dom';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import HeroVideo from '/videos/hero_video.mp4'

const Hero = () => {
  return (
    <section className="relative top-[-4rem] left-0 overflow-hidden py-20 md:py-32 bg-gradient-to-b from-slate-950/20 to-transparent">



      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 mt-20">
          <h1 className='heading-xl'>Transform Your Content into Masterpieces</h1>
          <p className="description mx-auto mb-12">
            Welcome to DSB Studios. Save time, boost engagement, and grow your audience with custom video editing tailored specifically for creators like you.
          </p>
          <Link to="/contact" className="bg-violet-800/20 border border-violet-600 text-white hover:bg-violet-600 px-6 py-3 rounded-full text-base font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
            Get Started
          </Link>
        </div>

        <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden border-2 border-violet-300/20">
          <div className="aspect-w-16 aspect-h-8">
            <CustomVideoPlayer
              url={HeroVideo}
              className="w-full h-full"
              autoPlay
              muted
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero