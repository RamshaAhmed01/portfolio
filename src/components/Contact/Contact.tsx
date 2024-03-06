import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileButton } from '@fortawesome/pro-light-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import { motion } from 'framer-motion';

  // Splitting the heading into letters for animation
  const heading = "Contact";
  const headingLetters = Array.from(heading);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };// Ensure your CSS is set up to handle the layout as intended

const Contact: React.FC = () => {
  return (
    <Container className="section">
        <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h1"
        >
        {headingLetters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <h2>Say Hello: Let's Chat and Connect!</h2>
      <h3 className="contact-text">I'm currently exploring new adventures and am super keen on roles that let me weave my magic 
        from Spain. With a solid foundation in my field and a huge love for shaking things up, 
        I'm all about adding my spark to a team that celebrates big ideas and innovative thinking. 
        No matter if you're across the globe or just a stone's throw away, I'm excited to link up, 
        create, and add some zest to amazing projects all from the sunny and lively vibes of Spain. 
        Let's make something awesome together!</h3>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icons-stack"/>
            <span>Email: <a href="mailto:replytoigor@gmail.com" aria-label="send an email">replytoigor@gmail.com</a></span>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <div className="contact-item">
            <FontAwesomeIcon icon={faMobileButton} className="icons-stack"/>
            <span>Phone: <a href="tel:+34683338843" aria-label="call me">+34 683 338 843</a></span>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <div className="contact-item">
            <FontAwesomeIcon icon={faLinkedinIn} className="icons-stack"/>
            <span>LinkedIn: <a href="https://www.linkedin.com/in/igor-dinuzzi-von-ach-100286ab/" target="_blank" rel="noopener noreferrer" aria-label="go to linkedin">/igor-dinuzzi</a></span>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <div className="contact-item">
            <FontAwesomeIcon icon={faGithub} className="icons-stack"/>
            <span>GitHub: <a href="https://github.com/igordinuzzi" target="_blank" rel="noopener noreferrer" aria-label="go to github">/igordinuzzi</a></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
