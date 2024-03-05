import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Bye: React.FC = () => {
  const imagePath = `${process.env.PUBLIC_URL}/images/bye/bye.svg`;

  return (
    <Container className="d-flex justify-content-center align-items-center section" style={{ minHeight: '100vh' }}>
      <motion.img
        src={imagePath}
        alt="Customer Stories"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ maxWidth: '100%', height: 'auto' }}
        className="img-fluid"
      />
    </Container>
  );
};

export default Bye;
