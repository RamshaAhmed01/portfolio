// BackToTopButton.tsx

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './BackToTopButton.css'; // Create this CSS file for styling

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 100px
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top on button click
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <button className="back-to-top-btn" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} /> TOP
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
