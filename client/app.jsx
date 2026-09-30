import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main Portal & Courses Imports
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
import PrivacyPolicy from './src/pages/PrivacyPolicy';
import TermsConditions from './src/pages/TermsConditions';

// Admin Panel Imports & Protected Route
import AdminLogin from './src/pages/AdminLogin';
import AdminDashboard from './src/pages/AdminDashboard';
import ProtectedAdminRoute from './src/components/ProtectedAdminRoute';

function App() {
    return (
        <Router>
            <Routes>
                {/* Main Dashboard Page */}
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
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />

                {/* Separate Admin Panel Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedAdminRoute>
                            <AdminDashboard />
                        </ProtectedAdminRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;