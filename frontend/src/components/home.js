import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Home.css';

const featuredProducts = [
  { name: 'Iphone 15 Pro', price: '$1500', image: '/images/image1.jpg' },
  { name: 'Samsung S24 Ultra', price: '$1500', image: '/images/image2.jpg' },
  { name: 'Pixel 8', price: '$600', image: '/images/image3.jpg' },
  { name: 'Xiaomi 13 Pro', price: '$900', image: '/images/image4.jpg' },
];

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
      <div className="featured-products">
        {featuredProducts.map(product => (
          <div key={product.name} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
