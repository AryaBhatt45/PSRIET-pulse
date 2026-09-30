import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/AdminDashboard.css';

export default function AdminDashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isAdminAuthenticated");
        navigate('/admin/login');
    };

    return (
        <div className="admin-dashboard-wrapper">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-brand">
                    <h3>PTSRIET Admin</h3>
                    <span>Control Center</span>
                </div>
                <ul className="sidebar-menu">
                    <li className="active">📊 Overview</li>
                    <li>🎓 Manage Students</li>
                    <li>📢 Post Notices</li>
                    <li>📝 Update Results</li>
                    <li>⚙️ System Settings</li>
                </ul>
                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="logout-btn">
                        🚪 Logout Admin
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="admin-main-content">
                <header className="admin-topbar">
                    <h2>Welcome, Administrator</h2>
                    <div className="admin-profile-badge">
                        <span>🟢 System Secure</span>
                    </div>
                </header>

                <div className="admin-stats-grid">
                    <div className="stat-card">
                        <h4>Total Students</h4>
                        <h2>1,240</h2>
                    </div>
                    <div className="stat-card">
                        <h4>Active Courses</h4>
                        <h2>10+</h2>
                    </div>
                    <div className="stat-card">
                        <h4>Pending Results</h4>
                        <h2>3</h2>
                    </div>
                </div>

                <div className="admin-action-section">
                    <h3>Quick Management Panel</h3>
                    <p>Select a module from the sidebar or manage portal updates directly from here.</p>
                    {/* Yahan apne specific admin features add kar sakte ho baad mein */}
                </div>
            </main>
        </div>
    );
}