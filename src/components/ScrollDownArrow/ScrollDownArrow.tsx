import React, { RefObject } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface ScrollDownArrowProps {
  targetRef: RefObject<HTMLElement>; // Accept a ref object pointing to the target element
}

const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({ targetRef }) => {
  const handleScroll = (): void => {
    if (targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-3 section arrow">
      <motion.div
        animate={{ y: [0, 10, 0] }} // Moves the arrow down and then back to its original position
        transition={{
          duration: 1, // Duration of one cycle
          ease: "easeInOut",
          repeat: Infinity, // Repeat the animation indefinitely
          repeatType: "loop"
        }}
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          onClick={handleScroll}
          className="cursor-pointer icons"
          style={{ fontSize: '24px' }}
        />
      </motion.div>
    </div>
  );
};

export default ScrollDownArrow;
