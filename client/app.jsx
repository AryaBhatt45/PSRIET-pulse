import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// app.jsx ke andar imports ko aise update karein:
import Dashboard from "./src/pages/Dashboard";
import BaPage from "./src/pages/ba";
import BbaPage from "./src/pages/bba";
import BcaPage from "./src/pages/bca";
import BcomPage from "./src/pages/bcom";
import BedPage from "./src/pages/bed";
import BscPage from "./src/pages/bsc";
import DledPage from "./src/pages/dled";
import LlbPage from "./src/pages/llb";
import MaPage from "./src/pages/ma";

function App() {
    return (
        <Router>
            <Routes>
                {/* Main Dashboard Page jahan glory slide aur sabhi courses ke buttons honge */}
                <Route path="/" element={<Dashboard />} />

                {/* Sabhi Courses ke alag-alag independent pages */}
                <Route path="/ba" element={<BaPage />} />
                <Route path="/bba" element={<BbaPage />} />
                <Route path="/bca" element={<BcaPage />} />
                <Route path="/bcom" element={<BcomPage />} />
                <Route path="/bed" element={<BedPage />} />
                <Route path="/bsc" element={<BscPage />} />
                <Route path="/dled" element={<DledPage />} />
                <Route path="/llb" element={<LlbPage />} />
                <Route path="/ma" element={<MaPage />} />
            </Routes>
        </Router>
    );
}

export default App;