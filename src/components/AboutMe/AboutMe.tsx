import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  const [readMore, setReadMore] = useState(false);

  // Splitting the heading into letters for animation
  const heading = "About";
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
      {/* Place the image above the Row */}
      {/* Animate the image using motion.img */}
      <img 
        src={`${process.env.PUBLIC_URL}/images/about/about.png`} 
        alt="About Igor" 
        className="img-fluid mb-4"
      />
      
      <Row className="align-items-start about-text">
        <Col xs={12}>
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
          <h2>The Story Behind the Code and the Adventures Beyond</h2>
          
          {/* Button Container */}
          <Row className="my-4">
            <Col xs={12} sm={6} md={3}>
              <Button className="mb-3 secondary-btn" href="mailto:replytoigor@gmail.com" aria-label="send me an email">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Email
              </Button>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Button className="mb-3 secondary-btn" href="https://www.linkedin.com/in/igor-dinuzzi-von-ach-100286ab/" target='_blank' aria-label="go to linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} className="me-2" /> LinkedIn
              </Button>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Button className="mb-3 secondary-btn" href="https://github.com/igordinuzzi" target='_blank' aria-label="go to github">
                <FontAwesomeIcon icon={faGithub} className="me-2" /> GitHub
              </Button>
            </Col>
          </Row>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}>
            <h3 className="about-text">I'm passionately broadening my expertise in design with an eye towards integrating web development into my skill set. Instead of transitioning, I'm augmenting my proficiency as a UI designer and front-end specialist, building upon my solid UX design background. I'm currently enhancing my knowledge through a Full-Stack diploma at the Code Institute, diving into the intricacies of HTML, CSS, JavaScript, TypeScript, React, and more. My aim is to meld my design acumen with new technical skills, ensuring the creation of user-centric solutions that are both aesthetically pleasing and functionally robust.

            </h3>
          </motion.div>
          
          {/* Render additional content if readMore is true */}
          {readMore && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}>
              <br />
              <h3>My journey into web development is driven by a desire to fuse my design sensibilities with practical coding capabilities, enabling me to deliver comprehensive solutions that prioritize user needs. My focus remains steadfast on usability testing and user research, ensuring that my designs are accessible and effectively solve real-world problems. I'm also refining my project management skills through Scrum and Agile methodologies, enhancing my adaptability and efficiency.
</h3>
              <br />
              <h3>Outside of professional pursuits, my commitment to sustainability and wellness shapes my personal life and work ethic. Whether it's cycling, adopting a vegetarian diet, brewing kombucha, or exploring tarot for creative inspiration, these activities reflect my dedication to a sustainable, balanced lifestyle. They're not just hobbies; they're an extension of my values and a source of inspiration for my work. I'm eager to explore how this fusion of design insight, development skills, and a holistic approach to life can drive innovative solutions in the digital realm.
              </h3>  
            </motion.div>
          )}
          
          {/* Read more / Read less button */}
          <Button onClick={() => setReadMore(!readMore)} className="secondary-btn">
            {readMore ? <><FontAwesomeIcon icon={faArrowUp} className="icon-in-btn"/> Hide</> : <><FontAwesomeIcon icon={faArrowDown} className="icon-in-btn"/> Read more...</>}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
