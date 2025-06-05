import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from '../types';

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/setup.jpg',
    caption: 'My Current Desk Setup',
    alt: 'A clean desk setup with dual monitors'
  },
  {
    id: 2,
    src: '/images/gallery/keyboard.jpg',
    caption: 'Custom Mechanical Keyboard Build',
    alt: 'Custom mechanical keyboard with RGB lighting'
  },
  // Add more images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const previousIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[previousIndex]);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-gray-100"
        >
          Gallery
        </motion.h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg ${
              viewMode === 'grid'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('carousel')}
            className={`px-4 py-2 rounded-lg ${
              viewMode === 'carousel'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Carousel
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {galleryImages.map(image => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                />
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {image.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <img
            src={selectedImage?.src || galleryImages[0].src}
            alt={selectedImage?.alt || galleryImages[0].alt}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
          >
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-4 text-white text-center">{selectedImage.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 