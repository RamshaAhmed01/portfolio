import React, { useRef } from 'react'; // Corrected import statement
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
import Header from './components/Header/Header'; 
import Hero from './components/Hero/Hero'
import MainProjects from './components/MainProjects/MainProjects';
import MiniProjects from './components/MiniProjects/MiniProjects';
import Footer from './components/Footer/Footer';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Stack from './components/Stack/Stack';
import Timeline from './components/Timeline/Timeline'
import Contact from './components/Contact/Contact';
import ScrollDownArrow from './components/ScrollDownArrow/ScrollDownArrow';
import ScrollDown from './components/ScrollDownArrow/ScrollDown';
import Bye from './components/Bye/Bye'
import DesignProjects from './components/DesignProjects/DesignProjects';

const App: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }, // Fixed opacity to 1 for proper visibility
  };

  // Create ref for main projects section
  const mainProjectsRef = useRef<HTMLDivElement>(null);


  return (
    <div>
      <BackToTopButton /> {/* This line adds the progress bar */}
      <ScrollProgressBar /> {/* This line adds the progress bar */}
      <Header />
      <Hero />
      <ScrollDownArrow targetRef={mainProjectsRef} />
      <motion.div  ref={mainProjectsRef} id="main-projects" variants={sectionVariants} initial="hidden" animate="visible">
        <MainProjects />
      </motion.div>
      <ScrollDown />
      <motion.div id="design-projects" variants={sectionVariants} initial="hidden" animate="visible">
        <DesignProjects />
      </motion.div>
      <ScrollDown />
      <motion.div id="mini-projects" variants={sectionVariants} initial="hidden" animate="visible">
        <MiniProjects />
      </motion.div>
      <ScrollDown />
      <motion.div id="stack" variants={sectionVariants} initial="hidden" animate="visible">
        <Stack />
      </motion.div>
      <ScrollDown />
      <motion.div id="about" variants={sectionVariants} initial="hidden" animate="visible">
        <AboutMe />
        <Timeline />
      </motion.div>
      <ScrollDown />
      <motion.div id="contact" variants={sectionVariants} initial="hidden" animate="visible">
        <Contact />
      </motion.div>
      <ScrollDown />
      <Bye />
      <ScrollDown />
      <Footer />
    </div>
  );
}

export default App;
