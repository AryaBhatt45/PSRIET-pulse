import './style/AdminDashboard.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    // States for Notices
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeContent, setNoticeContent] = useState('');
    const [noticeDate, setNoticeDate] = useState('');
    const [savedNotices, setSavedNotices] = useState([]);

    // States for Events & Updates
    const [eventTitle, setEventTitle] = useState('');
    const [eventContent, setEventContent] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTag, setEventTag] = useState('NEW LIVE');
    const [savedEvents, setSavedEvents] = useState([]);

    // States for Results & Students
    const [rollNo, setRollNo] = useState('');
    const [studentName, setStudentName] = useState('');
    const [semester, setSemester] = useState('');
    const [marks, setMarks] = useState('');
    const [savedResults, setSavedResults] = useState([]);

    const [savedStudents, setSavedStudents] = useState([]);
    const [newName, setNewName] = useState('');
    const [newRollNo, setNewRollNo] = useState('');
    const [newCourse, setNewCourse] = useState('BCA');
    const [studentSearch, setStudentSearch] = useState('');

    useEffect(() => {
        const notices = JSON.parse(localStorage.getItem('pt_notices')) || [];
        const events = JSON.parse(localStorage.getItem('pt_events')) || [];
        const results = JSON.parse(localStorage.getItem('pt_results')) || [];
        const students = JSON.parse(localStorage.getItem('pt_students')) || [];

        setSavedNotices(notices);
        setSavedEvents(events);
        setSavedResults(results);
        setSavedStudents(students);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isAdminAuthenticated");
        navigate('/admin/login');
    };

    const handlePublishNotice = (e) => {
        e.preventDefault();
        if (!noticeTitle || !noticeContent) return;

        const formattedDate = noticeDate ? new Date(noticeDate).toLocaleDateString() : new Date().toLocaleDateString();
        const newNotice = { title: noticeTitle, content: noticeContent, date: formattedDate };
        const updatedNotices = [newNotice, ...savedNotices];

        localStorage.setItem('pt_notices', JSON.stringify(updatedNotices));
        setSavedNotices(updatedNotices);
        alert('Notice published successfully!');
        setNoticeTitle('');
        setNoticeContent('');
        setNoticeDate('');
    };

    const handleDeleteNotice = (index) => {
        const updated = savedNotices.filter((_, i) => i !== index);
        localStorage.setItem('pt_notices', JSON.stringify(updated));
        setSavedNotices(updated);
    };

    const handlePublishEvent = (e) => {
        e.preventDefault();
        if (!eventTitle || !eventContent) return;

        const formattedDate = eventDate ? new Date(eventDate).toLocaleDateString() : new Date().toLocaleDateString();
        const newEvent = {
            title: eventTitle,
            content: eventContent,
            date: formattedDate,
            tag: eventTag || 'NEW LIVE',
            location: 'PTSRIET Portal'
        };
        const updatedEvents = [newEvent, ...savedEvents];

        localStorage.setItem('pt_events', JSON.stringify(updatedEvents));
        setSavedEvents(updatedEvents);
        alert('Event / Update added successfully!');
        setEventTitle('');
        setEventContent('');
        setEventDate('');
    };

    const handleDeleteEvent = (index) => {
        const updated = savedEvents.filter((_, i) => i !== index);
        localStorage.setItem('pt_events', JSON.stringify(updated));
        setSavedEvents(updated);
    };

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

    const handleAddStudent = (e) => {
        e.preventDefault();
        if (!newName || !newRollNo) return;

        const newStudent = {
            name: newName,
            rollNo: newRollNo,
            course: newCourse,
            date: new Date().toLocaleDateString()
        };

        const updatedStudents = [newStudent, ...savedStudents];
        localStorage.setItem('pt_students', JSON.stringify(updatedStudents));
        setSavedStudents(updatedStudents);
        alert('Student registered successfully!');
        setNewName('');
        setNewRollNo('');
    };

    const handleDeleteStudent = (index) => {
        const updated = savedStudents.filter((_, i) => i !== index);
        localStorage.setItem('pt_students', JSON.stringify(updated));
        setSavedStudents(updated);
    };

    const filteredStudents = savedStudents.filter(s =>
        s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
        s.rollNo.toLowerCase().includes(studentSearch.toLowerCase())
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'students':
                return (
                    <div className="admin-action-section">
                        <h3>🎓 Manage Students & Admissions</h3>
                        <p>Register new students into the portal or search existing records.</p>

                        <form onSubmit={handleAddStudent} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px', background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(255,40,40,0.2)' }}>
                            <h4 style={{ color: '#fff', margin: '0 0 5px 0' }}>Register New Student</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                                <input
                                    type="text"
                                    placeholder="Student Full Name"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    style={{ padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Roll Number / ID"
                                    value={newRollNo}
                                    onChange={(e) => setNewRollNo(e.target.value)}
                                    style={{ padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                    required
                                />
                                <select
                                    value={newCourse}
                                    onChange={(e) => setNewCourse(e.target.value)}
                                    style={{ padding: '12px', background: '#111', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                >
                                    <option value="BCA">BCA</option>
                                    <option value="BBA">BBA</option>
                                    <option value="B.Sc">B.Sc</option>
                                    <option value="B.Com">B.Com</option>
                                    <option value="BA">BA</option>
                                    <option value="B.Ed">B.Ed</option>
                                    <option value="LLB">LLB</option>
                                    <option value="D.El.Ed">D.El.Ed</option>
                                    <option value="M.A">M.A</option>
                                </select>
                            </div>
                            <button type="submit" style={{ padding: '10px 20px', background: '#e60000', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', width: 'fit-content' }}>Add Student 🚀</button>
                        </form>

                        <div style={{ marginTop: '30px' }}>
                            <input
                                type="text"
                                placeholder="Search student by name or roll number..."
                                value={studentSearch}
                                onChange={(e) => setStudentSearch(e.target.value)}
                                style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none', marginBottom: '15px' }}
                            />
                            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Registered Students ({filteredStudents.length})</h4>
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((st, idx) => (
                                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(255,40,40,0.2)' }}>
                                        <div>
                                            <strong style={{ color: '#fff' }}>{st.name}</strong> <span style={{ fontSize: '12px', color: '#3b82f6', marginLeft: '10px' }}>[{st.course}]</span>
                                            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#aaa' }}>Roll No: {st.rollNo} | Added: {st.date}</p>
                                        </div>
                                        <button onClick={() => handleDeleteStudent(idx)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                ))
                            ) : (
                                <p style={{ color: '#888', fontSize: '14px' }}>No student records found.</p>
                            )}
                        </div>
                    </div>
                );
            case 'notices':
                return (
                    <div className="admin-action-section">
                        <h3>📢 Post General Notices</h3>
                        <p>Broadcast standard examination notifications or college updates.</p>
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
                                <label style={{ display: 'block', fontSize: '13px', color: '#aaa', marginBottom: '5px' }}>Notice Date</label>
                                <input
                                    type="date"
                                    value={noticeDate}
                                    onChange={(e) => setNoticeDate(e.target.value)}
                                    style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none', colorScheme: 'dark' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: '#aaa', marginBottom: '5px' }}>Notice Content</label>
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
            case 'events':
                return (
                    <div className="admin-action-section">
                        <h3>🗓️ Manage Upcoming Events & Updates</h3>
                        <p>Create cards for the homepage live updates banner (e.g. TCS & Infosys drives, holidays, etc.).</p>
                        <form onSubmit={handlePublishEvent} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: '#aaa', marginBottom: '5px' }}>Event / Update Title</label>
                                <input
                                    type="text"
                                    placeholder="e.g. TCS & Infosys Mega Drive"
                                    value={eventTitle}
                                    onChange={(e) => setEventTitle(e.target.value)}
                                    style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                    required
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', color: '#aaa', marginBottom: '5px' }}>Date</label>
                                    <input
                                        type="date"
                                        value={eventDate}
                                        onChange={(e) => setEventDate(e.target.value)}
                                        style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none', colorScheme: 'dark' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', color: '#aaa', marginBottom: '5px' }}>Badge Tag</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. NEW LIVE or ADMIN BROADCAST"
                                        value={eventTag}
                                        onChange={(e) => setEventTag(e.target.value)}
                                        style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: '#aaa', marginBottom: '5px' }}>Event Details Description</label>
                                <textarea
                                    placeholder="Write details shown on the event card..."
                                    rows="4"
                                    value={eventContent}
                                    onChange={(e) => setEventContent(e.target.value)}
                                    style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'none' }}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" style={{ padding: '12px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', width: 'fit-content' }}>Post Event Card 🚀</button>
                        </form>

                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Active Event Cards ({savedEvents.length})</h4>
                            {savedEvents.map((ev, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(59,130,246,0.3)' }}>
                                    <div>
                                        <strong style={{ color: '#fff' }}>{ev.title}</strong> <span style={{ fontSize: '11px', background: '#3b82f6', color: '#fff', padding: '2px 6px', borderRadius: '4px', marginLeft: '10px' }}>{ev.tag}</span>
                                        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#aaa' }}>{ev.content}</p>
                                        <span style={{ fontSize: '11px', color: '#888' }}>Date: {ev.date}</span>
                                    </div>
                                    <button onClick={() => handleDeleteEvent(idx)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
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

                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Uploaded Results ({savedResults.length})</h4>
                            {savedResults.length > 0 ? (
                                savedResults.map((res, idx) => (
                                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(16,185,129,0.3)' }}>
                                        <div>
                                            <strong style={{ color: '#fff' }}>{res.studentName}</strong> <span style={{ fontSize: '12px', color: '#10b981', marginLeft: '10px' }}>[{res.semester}]</span>
                                            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#aaa' }}>Roll No: {res.rollNo} | Marks/Grade: {res.marks}</p>
                                        </div>
                                        <button onClick={() => {
                                            const updated = savedResults.filter((_, i) => i !== idx);
                                            localStorage.setItem('pt_results', JSON.stringify(updated));
                                            setSavedResults(updated);
                                        }} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
                                    </div>
                                ))
                            ) : (
                                <p style={{ color: '#888', fontSize: '14px' }}>No result records uploaded yet.</p>
                            )}
                        </div>
                    </div>
                );
            case 'settings':
                return (
                    <div className="admin-action-section">
                        <h3>⚙️ System Settings</h3>
                        <p>Configure portal security parameters, change admin access passcodes, and monitor logs.</p>
                        <div style={{ marginTop: '20px', color: '#ccc' }}>
                            <p style={{ marginBottom: '10px' }}>🔐 <strong>Security Status:</strong> Fully Encrypted & Secured</p>
                            <p>🛡 <strong>Session Storage:</strong> Active (Local Storage Handled)</p>
                        </div>
                    </div>
                );
            default:
                return (
                    <>
                        <div className="admin-stats-grid">
                            <div className="stat-card">
                                <h4>Total Students</h4>
                                <h2>{savedStudents.length}</h2>
                            </div>
                            <div className="stat-card">
                                <h4>Active Events</h4>
                                <h2>{savedEvents.length}</h2>
                            </div>
                            <div className="stat-card">
                                <h4>Uploaded Results</h4>
                                <h2>{savedResults.length}</h2>
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
                    <img src="/logo.png" alt="PTSRIET Pulse Logo" className="admin-brand-logo" />
                    <span className="control-center-badge">Control Center</span>
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
                    <li className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}>
                        🗓️ Manage Events
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