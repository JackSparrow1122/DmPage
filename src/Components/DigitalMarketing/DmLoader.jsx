import React, { useEffect } from 'react';

const DmLoader = ({ onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish(); // Call the finish function after 1.5 seconds (or animation duration)
    }, 1500); // Adjust this duration to match the animation timing

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div style={styles.container}>
      <div style={styles.logoWrapper}>
        <svg width="160" height="160">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={440}
            strokeDashoffset={440}
            style={{
              animation: 'draw-circle 0.5s ease-out forwards',
            }}
          />
        </svg>
        <img
          src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1730120218/Gryphon_Academy_Bird_Logo_yzzl3q.png"
          alt="Gryphon Academy Logo"
          style={styles.logo}
        />
      </div>

      <style>
        {`
          @keyframes draw-circle {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    position: 'relative',
    width: '160px',
    height: '160px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '90px',
    height: '90px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default DmLoader;
