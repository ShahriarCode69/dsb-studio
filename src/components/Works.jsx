import { useState } from "react";
import CustomVideoPlayer from "./CustomVideoPlayer";
import WorkVideoSample from "/videos/hero_video.mp4"
import WorkImgSample from "/images/hero_thumb.jpeg"

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(4);
  
  // Portfolio data with categories
  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Brand Video',
      category: 'Corporate',
      videoUrl: WorkVideoSample,
      thumbnail: WorkImgSample
    },
    {
      id: 2,
      title: 'Gaming Trailer',
      category: 'Corporate',
      videoUrl: WorkVideoSample,
      thumbnail: WorkImgSample
    },
    {
      id: 3,
      title: 'Travel Documentary',
      category: 'Corporate',
      videoUrl: WorkVideoSample,
      thumbnail: WorkImgSample
    },
    {
      id: 4,
      title: 'Music Video Production',
      category: 'Corporate',
      videoUrl: WorkVideoSample,
      thumbnail: WorkImgSample
    },
    {
      id: 5,
      title: 'Corporate Training',
      category: 'Corporate',
      videoUrl: WorkVideoSample,
      thumbnail: WorkImgSample
    },
    {
      id: 6,
      title: 'Gaming Review',
      category: 'Gaming',
      videoUrl: WorkVideoSample,
      thumbnail: WorkImgSample
    }
  ];
  
  // Filter portfolio items based on active category
  const filteredPortfolioItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Reset visible items when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleItems(4);
  };

  // Handle show more click
  const handleShowMore = () => {
    setVisibleItems(prevCount => prevCount + 4);
  };

  // Handle show less click
  const handleShowLess = () => {
    setVisibleItems(4);
  };

  return (
    <section id="work" className="py-20 bg-black">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">Our Work</h2>
          <p className="text-lg text-violet-100/70 mb-8">
            Browse our portfolio of stunning video edits across different industries and styles.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              className={`px-5 py-2 rounded-full ${activeCategory === 'All' ? 'bg-violet-700' : 'bg-violet-900/50'} text-white hover:bg-violet-600 transition-colors`}
              onClick={() => handleCategoryChange('All')}
            >
              All Projects
            </button>
            <button 
              className={`px-5 py-2 rounded-full ${activeCategory === 'Corporate' ? 'bg-violet-700' : 'bg-violet-900/50'} text-white hover:bg-violet-600 transition-colors`}
              onClick={() => handleCategoryChange('Corporate')}
            >
              Corporate
            </button>
            <button 
              className={`px-5 py-2 rounded-full ${activeCategory === 'Gaming' ? 'bg-violet-700' : 'bg-violet-900/50'} text-white hover:bg-violet-600 transition-colors`}
              onClick={() => handleCategoryChange('Gaming')}
            >
              Gaming
            </button>
            <button 
              className={`px-5 py-2 rounded-full ${activeCategory === 'Travel' ? 'bg-violet-700' : 'bg-violet-900/50'} text-white hover:bg-violet-600 transition-colors`}
              onClick={() => handleCategoryChange('Travel')}
            >
              Travel
            </button>
            <button 
              className={`px-5 py-2 rounded-full ${activeCategory === 'Music' ? 'bg-violet-700' : 'bg-violet-900/50'} text-white hover:bg-violet-600 transition-colors`}
              onClick={() => handleCategoryChange('Music')}
            >
              Music
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPortfolioItems.length === 0 ? (
            <div className="col-span-2 text-center py-20">
              <p className="text-xl text-violet-100/70">
                No videos to show, come back later!
              </p>
            </div>
          ) : (
            filteredPortfolioItems.slice(0, visibleItems).map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-w-16 aspect-h-9">
                  <CustomVideoPlayer 
                    url={item.videoUrl} 
                    thumbnail={item.thumbnail}
                    className="rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-0 left-0 p-4 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-violet-900/80 p-3 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-violet-200">{item.category}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Show More/Less Buttons */}
        {filteredPortfolioItems.length > 4 && (
          <div className="text-center mt-8 space-x-4">
            {visibleItems < filteredPortfolioItems.length && (
              <button
                onClick={handleShowMore}
                className="btn-primary"
              >
                Show More
              </button>
            )}
            {visibleItems > 4 && (
              <button
                onClick={handleShowLess}
                className="btn-primary"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Works