import React from 'react';
import { Link } from 'react-router-dom';
import "./style/Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">

            {/* 1. Navbar Section */}
            <nav className="dashboard-navbar">
                <div className="nav-brand">
                    <img src="/logo.png" alt="PTSRIET Logo" className="nav-logo" />
                    <h2>PTSRIET Pulse Portal</h2>
                </div>
                <div className="nav-links">
                    <span className="portal-tag">Academic Session 2026</span>
                </div>
            </nav>

            {/* 2. Glory Slide / Hero Section */}
            <section className="glory-slide-hero">
                <div className="hero-content">
                    <h1>Welcome to PTSRIET Digital Campus</h1>
                    <p>Access semester-wise notes, syllabus, exam results, and department updates instantly.</p>
                </div>
            </section>

            {/* 3. Course Access Buttons Section */}
            <section className="courses-access-section">
                <h2>Explore Our Courses</h2>
                <p className="section-sub">Apna course select karein aur uske dedicated page par jayein:</p>

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

            {/* 4. Footer Section */}
            <footer className="dashboard-footer">
                <p>© 2026 PTSRIET Pulse. Designed for Academic Excellence.</p>
            </footer>

        </div>
    );
};

export default Dashboard;