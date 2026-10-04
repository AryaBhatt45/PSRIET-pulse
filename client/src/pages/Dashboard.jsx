import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';
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
    { icon: '🏛', title: 'Smart Digital Classrooms', desc: 'Interactive boards & modern learning' },
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
    const [showFullAbout, setShowFullAbout] = useState(false);

    const [dynamicNotices, setDynamicNotices] = useState([]);
    const [dynamicEvents, setDynamicEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const [alumniIndex, setAlumniIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % bannerImages.length);
        }, 4000);

        const savedNotices = JSON.parse(localStorage.getItem('pt_notices')) || [];
        setDynamicNotices(savedNotices);

        const savedEvents = JSON.parse(localStorage.getItem('pt_events')) || [];
        setDynamicEvents(savedEvents);

        return () => clearInterval(timer);
    }, []);

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

    useEffect(() => {
        const timer = setInterval(() => {
            setAlumniIndex((prev) => (prev + 1) % alumniList.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [alumniList.length]);

    if (showFullAbout) {
        return <AboutUsPage onBack={() => setShowFullAbout(false)} />;
    }

    const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % bannerImages.length);
    const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    const currentAlumni = alumniList[alumniIndex];

    return (
        <div className="dashboard-container">

            <header className="top-college-header">
                <div className="header-left">
                    <img
                        src="/logo.png"
                        alt="College Logo"
                        className="college-seal-icon"
                        style={{ width: '150px', height: 'auto', objectFit: 'contain', borderRadius: '8px' }}
                    />
                </div>
                <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <a
                        href="http://mresult.prsuprayagraj.in/prsu_Results.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-result-btn"
                    >
                        <span>Check Result</span>
                        <span className="bouncing-arrow">↙️</span>
                    </a>
                    <span className="session-pill">Academic Session 2026</span>
                </div>
            </header>

            <section className="split-hero-section">
                <div className="split-hero-container">
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
                    </div>
                </div>
            </section>

            <div className="hindi-notice-banner">
                <div className="hindi-notice-badge">⚠️ ZAROORI SUCHNA</div>
                <div className="hindi-ticker-container">
                    <div className="hindi-ticker-track">
                        {dynamicNotices.length > 0 ? (
                            dynamicNotices.map((n, idx) => (
                                <span key={idx}>🚨 [{n.date}] {n.title}: {n.content} &nbsp;&nbsp;&nbsp;&nbsp;</span>
                            ))
                        ) : (
                            <span>📢 Samarth Portal par student login aur registration start ho chuka hai, sabhi vidyarthi apna profile update karein. &nbsp;&nbsp;&nbsp;&nbsp;</span>
                        )}
                        <span>💡 National Scholarship Portal (NSP) ka form bharne ki antim tithi nazdeek hai, jaldi apply karein.</span>
                    </div>
                </div>
            </div>

            <section className="infinite-facilities-section">
                <div className="infinite-header">
                    <h2>Campus Facilities & Infrastructure</h2>
                    <p>Explore world-class amenities designed for student growth</p>
                </div>
                <div className="infinite-slider-track">
                    {[...facilitiesList, ...facilitiesList].map((facility, index) => (
                        <div className="facility-card" key={index}>
                            <div className="facility-icon">{facility.icon}</div>
                            <h3>{facility.title}</h3>
                            <p>{facility.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

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

            {/* Upcoming Events & Important Updates Section */}
            <section className="dashboard-section-box">
                <div className="section-header-wrap">
                    <div className="title-with-badge">
                        <span className="badge-tag">📢 LIVE NOTICE BOARD</span>
                        <span className="live-pulse-dot"></span>
                    </div>
                    <h2>Upcoming Events & Important Updates</h2>
                </div>
                <div className="events-notice-grid horizontal-events-grid">
                    {dynamicEvents.length > 0 ? (
                        dynamicEvents.slice(0, 4).map((event, idx) => (
                            <div className="notice-card highlight-card" key={idx}>
                                <div className="notice-date-box">
                                    <span className="date-num">NEW</span>
                                    <span className="date-mon">LIVE</span>
                                </div>
                                <div className="notice-content">
                                    <span className="event-category tech">Admin Event</span>
                                    <h3 className="notice-card-title">{event.title}</h3>
                                    <div className="notice-card-desc-wrapper">
                                        <p className="notice-card-desc">{event.content}</p>
                                        <button
                                            onClick={() => setSelectedEvent(event)}
                                            className="inline-read-more-btn"
                                        >
                                            Read More →
                                        </button>
                                    </div>
                                    <div className="notice-footer">
                                        <span className="notice-time">⏰ {event.date}</span>
                                        <span className="notice-location">📍 {event.location || 'PTSRIET Portal'}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-events-fallback">No upcoming events added yet from Admin Dashboard.</p>
                    )}

                    <div className="notice-card highlight-card">
                        <div className="notice-date-box">
                            <span className="date-num">15</span>
                            <span className="date-mon">JUL</span>
                        </div>
                        <div className="notice-content">
                            <span className="event-category tech">Tech Fest</span>
                            <h3 className="notice-card-title">Annual Tech Fest - "TechnoPulse 2026"</h3>
                            <div className="notice-card-desc-wrapper">
                                <p className="notice-card-desc">Coding competition, web design hackathon, and AI model showcase for all departments.</p>
                                <button
                                    onClick={() => setSelectedEvent({
                                        title: 'Annual Tech Fest - "TechnoPulse 2026"',
                                        content: 'Coding competition, web design hackathon, and AI model showcase for all departments.',
                                        date: '15 JUL 2026',
                                        location: 'Main Auditorium'
                                    })}
                                    className="inline-read-more-btn"
                                >
                                    Read More →
                                </button>
                            </div>
                            <div className="notice-footer">
                                <span className="notice-time">⏰ 10:00 AM onwards</span>
                                <span className="notice-location">📍 Main Auditorium</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Read More Popup Modal */}
                {selectedEvent && (
                    <div className="event-modal-overlay">
                        <div className="event-modal-box">
                            <span className="event-category tech modal-badge">Admin Event</span>
                            <h3 className="event-modal-title">{selectedEvent.title}</h3>
                            <p className="event-modal-desc">{selectedEvent.content}</p>
                            <div className="event-modal-meta">
                                <span>📅 Date: {selectedEvent.date}</span>
                                <span>📍 Location: {selectedEvent.location || 'PTSRIET Portal'}</span>
                            </div>
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="event-modal-close-btn"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </section>

            <section className="dashboard-section-box">
                <div className="admission-enquiry-card">
                    <div className="enquiry-text">
                        <span className="badge-tag">🎓 ADMISSIONS OPEN 2026</span>
                        <h2>Want to Join PTSRIET?</h2>
                        <p>Fill out this quick form and our admission counsellor will call you back within 24 hours with complete details and fee structure.</p>
                    </div>
                    <form className="enquiry-form" onSubmit={(e) => {
                        e.preventDefault();

                        // Form ki values nikal rahe hain
                        const name = e.target[0].value;
                        const phone = e.target[1].value;
                        const course = e.target[2].value;

                        // Nayi enquiry object
                        const newEnquiry = {
                            id: Date.now(),
                            name: name,
                            phone: phone,
                            course: course,
                            date: new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: 'short', year: 'numeric' })
                        };

                        // Purani enquiries fetch karke nayi wali add kar rahe hain
                        const existingEnquiries = JSON.parse(localStorage.getItem('pt_enquiries')) || [];
                        const updatedEnquiries = [newEnquiry, ...existingEnquiries];

                        localStorage.setItem('pt_enquiries', JSON.stringify(updatedEnquiries));

                        alert('Query submitted successfully! Admission cell will contact you soon.');
                        e.target.reset(); // Form clear karne ke liye
                    }}>
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
                            <option value="ba">BA (Bachelor of Art)</option>
                        </select>
                        <button type="submit" className="enquiry-submit-btn">Request Callback 🚀</button>
                    </form>
                </div>
            </section>

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

            <section className="university-about-section" id="about">
                <div className="about-header-title">
                    <span className="about-subtitle-tag">ABOUT THE INSTITUTE</span>
                    <h2>Pt. Sukhraj Raghunathi Institute of Education & Technology</h2>
                </div>

                <div className="university-about-grid">
                    <div className="about-text-content">
                        <p>
                            Pt. Sukhraj Raghunathi Institute of Education & Technology is a premier institution dedicated to academic excellence, professional innovation, technical proficiency, and holistic student development. Established to foster higher education in Uttar Pradesh, the institute serves as a dynamic hub offering undergraduate and professional programs across Computer Applications, Sciences, Commerce, Arts, Law, and Teacher Education.
                        </p>
                        <p>
                            Guided by strong core values of discipline, integrity, and social responsibility, the institute provides a vibrant learning environment equipped with modern labs, expert faculty, and structured career pathways to empower the youth.
                        </p>
                        <a href="#more-about" className="read-more-btn">
                            Read More About Us
                        </a>
                    </div>

                    <div className="about-cards-wrapper">
                        <div className="uni-profile-card">
                            <div className="uni-card-img-container">
                                <img src="/college .png" alt="Chairman / Principal" className="uni-profile-img" />
                            </div>
                            <h3>Dr. R. K. Vishwakarma</h3>
                            <p className="uni-role">Managing Director & Patron</p>
                            <p className="uni-subtext">PTSRIET Institution, U.P.</p>
                            <a href="#profile-1" className="view-profile-btn">VIEW PROFILE</a>
                        </div>

                        <div className="uni-profile-card">
                            <div className="uni-card-img-container">
                                <img src="/nilesh.jpg" alt="HOD / Academic Head" className="uni-profile-img" />
                            </div>
                            <h3>Pradeep Pandey</h3>
                            <p className="uni-role">HOD - Computer Science</p>
                            <p className="uni-subtext">Technical & Academic Cell</p>
                            <a href="#profile-2" className="view-profile-btn">VIEW PROFILE & MESSAGE</a>
                        </div>
                    </div>
                </div>
            </section>

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
                        {/* Subtly visible Admin Login button */}
                        <div style={{ marginTop: '10px' }}>
                            <Link
                                to="/admin/login"
                                className="admin-hidden-trigger"
                                style={{ fontSize: '13px', color: '#000000', opacity: '0.4', textDecoration: 'none', transition: 'opacity 0.2s', display: 'inline-block' }}
                                onMouseEnter={(e) => e.target.style.opacity = '1'}
                                onMouseLeave={(e) => e.target.style.opacity = '0.4'}
                                title="Admin Login"
                            >
                                🔒
                            </Link>
                        </div>
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