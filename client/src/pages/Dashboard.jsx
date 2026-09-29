import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    // Alumni Slider State & Logic
    const [alumniIndex, setAlumniIndex] = React.useState(0);

    const alumniList = [
        {
            name: "Amitabh Kumar",
            batch: "BCA Batch of 2024",
            role: "Software Engineer at TCS",
            quote: "PTSRIET ka coding environment aur practical labs ki wajah se aaj main TCS mein Software Engineer hoon. Faculty ka support sabse best tha!",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Sneha Pandey",
            batch: "LLB Batch of 2023",
            role: "High Court Advocate",
            quote: "College ka Moot Court setup aur regular court visit training ne mujhe court trials aur legal drafting me expert bana diya.",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Rohit Sharma",
            batch: "BBA Batch of 2024",
            role: "Business Analyst at HDFC",
            quote: "Management fest aur industrial visits ne meri corporate skills ko polish kiya. Yahan ka campus life sach me unmatched hai.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
        }
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setAlumniIndex((prev) => (prev + 1) % alumniList.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [alumniList.length]);

    const currentAlumni = alumniList[alumniIndex];
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
            {/* Hindi Important Notice / Samarth Portal Alert */}
            <div className="hindi-notice-banner">
                <div className="hindi-notice-badge">⚠️ ZAROORI SUCHNA</div>
                <div className="hindi-ticker-container">
                    <div className="hindi-ticker-track">
                        <span>📢 Samarth Portal par student login aur registration start ho chuka hai, sabhi vidyarthi apna profile update karein.</span>
                        <span>💡 National Scholarship Portal (NSP) ka form bharne ki antim tithi nazdeek hai, jaldi apply karein.</span>
                        <span>📝 Samast sankay (Departments) ke back exam aur assignment ki jankari ke liye apne department head se sampark karein.</span>
                        <span>🚀 Naye satra 2026 ke pravesh (Admission) ke liye online enquiry form niche bharein.</span>
                    </div>
                </div>
            </div>

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

            {/* Upcoming Events & Notice Board Section */}
            <section className="dashboard-section-box">
                <div className="section-header-wrap">
                    <div className="title-with-badge">
                        <span className="badge-tag">📢 LIVE NOTICE BOARD</span>
                        <span className="live-pulse-dot"></span>
                    </div>
                    <h2>Upcoming Events & Important Updates</h2>
                </div>

                {/* Top Scrolling Ticker Bar for Quick Alerts */}
                <div className="notice-ticker-bar">
                    <span className="ticker-badge">LATEST</span>
                    <div className="ticker-content-box">
                        <div className="ticker-animation-track">
                            <span>🎓 Odd Semester Examination forms are now available. Last date is 15th July 2026.</span>
                            <span>⚡ National Scholarship Portal (NSP) verification is live for all departments.</span>
                            <span>🏆 Annual Tech Fest "TechnoPulse 2026" registration starts from next week!</span>
                        </div>
                    </div>
                </div>

                {/* Detailed Event Cards Grid */}
                <div className="events-notice-grid">
                    <div className="notice-card highlight-card">
                        <div className="notice-date-box">
                            <span className="date-num">15</span>
                            <span className="date-mon">JUL</span>
                        </div>
                        <div className="notice-content">
                            <span className="event-category tech">Tech Fest</span>
                            <h3>Annual Tech Fest - "TechnoPulse 2026"</h3>
                            <p>Coding competition, web design hackathon, and AI model showcase for all departments.</p>
                            <div className="notice-footer">
                                <span className="notice-time">⏰ 10:00 AM onwards</span>
                                <span className="notice-location">📍 Main Auditorium</span>
                            </div>
                        </div>
                    </div>

                    <div className="notice-card">
                        <div className="notice-date-box">
                            <span className="date-num">22</span>
                            <span className="date-mon">JUL</span>
                        </div>
                        <div className="notice-content">
                            <span className="event-category sports">Sports & Culture</span>
                            <h3>Inter-Department Sports Meet</h3>
                            <p>Cricket, volleyball tournaments, and cultural dance competitions across faculties.</p>
                            <div className="notice-footer">
                                <span className="notice-time">⏰ 09:00 AM</span>
                                <span className="notice-location">📍 College Ground</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 4. Quick Admission Enquiry / Callback Form Card */}
            <section className="dashboard-section-box">
                <div className="admission-enquiry-card">
                    <div className="enquiry-text">
                        <span className="badge-tag">🎓 ADMISSIONS OPEN 2026</span>
                        <h2>Want to Join PTSRIET?</h2>
                        <p>Fill out this quick form and our admission counsellor will call you back within 24 hours with complete details and fee structure.</p>
                    </div>
                    <form className="enquiry-form" onSubmit={(e) => { e.preventDefault(); alert('Query submitted successfully! Admission cell will contact you soon.'); }}>
                        <input type="text" placeholder="Your Full Name" required className="enquiry-input" />
                        <input type="tel" placeholder="Phone Number" required className="enquiry-input" />
                        <select className="enquiry-input" required>
                            <option value="">Select Interested Course</option>
                            <option value="bca">BCA (Computer Applications)</option>
                            <option value="bsc">BSc (Bachelor of Science)</option>
                            <option value="bba">BBA (Business Administration)</option>
                            <option value="bcom">B.Com (Commerce)</option>
                            <option value="llb">LLB (Faculty of Law)</option>
                            <option value="bed">B.Ed / D.El.Ed (Education)</option>
                        </select>
                        <button type="submit" className="enquiry-submit-btn">Request Callback 🚀</button>
                    </form>
                </div>
            </section>
            {/* 5. Alumni Success Stories / Sliding Wall of Fame */}
            <section className="dashboard-section-box">
                <div className="section-header-wrap text-center">
                    <span className="badge-tag">🌟 WALL OF FAME</span>
                    <h2>Our Proud Achievers & Alumni</h2>
                    <p className="section-sub">Hear from our brilliant graduates who started their journey at PTSRIET.</p>
                </div>

                <div className="alumni-single-slider-card">
                    <div className="slider-image-side">
                        <img src={currentAlumni.image} alt={currentAlumni.name} />
                        <p className="slider-role-text">{currentAlumni.role}</p>
                        <div className="slider-company-badge">{currentAlumni.role}</div>
                    </div>
                    <div className="slider-content-side">
                        <span className="slider-batch-tag">{currentAlumni.batch}</span>
                        <h3>{currentAlumni.name}</h3>
                        <p className="slider-quote">"{currentAlumni.quote}"</p>

                        <div className="slider-dots">
                            {alumniList.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${alumniIndex === idx ? 'active' : ''}`}
                                    onClick={() => setAlumniIndex(idx)}
                                ></span>
                            ))}
                        </div>
                    </div>
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
                        <h4>Legal & Policy</h4>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                        </ul>
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