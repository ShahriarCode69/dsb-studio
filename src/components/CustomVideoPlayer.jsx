import { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize, FiMinimize, FiRefreshCw } from 'react-icons/fi';
import heroThumb from '/images/hero_thumb.jpeg';

const CustomVideoPlayer = ({ url, thumbnail, className = '', autoPlay = false, muted = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const activityTimerRef = useRef(null);
  const containerRef = useRef(null);

  // Format time in MM:SS format
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle play/pause
  const handlePlayPause = () => {
    if (showThumbnail) {
      setShowThumbnail(false);
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setIsActive(true); // Show controls when paused
      } else {
        videoRef.current.play().catch(error => {
          console.error('Error playing video:', error);
          setVideoError(true);
        });
        setIsPlaying(true);
        setIsActive(true); // Show controls briefly when starting
        
        // Start timer to hide controls after 2 seconds
        if (activityTimerRef.current) {
          clearTimeout(activityTimerRef.current);
        }
        activityTimerRef.current = setTimeout(() => {
          setIsActive(false);
        }, 2000);
      }
    }
  };

  // Handle mute toggle
  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle thumbnail click
  const handleThumbnailClick = () => {
    setShowThumbnail(false);
    setIsActive(true);
    setVideoError(false); // Reset error state when thumbnail is clicked
    
    // Small delay to ensure video is ready
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error('Error playing video:', error);
          setVideoError(true);
        });
        setIsPlaying(true);
        
        // Start timer to hide controls after 2 seconds
        if (activityTimerRef.current) {
          clearTimeout(activityTimerRef.current);
        }
        activityTimerRef.current = setTimeout(() => {
          setIsActive(false);
        }, 2000);
      }
    }, 100);
  };

  // Update progress and current time
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress(video.currentTime / video.duration);
        setCurrentTime(video.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleVideoEnded = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      console.error('Video error occurred');
      setVideoError(true);
    };

    // Add event listeners
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleVideoEnded);
    video.addEventListener('error', handleError);

    // Clean up
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleVideoEnded);
      video.removeEventListener('error', handleError);
    };
  }, [videoRef.current]);

  // Reset error state when URL changes
  useEffect(() => {
    setVideoError(false);
  }, [url]);

  // Handle seeking
  const handleSeekChange = (e) => {
    if (!videoRef.current || !progressRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * videoRef.current.duration;
    
    videoRef.current.currentTime = seekTime;
    setProgress(pos);
  };

  // Handle fullscreen
  const handleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (document.fullscreenElement) {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      // Enter fullscreen
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
    }
  };
  
  // Handle user activity
  const handleUserActivity = () => {
    setIsActive(true);
    
    // Clear any existing timer
    if (activityTimerRef.current) {
      clearTimeout(activityTimerRef.current);
    }
    
    // Only set timer to hide controls if video is playing
    if (isPlaying) {
      activityTimerRef.current = setTimeout(() => {
        setIsActive(false);
      }, 2000);
    }
  };
  
  // Handle fullscreen mode activity
  const handleFullscreenActivity = () => {
    setIsActive(true);
    
    if (activityTimerRef.current) {
      clearTimeout(activityTimerRef.current);
    }
    
    if (isPlaying) {
      activityTimerRef.current = setTimeout(() => {
        setIsActive(false);
      }, 2000);
    }
  };
  
  // Handle mouse leave
  const handleMouseLeave = () => {
    setHovering(false);
    if (isPlaying) {
      setIsActive(false);
      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current);
      }
    }
  };
  
  // Clean up activity timer on unmount
  useEffect(() => {
    // Add fullscreen change event listeners
    const handleFullscreenChange = () => {
      const fullscreen = !!document.fullscreenElement;
      setIsFullscreen(fullscreen);
      
      if (!fullscreen) {
        setIsActive(true);
        if (activityTimerRef.current) {
          clearTimeout(activityTimerRef.current);
        }
      }
    };
    
    const handleFullscreenMouseMove = (e) => {
      if (isFullscreen) {
        handleFullscreenActivity();
      }
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('mousemove', handleFullscreenMouseMove);
    
    return () => {
      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current);
      }
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('mousemove', handleFullscreenMouseMove);
    };
  }, [isPlaying, isFullscreen]);

  // Add initial autoplay handling
  useEffect(() => {
    if (autoPlay && videoRef.current) {
      setShowThumbnail(false); // Hide thumbnail immediately
      setIsMuted(true); // Ensure video is muted for autoplay
      
      // Small delay to ensure video is ready
      setTimeout(() => {
        videoRef.current.play().catch(error => {
          console.error('Error autoplaying video:', error);
          setVideoError(true);
        });
        setIsPlaying(true);
      }, 100);
    }
  }, [autoPlay]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleUserActivity}
      onClick={handleUserActivity}
    >
      {/* Only show thumbnail if not autoplay and showThumbnail is true */}
      {showThumbnail && !autoPlay && (
        <div 
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handleThumbnailClick}
        >
          <img 
            src={thumbnail || heroThumb} 
            alt="Video thumbnail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-violet-600/80 text-white hover:bg-violet-500 transition-colors">
              <FiPlay className="text-3xl ml-1" />
            </div>
          </div>
        </div>
      )}

      {/* HTML5 Video Player (hidden until thumbnail is clicked) */}
      <div className={`${showThumbnail && !autoPlay ? 'invisible' : 'visible'} w-full h-full`}>
        {videoError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-4 text-center">
            <p className="mb-4">Video could not be loaded.</p>
            <button 
              onClick={() => setVideoError(false)}
              className="flex items-center gap-2 px-4 py-2 bg-violet-600 rounded-full hover:bg-violet-500 transition-colors"
            >
              <FiRefreshCw /> Retry
            </button>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={url}
            className="w-full h-full object-cover bg-black"
            playsInline
            muted={muted || isMuted}
            preload="auto"
            controls={false}
            onLoadedMetadata={() => setDuration(videoRef.current.duration)}
            onError={(e) => {
              console.error('Video error:', e);
              setVideoError(true);
            }}
          />
        )}
      </div>

      {/* Custom controls (only visible when thumbnail is not showing) */}
      {!showThumbnail && (
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20 transition-opacity duration-300 ${(isActive || !isPlaying) ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Progress bar */}
          <div 
            className="w-full h-1 bg-gray-700 rounded-full mb-3 cursor-pointer"
            onClick={handleSeekChange}
            ref={progressRef}
          >
            <div 
              className="h-full bg-violet-500 rounded-full relative"
              style={{ width: `${progress * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-violet-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Controls row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePlayPause}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-600/80 text-white hover:bg-violet-500 transition-colors"
              >
                {isPlaying ? <FiPause /> : <FiPlay className="ml-0.5" />}
              </button>
              
              <button
                onClick={handleMuteToggle}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-600/60 text-white hover:bg-violet-500 transition-colors"
              >
                {isMuted ? <FiVolumeX /> : <FiVolume2 />}
              </button>
              
              <div className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            
            <button
              onClick={handleFullscreen}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-600/60 text-white hover:bg-violet-500 transition-colors"
            >
              {isFullscreen ? <FiMinimize /> : <FiMaximize />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;