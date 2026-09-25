import React from 'react';
import CollegeGlory from '../components/CollegeGlory.jsx';
import CourseCard from '../components/CourseCard.jsx';
import Navbar from '../components/Navbar.jsx';
import UpdatesList from '../components/UpdatesList.jsx';
import { courses } from '../data/courses.js';

const Home = () => (
  <>
    <Navbar />
    <main className="page-shell home-page">
      <CollegeGlory />
      <UpdatesList />
      <section className="course-section" aria-labelledby="courses-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Academic pathways</p><h2 id="courses-heading">Explore degree programs</h2></div>
          <span className="course-count">{courses.length} programs</span>
        </div>
        <div className="course-grid">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
      </section>
    </main>
    <footer className="site-footer">PTSRIET Pulse <span>•</span> Student academic portal</footer>
  </>
);

export default Home;