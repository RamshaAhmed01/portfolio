import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ScrollDown = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-3 section">
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
          className="cursor-pointer icons"
          style={{ fontSize: '24px' }}
        />
      </motion.div>
    </div>
  );
};

export default ScrollDown;
