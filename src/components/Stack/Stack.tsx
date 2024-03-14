import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faBootstrap, faHtml5, faCss3Alt, faJs, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faServer } from '@fortawesome/free-solid-svg-icons';
import { faRss, faChartNetwork, faSidebarFlip, faCode, faFrame, faMobile, faUser, faRulerHorizontal } from '@fortawesome/pro-light-svg-icons';
import { motion } from 'framer-motion';

const stackItems = [
  { name: 'REACT', category: 'LIBRARIES', icon: faReact },
  { name: 'MATERIAL UI', category: 'FRAMEWORK', icon: faSidebarFlip },
  { name: 'BOOTSTRAP', category: 'FRAMEWORK', icon: faBootstrap },
  { name: 'REACT BOOTSTRAP', category: 'FRAMEWORK', icon: faBootstrap },
  { name: 'TAILWIND', category: 'FRAMEWORK', icon: faFrame },
  { name: 'JSON', category: 'LIGHTWEIGHT', icon: faFileAlt },
  { name: 'JAVASCRIPT', category: 'LANGUAGES', icon: faJs },
  { name: 'TYPESCRIPT', category: 'LANGUAGES', icon: faCode },
  { name: 'CSS', category: 'STYLESHEET', icon: faCss3Alt },
  { name: 'HTML', category: 'MARKUP', icon: faHtml5 },
  { name: 'CONTENTFUL', category: 'CMS', icon: faServer },
  { name: 'API', category: 'GENERIC SKILLS', icon: faChartNetwork },
  { name: 'RSS', category: 'GENERIC SKILLS', icon: faRss },
  { name: 'GIT', category: 'GENERIC SKILLS', icon: faGit },
  { name: 'GITHUB', category: 'GENERIC SKILLS', icon: faGithub },
  { name: 'UX', category: 'DESIGN', icon: faUser },
  { name: 'UI', category: 'DESIGN', icon: faMobile },
  { name: 'GRAPHIC & VISUAL', category: 'DESIGN', icon: faRulerHorizontal },
];

 // Splitting the heading into letters for animation
 const heading = "Stack";
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
 };

const Stack: React.FC = () => {
  return (
    <Container className="my-5 section">
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
      <h2>My Toolbox: The Tech That Powers My Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {stackItems.map((item, index) => (
          <Col key={index}>
            <motion.div
              className="border p-3 stack"
              style={{ height: '100%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <FontAwesomeIcon icon={item.icon} size="3x" className="mb-3" />
              <h3>{item.name}</h3>
              <p>{item.category}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Stack;
