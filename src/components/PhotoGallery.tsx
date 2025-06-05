import { motion } from 'framer-motion';
import PhotoCard from './PhotoCard';
import { photos } from '../data/photos';
import { cardVariants } from '../utils/animations';

interface PhotoGalleryProps {
  isMobile: boolean;
}

export const PhotoGallery = ({ isMobile }: PhotoGalleryProps) => {
  const baseZIndex = 10;
  const getZIndex = (index: number) => baseZIndex + index;
  const displayPhotos = isMobile ? photos.slice(0, 2) : photos;

  return (
    <motion.div
      className="relative h-[19rem] overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayPhotos.map((photo, index) => (
        <motion.div
          key={index}
          className={`absolute ${photo.style}`}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          style={{ zIndex: getZIndex(index) }}
          drag={!isMobile}
          dragConstraints={{
            top: -50,
            left: -750,
            right: 750,
            bottom: 600
          }}
          dragElastic={0.1}
          whileHover={!isMobile ? { scale: 1.02 } : undefined}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
        >
          <PhotoCard {...photo} isMobile={isMobile} />
        </motion.div>
      ))}
    </motion.div>
  );
}; 