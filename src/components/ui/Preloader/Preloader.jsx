import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      // Get all images and videos from the document
      const images = Array.from(document.images);
      const videos = Array.from(document.getElementsByTagName('video'));
      const totalItems = images.length + videos.length;
      setTotalAssets(totalItems);

      let loaded = 0;

      const incrementProgress = () => {
        loaded++;
        const percentage = Math.round((loaded / totalItems) * 100);
        setProgress(percentage);
        setLoadedAssets(loaded);

        if (loaded === totalItems) {
          // Add a small delay before completing to ensure smooth transition
          setTimeout(() => {
            onComplete();
          }, 500);
        }
      };

      // Load all images
      images.forEach(img => {
        if (img.complete) {
          incrementProgress();
        } else {
          img.addEventListener('load', incrementProgress);
          img.addEventListener('error', incrementProgress);
        }
      });

      // Load all videos
      videos.forEach(video => {
        if (video.readyState >= 4) {
          incrementProgress();
        } else {
          video.addEventListener('loadeddata', incrementProgress);
          video.addEventListener('error', incrementProgress);
        }
      });
    };

    loadAssets();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-64 flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <img 
            src="/src/assets/images/dsblogo.png" 
            alt="DSB Logo" 
            className="w-16 h-16"
          />
        </div>
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-violet-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-violet-400 text-sm">
          Loading assets... {loadedAssets}/{totalAssets}
        </div>
      </div>
    </div>
  );
};

export default Preloader;