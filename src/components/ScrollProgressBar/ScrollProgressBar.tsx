// ScrollProgressBar.tsx

import React, { useEffect, useState } from 'react';
import './ScrollProgressBar.css'; // Create this CSS file for styling

const ScrollProgressBar: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const listenToScrollEvent = () => {
        const winScroll = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScrollEvent);

        return () => window.removeEventListener('scroll', listenToScrollEvent);
    }, []);

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    );
};

export default ScrollProgressBar;
