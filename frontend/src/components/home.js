import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Home.css';

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(-50px)' },
    to: { transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <div className="home-container">
      <animated.p style={slideIn}>Explore our wide range of products and enjoy your shopping experience!</animated.p>
    </div>
  );
};

export default Home;
