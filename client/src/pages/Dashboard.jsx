import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';
import './style/Dashboard.css';

const bannerImages = [
    'https://scontent.flko7-5.fna.fbcdn.net/v/t39.30808-6/475642594_935048138781372_375181577136820579_n.jpg?stp=dst-jpg_tt6&cstp=mx720x405&ctp=s720x405&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ic_RaYcIXmEQ7kNvwGuMkHI&_nc_oc=AdptPNXm_xCMdqc5wH7AzRDCGF32e12-TN_Db_Ua3r79yvHlLvCaMHmKlEQi-YvkTdA&_nc_zt=23&_nc_ht=scontent.flko7-5.fna&_nc_gid=WtCGPePTzNvGrBGGGkgPFQ&_nc_ss=7b289&oh=00_AQO-6JxxIkz8tOVYWEVr6vX6ACIC0-P9ORJiga4Jj8S4Ag&oe=6AC8DD6B',
    'https://images.jdmagicbox.com/v2/comp/pratapgarh-uttar_pradesh/j4/9999p5342.5342.200926233607.t6j4/catalogue/pt-sukhraj-raghunathi-institute-of-edu-and-technology-ranjitpur-chilbila-pratapgarh-uttar-pradesh-colleges-uzb1fjcrht.jpg',
    'https://content3.jdmagicbox.com/v2/comp/pratapgarh-uttar_pradesh/j4/9999p5342.5342.200926233607.t6j4/catalogue/pt-sukhraj-raghunathi-institute-of-edu-and-technology-ranjitpur-chilbila-pratapgarh-uttar-pradesh-colleges-zzeboxk7ia.jpg',
    'https://content3.jdmagicbox.com/v2/comp/pratapgarh-uttar_pradesh/j4/9999p5342.5342.200926233607.t6j4/catalogue/pt-sukhraj-raghunathi-institute-of-edu-and-technology-ranjitpur-chilbila-pratapgarh-uttar-pradesh-colleges-lun8mknonm.jpg'
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
    const [attendanceAttended, setAttendanceAttended] = useState('');
    const [attendanceHeld, setAttendanceHeld] = useState('');
    const [attendanceTarget, setAttendanceTarget] = useState('75');
    const [attendanceResult, setAttendanceResult] = useState('');
    const [marksObtained, setMarksObtained] = useState('');
    const [marksTotal, setMarksTotal] = useState('');
    const [marksResult, setMarksResult] = useState('');
    const [examDate, setExamDate] = useState('');
    const [examCountdown, setExamCountdown] = useState('');

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

    const calculateAttendance = (event) => {
        event.preventDefault();
        const attended = Number(attendanceAttended);
        const held = Number(attendanceHeld);
        const target = Number(attendanceTarget);

        if (!attendanceAttended || !attendanceHeld || !attendanceTarget ||
            !Number.isFinite(attended) || !Number.isFinite(held) || !Number.isFinite(target) ||
            attended < 0 || held <= 0 || attended > held || target <= 0 || target > 100) {
            setAttendanceResult('Enter valid class counts and a target between 1% and 100%.');
            return;
        }

        const currentPercentage = (attended / held) * 100;
        if (currentPercentage >= target) {
            const classesCanMiss = Math.floor(attended / (target / 100) - held);
            setAttendanceResult(`Current attendance: ${currentPercentage.toFixed(1)}%. You can miss up to ${Math.max(0, classesCanMiss)} more class${classesCanMiss === 1 ? '' : 'es'} and stay at ${target}%.`);
            return;
        }

        if (target === 100) {
            setAttendanceResult(`Current attendance: ${currentPercentage.toFixed(1)}%. A 100% target is no longer reachable after missing a class.`);
            return;
        }

        const classesNeeded = Math.ceil((target * held - 100 * attended) / (100 - target));
        setAttendanceResult(`Current attendance: ${currentPercentage.toFixed(1)}%. Attend the next ${classesNeeded} consecutive class${classesNeeded === 1 ? '' : 'es'} to reach ${target}%.`);
    };

    const calculateMarksPercentage = (event) => {
        event.preventDefault();
        const obtained = Number(marksObtained);
        const total = Number(marksTotal);

        if (!marksObtained || !marksTotal || !Number.isFinite(obtained) ||
            !Number.isFinite(total) || obtained < 0 || total <= 0 || obtained > total) {
            setMarksResult('Enter valid marks; obtained marks cannot exceed the total.');
            return;
        }

        setMarksResult(`Percentage: ${((obtained / total) * 100).toFixed(2)}%`);
    };

    const calculateExamCountdown = (event) => {
        event.preventDefault();
        if (!examDate) {
            setExamCountdown('Choose your exam date to see the countdown.');
            return;
        }

        const [year, month, day] = examDate.split('-').map(Number);
        const selectedDay = Date.UTC(year, month - 1, day);
        const today = new Date();
        const todayStart = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
        const daysRemaining = Math.round((selectedDay - todayStart) / 86400000);

        setExamCountdown(daysRemaining < 0
            ? 'That exam date has already passed.'
            : daysRemaining === 0
                ? 'Your exam is today. Good luck!'
                : `${daysRemaining} day${daysRemaining === 1 ? '' : 's'} until your exam.`);
    };

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
                {/* Header Quick Support Contacts */}
                <div className="header-support-contacts">
                    <a href="tel:+917398663942" className="support-phone-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                        <span>+91 7398663942</span>
                    </a>

                    <a href="https://wa.me/7398663942?text=Hello%20PTSRIET%20Support,%20I%20need%20assistance." target="_blank" rel="noopener noreferrer" className="support-whatsapp-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                        <span>WhatsApp</span>
                    </a>
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
            <section className="student-toolkit-section" aria-labelledby="student-toolkit-title">
                <div className="student-toolkit-heading">
                    <span className="student-toolkit-badge">🎒 STUDENT TOOLKIT</span>
                    <h2 id="student-toolkit-title">Quick tools for your semester</h2>
                    <p>Check attendance, calculate marks, and keep your next exam in sight.</p>
                </div>
                <div className="student-toolkit-grid">
                    <article className="student-tool-card">
                        <div className="student-tool-icon" aria-hidden="true">📊</div>
                        <h3>Attendance Planner</h3>
                        <p>See your current attendance and how many classes you need to attend or can miss.</p>
                        <form onSubmit={calculateAttendance} className="student-tool-form">
                            <label>
                                Classes attended
                                <input type="number" min="0" step="1" value={attendanceAttended} onChange={(event) => setAttendanceAttended(event.target.value)} required />
                            </label>
                            <label>
                                Classes held
                                <input type="number" min="1" step="1" value={attendanceHeld} onChange={(event) => setAttendanceHeld(event.target.value)} required />
                            </label>
                            <label>
                                Target attendance (%)
                                <input type="number" min="1" max="100" step="0.1" value={attendanceTarget} onChange={(event) => setAttendanceTarget(event.target.value)} required />
                            </label>
                            <button type="submit" className="student-tool-button">Check attendance</button>
                            {attendanceResult && <p className="student-tool-result" aria-live="polite">{attendanceResult}</p>}
                        </form>
                    </article>

                    <article className="student-tool-card">
                        <div className="student-tool-icon" aria-hidden="true">🧮</div>
                        <h3>Marks Calculator</h3>
                        <p>Calculate your score percentage without guessing a CGPA conversion formula.</p>
                        <form onSubmit={calculateMarksPercentage} className="student-tool-form">
                            <label>
                                Marks obtained
                                <input type="number" min="0" step="any" value={marksObtained} onChange={(event) => setMarksObtained(event.target.value)} required />
                            </label>
                            <label>
                                Total marks
                                <input type="number" min="0.01" step="any" value={marksTotal} onChange={(event) => setMarksTotal(event.target.value)} required />
                            </label>
                            <button type="submit" className="student-tool-button">Calculate percentage</button>
                            {marksResult && <p className="student-tool-result" aria-live="polite">{marksResult}</p>}
                        </form>
                    </article>

                    <article className="student-tool-card">
                        <div className="student-tool-icon" aria-hidden="true">📅</div>
                        <h3>Exam Countdown</h3>
                        <p>Set an exam date to see how many days you have left to prepare.</p>
                        <form onSubmit={calculateExamCountdown} className="student-tool-form">
                            <label>
                                Exam date
                                <input type="date" value={examDate} onChange={(event) => setExamDate(event.target.value)} required />
                            </label>
                            <button type="submit" className="student-tool-button">Start countdown</button>
                            {examCountdown && <p className="student-tool-result" aria-live="polite">{examCountdown}</p>}
                        </form>
                    </article>
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

                <div className="horizontal-events-grid">
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
                                    <p className="notice-card-desc">{event.content}</p>
                                    <button
                                        onClick={() => setSelectedEvent(event)}
                                        className="inline-read-more-btn"
                                    >
                                        Read More →
                                    </button>
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
                            <div className="notice-footer">
                                <span className="notice-time">⏰ 10:00 AM onwards</span>
                                <span className="notice-location">📍 Main Auditorium</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarship & Financial Aid Section (Jaise BA me hai) */}
            <section className="dashboard-section-box">
                <div className="section-header-wrap">
                    <div className="title-with-badge">
                        <span className="badge-tag">🎓 FINANCIAL AID</span>
                    </div>
                    <h2>State Scholarship & Fee Reimbursement</h2>
                    <p className="section-subtitle">Check your eligibility criteria and apply for government scholarship schemes directly.</p>
                </div>

                <div className="scholarship-main-card">
                    <div className="scholarship-card-header">
                        <div className="scholarship-title-area">
                            <span className="scholarship-badge">🏛️ Government Scheme</span>
                            <h3>Post-Matric Scholarship Scheme</h3>
                            <p>Eligible students can claim tuition fee reimbursement and maintenance allowances provided by the state government.</p>
                        </div>
                        <div className="scholarship-action-btns">
                            <a href="https://scholarships.gov.in/" target="_blank" rel="noreferrer" className="primary-apply-btn">
                                Apply Now 🚀
                            </a>
                            <button onClick={() => alert("Checking application status...")} className="secondary-status-btn">
                                Check Status 🔍
                            </button>
                        </div>
                    </div>

                    <div className="scholarship-rules-grid">
                        <div className="rule-box">
                            <span className="rule-label">ACADEMIC CUTOFF:</span>
                            <span className="rule-value">Minimum 75% Marks</span>
                        </div>
                        <div className="rule-box">
                            <span className="rule-label">BACKLOG RULE:</span>
                            <span className="rule-value">No Active Backlogs (0 Failures)</span>
                        </div>
                        <div className="rule-box">
                            <span className="rule-label">ATTENDANCE:</span>
                            <span className="rule-value">Minimum 75% Required</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admissions Enquiry Section (Fixed Layout) */}
            <section className="dashboard-section-box">
                <div className="admission-enquiry-card">
                    <div className="enquiry-text">
                        <span className="badge-tag">🎓 ADMISSIONS OPEN 2026</span>
                        <h2>Want to Join PTSRIET?</h2>
                        <p>This form saves your enquiry in this browser only. For a response or fee details, please contact the institute directly.</p>
                    </div>
                    <form className="enquiry-form" onSubmit={(e) => {
                        e.preventDefault();
                        const name = e.target[0].value;
                        const phone = e.target[1].value;
                        const course = e.target[2].value;

                        const newEnquiry = {
                            id: Date.now(),
                            name: name,
                            phone: phone,
                            course: course,
                            date: new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: 'short', year: 'numeric' })
                        };

                        const existingEnquiries = JSON.parse(localStorage.getItem('pt_enquiries')) || [];
                        const updatedEnquiries = [newEnquiry, ...existingEnquiries];

                        localStorage.setItem('pt_enquiries', JSON.stringify(updatedEnquiries));

                        alert('Your enquiry was saved in this browser only. Please contact the institute directly to request a callback.');
                        e.target.reset();
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
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCea70h3XgTlVdYgvSMvtEf6QRfB0UlupRGpCE5edYQ&s=10" alt="Chairman / Principal" className="uni-profile-img" />
                            </div>
                            <h3>Dr.Lal ji Tripathi</h3>
                            <p className="uni-role">Managing Director & Patron</p>
                            <p className="uni-subtext">PTSRIET Institution, U.P.</p>
                            <a href="#profile-1" className="view-profile-btn">VIEW PROFILE</a>
                        </div>

                        <div className="uni-profile-card">
                            <div className="uni-card-img-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCea70h3XgTlVdYgvSMvtEf6QRfB0UlupRGpCE5edYQ&s=10" alt="HOD / Academic Head" className="uni-profile-img" />
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
                        <div style={{ marginTop: '30px' }}>
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