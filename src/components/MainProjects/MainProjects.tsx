import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Project } from '../../models/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTrash } from '@fortawesome/pro-light-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const projectsData: Project[] = [
    {
      id: 1,
      title: 'Fietsen',
      subtitle: 'E-commerce Site',
      description: 'This React-based platform stands out as a unique second-hand Dutch bike ecommerce site, combining easy product discovery, detailed insights, and smooth shopping in an appealing and functional online environment. ',
      tags: ['REACT', 'JAVASCRIPT', 'BOOTSTRAP'],
      imageUrl: `${process.env.PUBLIC_URL}/images/main-projects/fietsen.jpg`,
      alt: 'Second-hand Dutch bikes ecommerce', 
      liveUrl: 'https://igordinuzzi.github.io/ecommerce-site-react/',
      repoUrl: 'https://github.com/igordinuzzi/ecommerce-site-react',
    },
    {
      id: 2,
      title: 'Budget Tracker',
      subtitle: 'Dashboard App',
      description: 'A sophisticated React-based application crafted to empower users with efficient budget management capabilities. This system streamlines the process of tracking incomes and expenses, providing insights into financial trends, and fostering a proactive approach to personal finance management.',
      tags: ['REACT', 'JAVASCRIPT', 'BOOTSTRAP'],
      imageUrl: `${process.env.PUBLIC_URL}/images/main-projects/budget.jpg`,
      alt: 'Budget tracker dashboard', 
      liveUrl: 'https://igordinuzzi.github.io/budget-management-system-react/',
      repoUrl: 'https://github.com/igordinuzzi/budget-management-system-react',
    },
    {
      id: 3,
      title: 'IGOR {}',
      subtitle:'React Dev Portfolio',
      description: 'In this project, I utilized the power of React, a popular JavaScript library for building user interfaces, to create a stunning and dynamic portfolio website. Designed with both aesthetics and functionality in mind, this portfolio showcases my skills, projects, and achievements in an engaging and accessible manner.',
      tags: ['REACT', 'TYPESCRIPT', 'BOOTSTRAP'],
      imageUrl: `${process.env.PUBLIC_URL}/images/main-projects/igor.jpg`,
      alt: 'Igor dev portfolio', 
      liveUrl: 'https://igordinuzzi.github.io/portfolio-react/',
      repoUrl: 'https://github.com/igordinuzzi/portfolio-react',
    },
    {
      id: 4,
      title: 'Newsfeed',
      subtitle: 'News App',
      description: 'The application offers a dynamic experience to explore various RSS news feeds, with features like a dark/light mode switch, language filters, weather updates, and social media sharing',
      tags: ['HTML', 'CSS', 'RSS', 'API', 'BOOTSTRAP'],
      imageUrl: `${process.env.PUBLIC_URL}/images/main-projects/newsfeed.jpg`,
      alt: 'Newsfeed web app', 
      liveUrl: 'https://igordinuzzi.github.io/newsfeed/',
      repoUrl: 'https://github.com/igordinuzzi/newsfeed',
    },
    {
      id: 5,
      title: 'GreenSynch',
      subtitle: 'Product Landing Page',
      description: 'The GreenSync landing page offers an engaging showcase of the innovative and eco-friendly smartwatch, seamlessly blending aesthetics and functionality for an immersive user experience.',
      tags: ['HTML', 'CSS', 'JAVASCRIPT', 'CHATBOT'],
      imageUrl: `${process.env.PUBLIC_URL}/images/main-projects/green.jpg`,
      alt: 'Greensynch product landing page', 
      liveUrl: 'https://igordinuzzi.github.io/greensynch/',
      repoUrl: 'https://github.com/igordinuzzi/greensynch',
    },
    {
      id: 6,
      title: 'Oishi Izakaya',
      subtitle: 'Restaurant Website',
      description: 'Oishi Izakaya transcends being merely a restaurant; it is an immersive journey into Japanese cuisine and culture, blending tradition with innovation to deliver a flavorful fusion reminiscent of Japans lively streets.',
      tags: ['HTML', 'CSS', 'JAVASCRIPT', 'JSON'],
      imageUrl: `${process.env.PUBLIC_URL}/images/main-projects/oishi.jpg`,
      alt: 'Oishi izakaya restaurant website', 
      liveUrl: 'https://igordinuzzi.github.io/oishizakaya/',
      repoUrl: 'https://github.com/igordinuzzi/oishizakaya',
    },
    {
      id: 7,
      title: 'YamaNotes',
      subtitle: 'Web App',
      description: 'Yamanote Melodies, a React-based web app, immerses users in an auditory journey along Tokyo Yamanote Line, offering station-specific melodies and announcements.',
      tags: ['REACT', 'JAVASCRIPT', 'BOOTSTRAP'],
      imageUrl: `${process.env.PUBLIC_URL}/images/main-projects/yamanotes.jpg`,
      alt: 'Yamanotes web app', 
      liveUrl: 'https://igordinuzzi.github.io/yamanote-react/',
      repoUrl: 'https://github.com/igordinuzzi/yamanote-react',
    },
    {
      id: 8,
      title: 'Casa Sostoa',
      subtitle:'Art Gallery Website',
      description: 'With a seamless UI and dynamic components powered by React, the gallery beckons visitors to explore a diverse global art collection effortlessly, fostering delightful discoveries of new pieces and artists.',
      tags: ['REACT', 'TYPESCRIPT', 'BOOTSTRAP', 'CMS'],
      imageUrl: `${process.env.PUBLIC_URL}/images/main-projects/casa.jpg`,
      alt: 'Art gallery webpage', 
      liveUrl: 'https://igordinuzzi.github.io/casa-sostoa-react/',
      repoUrl: 'https://github.com/igordinuzzi/casa-sostoa-react',
    },
  ];
    

  const MainProjects: React.FC = () => {
    const [filter, setFilter] = useState<string | null>(null);
    const tags = ["HTML", "CSS", "JSON", "JAVASCRIPT", "TYPESCRIPT", "REACT", "BOOTSTRAP", "API", "RSS", "CHATBOT", "CMS"];

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
  const heading = "Dev Projects";
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
      <h2>My Real-World Experiences Building Apps</h2>
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
            );
          })}
        </Row>
      </Container>
    );
  };
  
  export default MainProjects;