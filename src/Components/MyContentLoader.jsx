import React, { useState, useEffect, useRef } from 'react';
import ContentLoader from 'react-content-loader';

const MyContentLoader = ({className=''}) => {
  const [width, setWidth] = useState(400); // Initial width
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        const computedStyle = window.getComputedStyle(containerRef.current);
        const elementWidth = containerRef.current.offsetWidth;
        setWidth(elementWidth);
      }
    };

    // Calculate width initially
    calculateWidth();

    // Add event listener for window resize
    window.addEventListener('resize', calculateWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${className}`}>
      <ContentLoader
        speed={2}
        width={width}
        height={440}
        viewBox={`0 0 ${width} 440`}
        backgroundColor="#ddd5d5"
        foregroundColor="#ecebeb"
      >
        <circle cx="31" cy="31" r="20" />
        <rect x="55" y="25" rx="5" ry="5" width="100" height="10" />
        <rect x={width - 110} y="25" rx="5" ry="5" width="100" height="10" />
        <rect x="0" y="60" rx="2" ry="2" width={width} height="350" />
        <rect x="0" y="420" rx="5" ry="5" width={width} height="10"  />
      </ContentLoader>
    </div>
  );
};

export default MyContentLoader;
