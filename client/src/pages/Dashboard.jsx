import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style/Dashboard.css";

const bannerImages = [
    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1920&q=80'
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

            {/* 1. Clean Top Bar */}
            <header className="top-college-header">
                <div className="header-left">
                    <span className="college-seal-icon">🏛️</span>
                    <div>
                        <h1 className="header-college-title">Pt. Sukhraj Raghunathi Institute of Education & Technology</h1>
                        <span className="header-subtitle">Approved by NCTE & Affiliated to State University</span>
                    </div>
                </div>
                <div className="header-right">
                    <span className="session-pill">Academic Session 2026</span>
                </div>
            </header>

            {/* 2. Hero Section with Background Slider */}
            <section className="glory-slide-hero">
                {/* Background Slider */}
                <div className="slider-bg-wrapper">
                    {bannerImages.map((imgUrl, index) => (
                        <div
                            key={index}
                            className={`bg-slide ${index === currentIdx ? 'active' : ''}`}
                            style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.75), rgba(10, 25, 47, 0.82)), url(${imgUrl})` }}
                        />
                    ))}
                </div>

                {/* Hero Foreground Card */}
                <div className="hero-floating-card">
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

                {/* Arrow Controls */}
                <button className="slider-arrow arrow-left" onClick={prevSlide} aria-label="Previous">&#10094;</button>
                <button className="slider-arrow arrow-right" onClick={nextSlide} aria-label="Next">&#10095;</button>

                {/* Dots */}
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
            </section>

            {/* 3. Course Access Buttons Section */}
            <section className="courses-access-section" id="courses">
                <div className="courses-header">
                    <h2>Explore Our Courses</h2>
                    <p className="section-sub">Apna course select karein aur uske dedicated page par jayein:</p>
                </div>

                <div className="course-btn-grid">
                    <Link to="/bca" className="course-btn bca-btn">
                        <span className="icon">💻</span>
                        <div>
                            <h3>BCA</h3>
                            <p>Computer Applications</p>
                        </div>
                    </Link>

                    <Link to="/bsc" className="course-btn bsc-btn">
                        <span className="icon">🔬</span>
                        <div>
                            <h3>BSc</h3>
                            <p>Bachelor of Science</p>
                        </div>
                    </Link>

                    <Link to="/bba" className="course-btn bba-btn">
                        <span className="icon">📊</span>
                        <div>
                            <h3>BBA</h3>
                            <p>Business Administration</p>
                        </div>
                    </Link>

                    <Link to="/bcom" className="course-btn bcom-btn">
                        <span className="icon">💼</span>
                        <div>
                            <h3>B.Com</h3>
                            <p>Commerce Department</p>
                        </div>
                    </Link>

                    <Link to="/ba" className="course-btn ba-btn">
                        <span className="icon">📖</span>
                        <div>
                            <h3>BA</h3>
                            <p>Bachelor of Arts</p>
                        </div>
                    </Link>

                    <Link to="/bed" className="course-btn bed-btn">
                        <span className="icon">🎓</span>
                        <div>
                            <h3>B.Ed</h3>
                            <p>Education Training</p>
                        </div>
                    </Link>

                    <Link to="/dled" className="course-btn dled-btn">
                        <span className="icon">📚</span>
                        <div>
                            <h3>D.El.Ed</h3>
                            <p>Elementary Education</p>
                        </div>
                    </Link>

                    <Link to="/llb" className="course-btn llb-btn">
                        <span className="icon">⚖️</span>
                        <div>
                            <h3>LLB</h3>
                            <p>Bachelor of Laws</p>
                        </div>
                    </Link>

                    <Link to="/ma" className="course-btn ma-btn">
                        <span className="icon">📜</span>
                        <div>
                            <h3>MA</h3>
                            <p>Master of Arts</p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* 4. Complete Footer Section */}
            <footer className="college-main-footer" id="about">
                <div className="footer-top-grid">
                    <div className="footer-col about-col">
                        <h3>Pt. Sukhraj Raghunathi Institute</h3>
                        <p>
                            Dedicated to fostering academic discipline, professional excellence, and technological proficiency across teacher education, sciences, law, and computer studies.
                        </p>
                    </div>

                    <div className="footer-col links-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#courses">Courses Offered</a></li>
                            <li><Link to="/bca">BCA Department</Link></li>
                            <li><Link to="/bed">B.Ed & D.El.Ed</Link></li>
                            <li><a href="#about">About Institute</a></li>
                        </ul>
                    </div>

                    <div className="footer-col links-col">
                        <h4>Student Support</h4>
                        <ul>
                            <li><a href="#courses">Semester Notes</a></li>
                            <li><a href="#courses">Syllabus Details</a></li>
                            <li><a href="#courses">Exam Notifications</a></li>
                            <li><a href="#about">Admissions 2026</a></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h4>Contact Us</h4>
                        <p>📍 Pt. Sukhraj Raghunathi Institute of Education & Technology</p>
                        <p>📞 Phone: +91 7905626181</p>
                        <p>✉️ Email: info@ptsriet.ac.in</p>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <p>© 2026 PTSRIET. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Dashboard;