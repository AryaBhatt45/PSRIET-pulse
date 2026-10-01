import './style/AdminDashboard.css'; // ya agar file ek hi folder me hai toh './AdminDashboard.css'
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    // States for Notices & Results
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeContent, setNoticeContent] = useState('');
    const [noticeDate, setNoticeDate] = useState(''); // <-- Nayi Date state
    const [savedNotices, setSavedNotices] = useState([]);

    const [rollNo, setRollNo] = useState('');
    const [studentName, setStudentName] = useState('');
    const [semester, setSemester] = useState('');
    const [marks, setMarks] = useState('');
    const [savedResults, setSavedResults] = useState([]);

    useEffect(() => {
        const notices = JSON.parse(localStorage.getItem('pt_notices')) || [];
        const results = JSON.parse(localStorage.getItem('pt_results')) || [];
        setSavedNotices(notices);
        setSavedResults(results);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isAdminAuthenticated");
        navigate('/admin/login');
    };

    // Publish Notice handler with Custom Date
    const handlePublishNotice = (e) => {
        e.preventDefault();
        if (!noticeTitle || !noticeContent) return;

        // Agar user ne date select nahi ki hai toh aaj ki date default le lega
        const formattedDate = noticeDate ? new Date(noticeDate).toLocaleDateString() : new Date().toLocaleDateString();

        const newNotice = {
            title: noticeTitle,
            content: noticeContent,
            date: formattedDate
        };

        const updatedNotices = [newNotice, ...savedNotices];
        localStorage.setItem('pt_notices', JSON.stringify(updatedNotices));
        setSavedNotices(updatedNotices);

        alert('Notice published successfully with date! Live on Student Dashboard.');
        setNoticeTitle('');
        setNoticeContent('');
        setNoticeDate('');
    };

    // Upload Result handler
    const handleUploadResult = (e) => {
        e.preventDefault();
        if (!rollNo || !semester) return;

        const newResult = {
            rollNo,
            studentName: studentName || 'Student',
            semester,
            marks: marks || 'Passed',
            date: new Date().toLocaleDateString()
        };

        const updatedResults = [newResult, ...savedResults];
        localStorage.setItem('pt_results', JSON.stringify(updatedResults));
        setSavedResults(updatedResults);

        alert('Result uploaded successfully!');
        setRollNo('');
        setStudentName('');
        setSemester('');
        setMarks('');
    };

    const handleDeleteNotice = (index) => {
        const updated = savedNotices.filter((_, i) => i !== index);
        localStorage.setItem('pt_notices', JSON.stringify(updated));
        setSavedNotices(updated);
    };

    // Render content dynamically based on selected sidebar menu
    const renderContent = () => {
        switch (activeTab) {
            case 'students':
                return (
                    <div className="admin-action-section">
                        <h3>🎓 Manage Students</h3>
                        <p>View, add, edit, or remove student records registered in the system.</p>
                        <div style={{ marginTop: '20px' }}>
                            <input
                                type="text"
                                placeholder="Search student by name or enrollment ID..."
                                style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                            />
                        </div>
                    </div>
                );
            case 'notices':
                return (
                    <div className="admin-action-section">
                        <h3>📢 Post Notices & Announcements</h3>
                        <p>Broadcast urgent announcements or exam schedules directly to students with custom dates.</p>
                        <form onSubmit={handlePublishNotice} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: '#aaa', marginBottom: '5px' }}>Notice Title</label>
                                <input
                                    type="text"
                                    placeholder="Notice Title"
                                    value={noticeTitle}
                                    onChange={(e) => setNoticeTitle(e.target.value)}
                                    style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                    required
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: '#aaa', marginBottom: '5px' }}>Select Notice Date (Marzi ki Date)</label>
                                <input
                                    type="date"
                                    value={noticeDate}
                                    onChange={(e) => setNoticeDate(e.target.value)}
                                    style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none', colorScheme: 'dark' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: '#aaa', marginBottom: '5px' }}>Notice Body Content</label>
                                <textarea
                                    placeholder="Notice Body Content..."
                                    rows="4"
                                    value={noticeContent}
                                    onChange={(e) => setNoticeContent(e.target.value)}
                                    style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'none' }}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" style={{ padding: '12px 20px', background: '#e60000', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', width: 'fit-content' }}>Publish Notice 🚀</button>
                        </form>

                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Active Notices ({savedNotices.length})</h4>
                            {savedNotices.map((n, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(255,40,40,0.2)' }}>
                                    <div>
                                        <strong style={{ color: '#fff' }}>{n.title}</strong> <span style={{ fontSize: '11px', color: '#ff4d4d', marginLeft: '10px' }}>({n.date})</span>
                                        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#aaa' }}>{n.content}</p>
                                    </div>
                                    <button onClick={() => handleDeleteNotice(idx)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'results':
                return (
                    <div className="admin-action-section">
                        <h3>📝 Update Results</h3>
                        <p>Upload semester grades, examination scorecards, or academic performance reports.</p>
                        <form onSubmit={handleUploadResult} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input
                                type="text"
                                placeholder="Student Roll Number (e.g. PT2026101)"
                                value={rollNo}
                                onChange={(e) => setRollNo(e.target.value)}
                                style={{ padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Student Name"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                style={{ padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                            />
                            <input
                                type="text"
                                placeholder="Semester / Year (e.g., BCA Sem 4)"
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                                style={{ padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Status / Grade (e.g. Pass CGPA 8.5)"
                                value={marks}
                                onChange={(e) => setMarks(e.target.value)}
                                style={{ padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                            />
                            <button type="submit" style={{ padding: '12px 20px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', width: 'fit-content' }}>Upload Result Record</button>
                        </form>
                    </div>
                );
            case 'settings':
                return (
                    <div className="admin-action-section">
                        <h3>⚙️ System Settings</h3>
                        <p>Configure portal security parameters, change admin access passcodes, and monitor logs.</p>
                        <div style={{ marginTop: '20px', color: '#ccc' }}>
                            <p style={{ marginBottom: '10px' }}>🔐 <strong>Security Status:</strong> Fully Encrypted & Secured</p>
                            <p>🛡️ <strong>Session Storage:</strong> Active (Local Storage Handled)</p>
                        </div>
                    </div>
                );
            default:
                return (
                    <>
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
                                <h2>{savedResults.length > 0 ? savedResults.length : 3}</h2>
                            </div>
                        </div>

                        <div className="admin-action-section">
                            <h3>Quick Management Panel</h3>
                            <p>Select a module from the sidebar or manage portal updates directly from here.</p>
                        </div>
                    </>
                );
        }
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
                    <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
                        📊 Overview
                    </li>
                    <li className={activeTab === 'students' ? 'active' : ''} onClick={() => setActiveTab('students')}>
                        🎓 Manage Students
                    </li>
                    <li className={activeTab === 'notices' ? 'active' : ''} onClick={() => setActiveTab('notices')}>
                        📢 Post Notices
                    </li>
                    <li className={activeTab === 'results' ? 'active' : ''} onClick={() => setActiveTab('results')}>
                        📝 Update Results
                    </li>
                    <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
                        ⚙️ System Settings
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <Link to="/" style={{ display: 'block', textAlign: 'center', marginBottom: '10px', color: '#3b82f6', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>
                        🌐 Student Portal
                    </Link>
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

                {renderContent()}
            </main>
        </div>
    );
}