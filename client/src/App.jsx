import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import Footer from './components/Footer.jsx'; // <-- Yahan footer import kiya hai

function App() {
  return (
    <BrowserRouter>
      <div className="app-main-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {/* Footer ko BrowserRouter ke andar lekin Routes ke bahar rakha hai taaki ye har page par dikhe */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;