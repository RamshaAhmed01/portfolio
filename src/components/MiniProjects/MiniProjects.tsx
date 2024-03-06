import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/pro-light-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Project } from '../../models/Project';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const miniProjectsData: Project[] = [
    {
        id: 1,
        title: 'Games',
        subtitle: 'Arcade Games Web App',
        description: 'I crafted a collection of games, including Minesweeper, Stacker, and Ducker, each offering unique challenges and catering to diverse interests, aiming to provide an entertaining platform for players of all skill levels.',
        tags: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
        imageUrl: `${process.env.PUBLIC_URL}/images/mini-projects/games_2.jpg`,
        alt: 'Game web app',
        liveUrl: 'https://igordinuzzi.github.io/games/',
        repoUrl: 'https://github.com/igordinuzzi/games',
      },
      {
        id: 2,
        title: 'Word Whiz',
        subtitle: 'Spelling Game Web App',
        description: 'Word Whiz is a web-based game that combines learning and fun, allowing players to improve their English spelling skills across various difficulty levels while racing against time.',
        tags: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
        imageUrl: `${process.env.PUBLIC_URL}/images/mini-projects/word.jpg`,
        alt: 'Spelling game web app',
        liveUrl: 'https://igordinuzzi.github.io/Word-Whiz/',
        repoUrl: 'https://github.com/igordinuzzi/Word-Whiz',
      },
      {
        id: 3,
        title: 'Calculator',
        subtitle: 'Scientific Calculator Web App',
        description: 'Basic Scientific Calculator, a user-friendly online calculator for performing arithmetic operations, square roots, exponentiation, and memory functions. It is ideal for quick calculations and educational purposes.',
        tags: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],
        imageUrl: `${process.env.PUBLIC_URL}/images/mini-projects/calculator.jpg`,
        alt: 'calculator web app',
        liveUrl: 'https://igordinuzzi.github.io/calculator/',
        repoUrl: 'https://github.com/igordinuzzi/calculator',
      },
      {
        id: 4,
        title: 'Today weather',
        subtitle: 'Weather Web App',
        description: 'Today Weather Wonderland is a web application that displays real-time weather information for any city. It offers features like toggling between dark and light themes, and switching temperature units between Celsius and Fahrenheit.',
        tags: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'API'],
        imageUrl: `${process.env.PUBLIC_URL}/images/mini-projects/weather.jpg`,
        alt: 'Weather web app',
        liveUrl: 'https://igordinuzzi.github.io/weatherapp/',
        repoUrl: 'https://github.com/igordinuzzi/weatherapp',
      },      
].slice(0, 4); // Optionally, if you're still selecting the first 4 for demonstration

const MiniProjects: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

// Splitting the heading into letters for animation
const heading = "Mini Projects";
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
      <h2>Learning Through Code: Mini Projects as Gateways to Mastering JavaScript</h2>
      <Row className="gy-4">
        {miniProjectsData.map(project => (
          <Col key={project.id} xs={12} md={6} lg={3}>
            <Card className="h-100 card-custom">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={project.imageUrl} className="card-img-custom" />
              </a>
              <Card.Body>
                <Card.Title as="h2">{project.title}</Card.Title>
                <Card.Title as="h4">{project.subtitle}</Card.Title>
                <div className="tags mb-2">{project.tags.join(', ')}</div>
                <Card.Text>{project.description}</Card.Text>
                <Button 
                  className="secondary-btn" 
                  href={project.liveUrl} 
                  aria-label={`View ${project.title} live site`}
                  target="_blank" 
                  onClick={(e) => {
                    e.preventDefault(); // Prevent link navigation
                    triggerConfetti();
                    window.open(project.liveUrl, '_blank'); // Manually open the link in a new tab
                  }}>
                  <FontAwesomeIcon icon={faPlay} className="icon-in-btn" /> Live
                </Button>
                <Button 
                 className="primary-btn" 
                 href={project.repoUrl}
                 aria-label={`View ${project.title} repository`} 
                 target="_blank" 
                 onClick={(e) => {
                 e.preventDefault(); // Prevent link navigation
                 triggerConfetti();
                 window.open(project.repoUrl, '_blank'); // Manually open the link in a new tab
                 }}>
                <FontAwesomeIcon icon={faGithub} className="icon-in-btn" /> Repo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MiniProjects;