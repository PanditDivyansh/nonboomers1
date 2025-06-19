// components/AshFade.jsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const ashVariants = {
  initial: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    y: 0,
    rotate: 0,
  },
  ash: {
    opacity: 0,
    filter: 'blur(4px)',
    scale: 0.9,
    y: -40,
    rotate: -10,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const AshFade = ({ children, trigger = true, className = '' }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    if (trigger) {
      controls.start('ash');
    }
  }, [trigger]);

  return (
    <motion.div
      className={className}
      initial="initial"
      animate={controls}
      variants={ashVariants}
    >
      {children}
    </motion.div>
  );
};

export default AshFade;
