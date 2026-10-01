import React from 'react';
import './style/AboutUsPage.css'; // CSS file ko import kar liya

export default function AboutUsPage({ onBack }) {
    return (
        <div className="about-us-page-container">
            {/* Top Banner */}
            <div className="about-page-hero">
                <div className="hero-overlay">
                    <h1>About the Institute</h1>
                    <p>Pt. Sukhraj Raghunathi Institute of Education & Technology</p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="about-page-content-wrapper">
                <button className="back-to-home-btn" onClick={onBack}>
                    &larr; Back to Dashboard
                </button>

                <div className="about-main-grid">
                    <div className="about-text-col">
                        <h2>Welcome to PTSRIET</h2>
                        <p className="lead-text">
                            Pt. Sukhraj Raghunathi Institute of Education & Technology stands as a beacon of quality higher education, professional training, and moral integrity in Uttar Pradesh.
                        </p>
                        <p>
                            Established with the vision of empowering the youth through cutting-edge technical education and holistic academic frameworks, our institute bridges the gap between traditional learning and modern industry demands. We offer comprehensive undergraduate and professional degree programs spanning Computer Applications (BCA), Commerce, Science, Arts, and Teacher Education.
                        </p>

                        <h3>Our Vision & Mission</h3>
                        <p>
                            <strong>Vision:</strong> To cultivate a vibrant academic ecosystem driven by innovation, research, ethical values, and global competence, nurturing leaders who can transform society.
                        </p>
                        <p>
                            <strong>Mission:</strong> To provide accessible, world-class education, foster critical thinking and practical problem-solving skills, and establish strong collaborations with industry leaders for unmatched career pathways.
                        </p>

                        <h3>Infrastructure & Facilities</h3>
                        <p>
                            Our campus is equipped with state-of-the-art computer labs, high-speed connectivity, an expansive digital and physical library, dedicated spaces for research and development, and sports infrastructure that ensures all-round student development.
                        </p>
                    </div>

                    <div className="about-image-col">
                        <div className="sticky-img-card">
                            <img src="/college .png" alt="College Campus" />
                            <h4>Excellence in Education</h4>
                            <p>Committed to shaping future technocrats and scholars.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}