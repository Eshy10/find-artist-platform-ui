// ScrollAnimation.js
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
   children: React.ReactNode | React.ReactNode[];
}

const ScrollAnimation = ({ children }: ScrollAnimationProps) => {
   const controls = useAnimation();
   const [ref, inView] = useInView();

   const variants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
   };

   useEffect(() => {
      if (inView) {
         controls.start('visible');
      } else {
         controls.start('hidden');
      }
   }, [controls, inView]);

   return (
      <motion.div
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={variants}
         transition={{ duration: 0.5 }}
      >
         {children}
      </motion.div>
   );
};

export default ScrollAnimation;
