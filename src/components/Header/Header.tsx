import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar" sticky="top"> {/* Added sticky="top" */}
      <Container>
        <Navbar.Brand href="#home">
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} width="119" height="32" className="d-inline-block align-top" alt="Logo" />
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="main-projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" aria-label="main projects">Dev</Link>
            <Link to="design-projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" aria-label="mini-projects">Design</Link>
            <Link to="mini-projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" aria-label="design-projects">Mini</Link>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" aria-label="About">About</Link>
            <Link to="stack" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" aria-label="stack">Stack</Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" aria-label="contact">Contact</Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:replytoigor@gmail.com" aria-label="send an email">
              <FontAwesomeIcon icon={faEnvelope} className="icons"/>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/igor-dinuzzi-von-ach-100286ab/" target="_blank" aria-label="go to Linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} className="icons"/>
            </Nav.Link>
            <Nav.Link href="https://github.com/igordinuzzi" target="_blank" aria-label="go to github">
              <FontAwesomeIcon icon={faGithub} className="icons"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
