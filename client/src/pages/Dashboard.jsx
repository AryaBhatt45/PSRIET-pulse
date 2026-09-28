import React, { useState, useEffect } from 'react';
import './style/Dashboard.css';

const bannerImages = [
    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1920&q=80'
];

const facilitiesList = [
    { icon: '🔬', title: 'Advanced Laboratories', desc: 'Well-equipped Physics, Chem & Bio labs' },
    { icon: '💧', title: 'Pure Drinking Water', desc: 'RO purified water coolers across campus' },
    { icon: '🏛️', title: 'Smart Digital Classrooms', desc: 'Interactive boards & modern learning' },
    { icon: '📚', title: 'Rich Central Library', desc: 'Thousands of books & digital journals' },
    { icon: '⚖️', title: 'Moot Court & Law Hall', desc: 'Practical training setup for LLB students' }
];

const coursesList = [
    { title: "BCA", desc: "Computer Applications", link: "/bca", icon: "💻" },
    { title: "BSc", desc: "Bachelor of Science", link: "/bsc", icon: "🔬" },
    { title: "BBA", desc: "Business Administration", link: "/bba", icon: "📊" },
    { title: "B.Com", desc: "Commerce Department", link: "/bcom", icon: "💼" },
    { title: "BA", desc: "Bachelor of Arts", link: "/ba", icon: "📖" },
    { title: "B.Ed", desc: "Education Training", link: "/bed", icon: "🎓" },
    { title: "D.El.Ed", desc: "Elementary Education", link: "/dled", icon: "📚" },
    { title: "LLB", desc: "Bachelor of Laws", link: "/llb", icon: "⚖️" },
    { title: "MA", desc: "Master of Arts", link: "/ma", icon: "📜" }
];

const Dashboard = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % bannerImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % bannerImages.length);
    const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

    return (
        <div className="dashboard-container">

            {/* 1. Top College Header */}
            <header className="top-college-header">
                <div className="header-left">
                    <img
                        src="/logo.png"
                        alt="College Logo"
                        className="college-seal-icon"
                        style={{ width: '150px', height: 'auto', objectFit: 'contain', borderRadius: '8px' }}
                    />
                </div>
                <div className="header-right">
                    <span className="session-pill">Academic Session 2026</span>
                </div>
            </header>

            {/* 2. Split Hero Section (Left Text, Right Image Slider) */}
            <section className="split-hero-section">
                <div className="split-hero-container">

                    {/* Left Text Content */}
                    <div className="hero-text-content">
                        <span className="welcome-tag">Digital Learning Platform</span>
                        <h2>Welcome to PTSRIET Digital Campus</h2>
                        <p className="hero-subtext">
                            Pt. Sukhraj Raghunathi Institute of Education & Technology
                        </p>
                        <p className="hero-description">
                            Access semester-wise notes, syllabus, exam schedules, and department updates instantly. Dedicated to academic discipline, modern innovation, and career excellence.
                        </p>
                        <div className="hero-action-buttons">
                            <a href="#courses" className="hero-btn-primary">Explore Courses</a>
                            <a href="#about" className="hero-btn-outline">About College</a>
                        </div>
                    </div>

                    {/* Right Image Slider Card */}
                    <div className="hero-slider-card">
                        <div className="slider-img-wrapper">
                            {bannerImages.map((imgUrl, index) => (
                                <img
                                    key={index}
                                    src={imgUrl}
                                    alt="Campus Slide"
                                    className={`banner-slide-img ${index === currentIdx ? 'active' : ''}`}
                                />
                            ))}
                        </div>

                        {/* Arrow Controls */}
                        <button className="slider-arrow arrow-left" onClick={prevSlide} aria-label="Previous">&#10094;</button>
                        <button className="slider-arrow arrow-right" onClick={nextSlide} aria-label="Next">&#10095;</button>

                        {/* Dots Indicator */}
                        <div className="slider-dots-nav">
                            {bannerImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot-indicator ${index === currentIdx ? 'active' : ''}`}
                                    onClick={() => setCurrentIdx(index)}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. Infinite Facilities Slider Section */}
            <section className="infinite-facilities-section">
                <div className="infinite-header">
                    <h2>Campus Facilities & Infrastructure</h2>
                    <p>Explore world-class amenities designed for student growth</p>
                </div>
                <div className="infinite-slider-track">
                    {/* Double mapping for seamless infinite loop */}
                    {[...facilitiesList, ...facilitiesList].map((facility, index) => (
                        <div className="facility-card" key={index}>
                            <div className="facility-icon">{facility.icon}</div>
                            <h3>{facility.title}</h3>
                            <p>{facility.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Manager / Director Message Section */}
            <section className="manager-message-section">
                <div className="manager-container">
                    <div className="manager-img-box">
                        <img
                            src="/manager.png"
                            alt="Manager / Director"
                            className="manager-avatar"
                        />
                    </div>
                    <div className="manager-content-box">
                        <span className="manager-badge">Leadership Message</span>
                        <h2>Director's Desk</h2>
                        <p className="manager-quote">
                            "Education is not merely about acquiring degrees, but about building character, igniting curiosity, and empowering the future generation with knowledge and integrity. Welcome to our digital campus!"
                        </p>
                        <div className="manager-info">
                            <h3>Dr. Candrakant Tripathi</h3>
                            <p>Managing Director / Principal</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Courses Access Section with Best Cards */}
            <section id="courses" className="courses-access-section">
                <div className="courses-header">
                    <h2>Explore Our Courses</h2>
                    <p className="section-sub">Apna course select karein aur uske dedicated page par jayein:</p>
                </div>
                <div className="course-btn-grid">
                    {coursesList.map((course, index) => (
                        <a href={course.link} className="course-btn" key={index}>
                            <div className="icon">{course.icon}</div>
                            <div>
                                <h3>{course.title}</h3>
                                <p>{course.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* 5. College Main Footer */}
            <footer className="college-main-footer">
                <div className="footer-top-grid">
                    <div className="footer-col">
                        <h3>PTSRIET Digital Campus</h3>
                        <p>Empowering students through quality education, modern digital learning tools, and core academic discipline.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#facilities">Facilities</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Departments</h4>
                        <ul>
                            <li><a href="#bca">Computer Applications</a></li>
                            <li><a href="#bed">Education & Training</a></li>
                            <li><a href="#llb">Faculty of Law</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Info</h4>
                        <p>Pt. Sukhraj Raghunathi Institute of Education & Technology</p>
                        <p>Academic Session 2026</p>
                    </div>
                </div>
                <div className="footer-bottom-bar">
                    <p>&copy; 2026 PTSRIET. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Dashboard;