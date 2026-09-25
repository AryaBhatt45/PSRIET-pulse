import React from 'react';
import './CollegeGlory.css';

const featureSlides = [
  { id: '1', title: 'Advanced Labs', desc: 'State-of-the-art laboratories equipped with modern tools for practical learning.', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=500&auto=format&fit=crop&q=60' },
  { id: '2', title: 'Top Education & Books', desc: 'Comprehensive academic curriculum with extensive library resources for deep study.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&auto=format&fit=crop&q=60' },
  { id: '3', title: 'Expert Faculty', desc: 'Dedicated mentorship from experienced professors to guide your career path.', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60' },
  { id: '4', title: 'Campus Placement', desc: 'Strong industry connections ensuring confident careers and top job opportunities.', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60' },
  { id: '5', title: 'Sports & Culture', desc: 'Holistic growth through regular sports tournaments and vibrant cultural events.', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60' }
];

const CollegeGlory = () => (
  <div className="college-glory-wrapper">
    {/* 1. Hero Section Card with Red & Yellow/Orange Mix */}
    <section className="glory-hero-section" aria-labelledby="glory-heading">
      <div className="glory-copy">
        <p className="eyebrow">Welcome to</p>
        <h1 id="glory-heading" className="main-college-title">
          Pt. Sukhraj Raghunath Institute of Education & Technology
        </h1>
        <p className="location-text">Pratapgarh, Uttar Pradesh</p>
        <p className="sub-title">A campus built for <em>ambition.</em></p>
        <p className="desc">PTSRIET brings academic rigour, practical learning, and dedicated mentorship together so students can build confident careers and meaningful futures.</p>
        
        <div className="glory-stats">
          <span><strong>08</strong> career pathways</span>
          <span><strong>01</strong> student-first portal</span>
          <div className="glory-badge-inline">
            <span>Since</span>
            <strong>2004</strong>
          </div>
        </div>
      </div>
      
      {/* Right side College Image */}
      <div className="glory-image-container">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=60" 
          alt="College Campus" 
          className="hero-college-img" 
        />
      </div>
    </section>

    {/* 2. New Infinite Moving Slider Section */}
    <section className="glory-slider-section">
      <h3 className="slider-section-title">Explore Our Campus Facilities</h3>
      <div className="slider-container">
        <div className="slider-track">
          {[...featureSlides, ...featureSlides].map((item, index) => (
            <div className="feature-slide-card" key={`${item.id}-${index}`}>
              <div className="slide-img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="slide-content-box">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default CollegeGlory;