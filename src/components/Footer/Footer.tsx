import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { faLinkedinIn, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'; // Make sure faReact is correctly imported

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 footer-bg">
      <Container>
        <Row className="justify-content-center justify-content-md-between align-items-center text-center text-md-left">
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            {/* SVG Logo */}
            <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            width="119"
            height="32"
            className="d-inline-block align-top"
            alt="Logo"
            />

          </Col>
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            {/* Made with React */}
            <span className="mb-2">Made with</span>
            <FontAwesomeIcon icon={faReact} size="lg" className="ms-2 me-md-2" />
            <span>React</span>
          </Col>
          <Col xs={12} md={4}>
            {/* Social Icons */}
            <a href="mailto:replytoigor@gmail.com" className="text-decoration-none mx-2">
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="icons-footer"/>
            </a>
            <a href="https://www.linkedin.com/in/igor-dinuzzi-von-ach-100286ab/" target="_blank" className="text-decoration-none mx-2" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="icons-footer"/>
            </a>
            <a href="https://github.com/igordinuzzi" target="_blank" className="text-decoration-none mx-2" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" className="icons-footer"/>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
