import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown, faEnvelope } from '@fortawesome/pro-light-svg-icons';
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
            <h3 className="about-text">I'm on a mission to expand my design expertise by diving deeper into the 
            world of web development. So, I'm currently transitioning into a UI developer and front-end specialist, 
            building on my foundation in UX design.
            To fuel this journey, I'm powering up with a Full-Stack diploma at the Code Institute. 
            This is where I'm mastering all the cool stuff under the hood, like HTML, CSS, JavaScript, 
            TypeScript, React and a bunch of other techy friends. Plus, I've become a pro at using Git & GitHub 
            to keep my code organized and collaborative!
            </h3>
          </motion.div>
          
          {/* Render additional content if readMore is true */}
          {readMore && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}>
              <br />
              <h3>But why the switch towards front-end development? It's a natural fit! It lets me combine my design 
                knowledge with fresh coding skills, allowing me to create user-centered solutions that are not only 
                beautiful but also technically sound.
                Speaking of user-centered, I'm obsessed with usability testing and user research. Making sure 
                my designs are user-friendly and address real-world needs is my jam.
                And to keep things moving smoothly, I've embraced Scrum and Agile methodologies, sharpening my project 
                management skills and ability to adapt like a pro.</h3>
              <br />
              <h3>Beyond the professional world, my passions deeply influence my approach. 
                As a dedicated sustainability advocate, I integrate eco-friendly practices into everything I do, 
                from cycling around town to embracing a delicious vegetarian lifestyle. Plus, who can resist my ginger cat Paco?! 
                On my personal exploration journey, I've been brewing my own kombucha, a testament to my love for 
                all things sustainable and fermented. And when I'm not tinkering with code or brewing magic elixirs, 
                you might find me lost in the world of tarot, a beautiful blend of self-discovery and storytelling 
                that fuels my creative thinking. 
                Cooking is another way I express myself, not just in the kitchen but also by aligning it with 
                my vegetarian lifestyle. For me, it's all about nourishing both body and mind.
                And to top it all off, I find balance through activities like skateboarding, yoga, and pilates, 
                all keeping me healthy and connected to the environment I care so much about. 
                So, there you have it! That's a glimpse into my world and what makes me tick. 
                I'm excited to see where this new chapter leads and how I can leverage my combined design 
                and development skills to create impactful solutions!
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
