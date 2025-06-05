import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 1 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn; 