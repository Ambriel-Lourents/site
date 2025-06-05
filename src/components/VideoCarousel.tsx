import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

interface VideoCarouselProps {
  videos: Video[];
  visibleCount?: number;
}

export const VideoCarousel = ({ videos, visibleCount = 4 }: VideoCarouselProps) => {
  const { currentTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const videoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const width = videoRef.current.getBoundingClientRect().width;
      setItemWidth(width + 10); // Set the width in state
    }
  }, [videos]);

  const nextVideo = () => {
    if (currentIndex < videos.length - visibleCount) {
      setCurrentIndex(Math.min(currentIndex + 1, videos.length - 1));
    }
  };

  const prevVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(currentIndex - 1, 0));
    }
  };

  const getTransformX = () => {
    return -currentIndex * itemWidth;
  };

  return (
    <div className="relative hidden sm:block">
      <div className="overflow-hidden px-0 relative">
        {/* Left fade gradient - removed transition from parent div */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-16 z-10 ${
            currentIndex > 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(to right, ${currentTheme.bg.primary}, transparent)`,
            transition: 'opacity 0.3s ease' // Moved transition here
          }}
        />
        {/* Right fade gradient - removed transition from parent div */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-16 z-10 ${
            currentIndex < videos.length - visibleCount ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(to left, ${currentTheme.bg.primary}, transparent)`,
            transition: 'opacity 0.3s ease' // Moved transition here
          }}
        />

        <motion.div
          className="flex gap-3"
          animate={{
            x: getTransformX(),
          }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
        >
          {videos.map((video, index) => (
            <a
              ref={index === 0 ? videoRef : null}
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none w-[calc(25%-12px)] aspect-video rounded-lg overflow-hidden transition-all duration-300 relative"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-xs font-medium px-2 text-center">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      {videos.length > visibleCount && (
        <>
          {currentIndex > 0 && (
            <button
              onClick={prevVideo}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-20"
              aria-label="Previous video"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {currentIndex < videos.length - visibleCount && (
            <button
              onClick={nextVideo}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-20"
              aria-label="Next video"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default VideoCarousel; 