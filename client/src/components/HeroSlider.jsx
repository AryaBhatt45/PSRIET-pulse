import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const bannerImages = [
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1920&q=80'
];

const HeroSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Infinite sliding loop (Har 4 seconds mein next slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % bannerImages.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

  return (
    <div className="hero-banner-container">
      {/* Background Images - Infinite Slider */}
      <div className="background-slider">
        {bannerImages.map((imgUrl, index) => (
          <div
            key={index}
            className={`banner-slide ${index === currentIdx ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.7), rgba(11, 15, 25, 0.8)), url(${imgUrl})`
            }}
          />
        ))}
      </div>

      {/* College Intro & About Section */}
      <div className="hero-overlay-content">
        <span className="portal-badge">PSRIET Pulse Portal</span>
        <h1 className="hero-main-title">Welcome to PSRIET Digital Campus</h1>
        <p className="college-full-name">
          Pt. Sukhraj Raghunathi Institute of Education & Technology
        </p>
        <p className="college-about-text">
          Empowering future educators and technocrats with world-class academic standards,
          hands-on training labs, modern infrastructure, and holistic personality development.
        </p>
        <div className="hero-btn-group">
          <a href="#about" className="hero-btn primary-btn">About College</a>
          <a href="#courses" className="hero-btn secondary-btn">Academic Courses</a>
          <a href="#admissions" className="hero-btn outline-btn">Admissions 2026</a>
        </div>
      </div>

      {/* Slider Controls */}
      <button className="slider-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
      <button className="slider-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>

      {/* Dots Indicator */}
      <div className="dots-bar">
        {bannerImages.map((_, index) => (
          <span
            key={index}
            className={`dot-pill ${index === currentIdx ? 'active' : ''}`}
            onClick={() => setCurrentIdx(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;