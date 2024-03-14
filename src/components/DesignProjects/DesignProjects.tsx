import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Project } from '../../models/Design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const projectsData: Project[] = [
    {
      id: 1,
      title: 'Amadeus',
      subtitle: 'White Paper',
      tags: ['BROCHURE DESIGN', 'ILLUSTRATIONS'],
      imageUrl: `${process.env.PUBLIC_URL}/images/design/amadeus.jpg`,
      alt: 'Amadeus white paper', 
      repoUrl: 'https://github.com/igordinuzzi/design-amadeus/blob/main/README.md',
    },
    {
      id: 2,
      title: 'Designlab',
      subtitle: 'Instructional Videos',
      tags: ['MOTION GRAPHICS'],
      imageUrl: `${process.env.PUBLIC_URL}/images/design/designlab.jpg`,
      alt: 'Designlab Instructional videos', 
      repoUrl: 'https://github.com/igordinuzzi/design-designlab/blob/main/README.md',
    },
    {
      id: 3,
      title: 'Facebook',
      subtitle:'White Paper',
      tags: ['BROCHURE DESIGN', 'ILLUSTRATIONS'],
      imageUrl: `${process.env.PUBLIC_URL}/images/design/facebook.jpg`,
      alt: 'Facebook white paper', 
      repoUrl: 'https://github.com/igordinuzzi/design-facebook/blob/main/README.md',
    },
    {
      id: 4,
      title: 'Genomelink',
      subtitle: 'Social media',
      tags: ['SOCIAL', 'ILLUSTRATIONS'],
      imageUrl: `${process.env.PUBLIC_URL}/images/design/genomelink.jpg`,
      alt: 'Genomelink social media', 
      repoUrl: 'https://github.com/igordinuzzi/design-genomelink/blob/main/README.md',
    },
    {
      id: 5,
      title: "L'Oréal",
      subtitle: 'Blog Website',
      tags: ['UX', 'UI', 'BRANDING'],
      imageUrl: `${process.env.PUBLIC_URL}/images/design/loreal.jpg`,
      alt: 'Blog website', 
      repoUrl: 'https://github.com/igordinuzzi/design-loreal/blob/main/README.md',
    },
    {
      id: 6,
      title: 'Ohypnosis',
      subtitle: 'App',
      tags: ['UX', 'UI', 'BRANDING'],
      imageUrl: `${process.env.PUBLIC_URL}/images/design/ohypnosis.jpg`,
      alt: 'Ohypnosis branding and app', 
      repoUrl: 'https://github.com/igordinuzzi/design-ohypnosis/blob/main/README.md',
    },
    {
      id: 7,
      title: 'Omnipillow',
      subtitle: 'E-commerce',
      tags: ['UX', 'UI'],
      imageUrl: `${process.env.PUBLIC_URL}/images/design/omnipillow.jpg`,
      alt: 'Omnipillow e-commerce', 
      repoUrl: 'https://github.com/igordinuzzi/design-omnipillow/blob/main/README.md',
    },
    {
      id: 8,
      title: 'Savvi Financial',
      subtitle:'Branding',
      tags: ['BRANDING'],
      imageUrl: `${process.env.PUBLIC_URL}/images/design/savvi.jpg`,
      alt: 'Savvi financial', 
      repoUrl: 'https://github.com/igordinuzzi/design-savvi/blob/main/README.md',
    },
  ];
    

  const DesignProjects: React.FC = () => {
    const [filter, setFilter] = useState<string | null>(null);
    const tags = ["UX", "UI", "BRANDING", "SOCIAL", "BROCHURE DESIGN", "MOTION GRAPHICS", "ILLUSTRATIONS"];

    const filteredProjects = filter ? projectsData.filter(project => project.tags.includes(filter)) : projectsData;

    const triggerConfetti = () => {
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };
    
  // Splitting the heading into letters for animation
  const heading = "Design Projects";
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
      <h2>Showcasing My Journey in Design</h2>
        <div className="filters smaller">
          {tags.map(tag => (
            <Button key={tag} size="sm" className="m-1" onClick={() => setFilter(tag)}>
              {tag}
            </Button>
          ))}
          <Button size="sm" className="m-1" onClick={() => setFilter(null)}>
            <FontAwesomeIcon icon={faTrash} className="icon-trash"/>Clear Filter</Button>
        </div>
        <Row className="gy-4">
          {filteredProjects.map((project, index) => {
            // Determine the number of cards per row based on the index
            let colSize = 6; // Default for the first 4 cards (2 per row for the first two rows)
            if (index >= 4) {
              colSize = 3; // Changes to 4 cards per row for indexes 4 and above
            }
  
            return (
              <Col key={project.id} xs={12} md={colSize} lg={colSize}>
                <Card className="h-100 card-custom">
                <Card.Img variant="top" src={project.imageUrl} className="card-img-custom" />
                  <Card.Body>
                    <Card.Title as="h2">{project.title}</Card.Title>
                    <Card.Title as="h4">{project.subtitle}</Card.Title>
                    <div className="tags mb-2">{project.tags.join(', ')}</div>
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
                <FontAwesomeIcon icon={faArrowRight} className="icon-in-btn" /> See more
                </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  };
  
  export default DesignProjects;