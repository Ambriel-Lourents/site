export const cardVariants = {
  hidden: {
    x: -300,
    y: 500,
    rotate: 35,
    opacity: 0,
    scale: 0.7
  },
  visible: (index: number) => ({
    x: 0,
    y: 0,
    rotate: index % 2 === 0 ? -6 : 4,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.2,
      ease: [0.23, 1.12, 0.42, 1.05],
      opacity: { duration: 0.2, delay: index * 0.2 },
      rotate: { duration: 1.2, delay: index * 0.2, ease: [0.23, 1.12, 0.42, 1.05] },
      scale: { duration: 0.8, delay: index * 0.2 }
    }
  })
};

export const sectionVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.4
    }
  }
};

export const titleVariants = {
  hover: {
    x: 4,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.2
    }
  }
};

export const containerVariants = {
  hover: {
    opacity: 0.5,
    transition: {
      duration: 0.2
    }
  }
}; 