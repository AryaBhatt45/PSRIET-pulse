import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style/Dashboard.css";

const bannerImages = [
    'https://images.jdmagicbox.com/v2/comp/pratapgarh-uttar_pradesh/j4/9999p5342.5342.200926233607.t6j4/catalogue/pt-sukhraj-raghunathi-institute-of-edu-and-technology-ranjitpur-chilbila-pratapgarh-uttar-pradesh-colleges-uzb1fjcrht.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6X6p_wr1B8BoHsZEqs4a2VvU_BBN5wixZmKiU91IQLVh4YqhOFTvOrUr&s=10',
    'https://content3.jdmagicbox.com/v2/comp/pratapgarh-uttar_pradesh/j4/9999p5342.5342.200926233607.t6j4/catalogue/pt-sukhraj-raghunathi-institute-of-edu-and-technology-ranjitpur-chilbila-pratapgarh-uttar-pradesh-colleges-zzeboxk7ia.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6lMChRn8vOqw01PpJXA7_RvDkavz6HDZwGARyORogmyMOrsVO6z5ZTXc&s=10'
];

// College Facilities / Features for Infinite Slider
const collegeFacilities = [
    { title: "Advanced Computer Lab", icon: "💻", desc: "High-speed systems & coding setup" },
    { title: "High-Speed Campus Wi-Fi", icon: "📶", desc: "24/7 internet connectivity for students" },
    { title: "BSc Science Laboratories", icon: "🔬", desc: "Fully equipped Physics, Chem & Bio labs" },
    { title: "Pure Drinking Water", icon: "🚰", desc: "RO purified water coolers across campus" },
    { title: "Smart Digital Classrooms", icon: "🏛️", desc: "Interactive boards & modern learning" },
    { title: "Rich Central Library", icon: "📚", desc: "Thousands of books & digital journals" },
    { title: "Moot Court & Law Hall", icon: "⚖️", desc: "Practical training setup for LLB students" },
    { title: "Sports & Playground", icon: "⚽", desc: "Indoor & outdoor games facilities" }
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
                <div className="slider-bg-wrapper">
                    {bannerImages.map((imgUrl, index) => (
                        <div
                            key={index}
                            className={`bg-slide ${index === currentIdx ? 'active' : ''}`}
                            style={{ backgroundImage: `linear-gradient(rgba(30, 10, 14, 0.5), rgba(30, 10, 14, 0.6)), url(${imgUrl})` }}
                        />
                    ))}
                </div>

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

                <button className="slider-arrow arrow-left" onClick={prevSlide} aria-label="Previous">&#10094;</button>
                <button className="slider-arrow arrow-right" onClick={nextSlide} aria-label="Next">&#10095;</button>

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

            {/* 3. INFINITE SCROLLING FACILITIES SLIDER (Naya Section) */}
            <section className="infinite-facilities-section">
                <div className="infinite-header">
                    <h2>🌟 Campus Facilities & Infrastructure</h2>
                    <p>Experience world-class amenities designed for student success</p>
                </div>
                <div className="infinite-slider-track">
                    {/* Items are duplicated twice to create a seamless infinite loop effect */}
                    {[...collegeFacilities, ...collegeFacilities].map((facility, index) => (
                        <div className="facility-card" key={index}>
                            <div className="facility-icon">{facility.icon}</div>
                            <h3>{facility.title}</h3>
                            <p>{facility.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Course Access Buttons Section */}
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

            {/* 5. Complete Footer Section */}
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