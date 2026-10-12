import './style/AdminDashboard.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    createPortalRecord,
    deletePortalRecord,
    fetchPortalRecords,
    portalRecordTypes,
    updatePortalRecord
} from '../services/portalData';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');
    const [dataError, setDataError] = useState('');

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
    const [savedEnquiries, setSavedEnquiries] = useState([]);
    const [opportunityType, setOpportunityType] = useState('job');
    const [opportunityRole, setOpportunityRole] = useState('');
    const [opportunityCompany, setOpportunityCompany] = useState('');
    const [opportunityLink, setOpportunityLink] = useState('');
    const [opportunityLastDate, setOpportunityLastDate] = useState('');
    const [opportunityDescription, setOpportunityDescription] = useState('');
    const [opportunityEligibility, setOpportunityEligibility] = useState('');
    const [opportunityExperience, setOpportunityExperience] = useState('');
    const [savedJobs, setSavedJobs] = useState([]);
    const [savedInternships, setSavedInternships] = useState([]);
    const [certificationClaims, setCertificationClaims] = useState([]);
    const [certificationClaimsError, setCertificationClaimsError] = useState('');
    const [claimPhoto, setClaimPhoto] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const loadPortalData = async () => {
            try {
                const [
                    notices,
                    events,
                    results,
                    students,
                    enquiries,
                    jobs,
                    internships,
                    claims
                ] = await Promise.all([
                    fetchPortalRecords(portalRecordTypes.notice),
                    fetchPortalRecords(portalRecordTypes.event),
                    fetchPortalRecords(portalRecordTypes.result),
                    fetchPortalRecords(portalRecordTypes.student),
                    fetchPortalRecords(portalRecordTypes.enquiry),
                    fetchPortalRecords(portalRecordTypes.job),
                    fetchPortalRecords(portalRecordTypes.internship),
                    fetchPortalRecords(portalRecordTypes.certificationClaim)
                ]);

                if (!isMounted) return;
                setSavedNotices(notices);
                setSavedEvents(events);
                setSavedResults(results);
                setSavedStudents(students);
                setSavedEnquiries(enquiries);
                setSavedJobs(jobs);
                setSavedInternships(internships);
                setCertificationClaims(claims);
                setCertificationClaimsError('');
                setDataError('');
            } catch (error) {
                console.error('Unable to load admin portal data from Supabase.', error);
                if (isMounted) {
                    setDataError(error.message || 'Unable to load portal data from Supabase.');
                    setCertificationClaimsError(error.message || 'Unable to load certification claims.');
                }
            }
        };

        loadPortalData();
        return () => { isMounted = false; };
    }, []);

    const handleLogout = async () => {
        try {
            await signOut();
            navigate('/admin/login');
        } catch (error) {
            console.error('Unable to sign out administrator.', error);
            alert(error.message || 'Unable to log out. Please try again.');
        }
    };

    const handleApproveCertificationClaim = async (claim) => {
        const confirmed = window.confirm(`Mark ${claim.fullName}'s contribution claim as approved? No certificate or email will be sent.`);
        if (!confirmed) return;

        try {
            const updatedClaim = { ...claim, status: 'approved', reviewedAt: new Date().toISOString() };
            const { id, createdAt, ...payload } = updatedClaim;
            await updatePortalRecord(portalRecordTypes.certificationClaim, id, payload);
            setCertificationClaims((claims) => claims.map((entry) => entry.id === id ? updatedClaim : entry));
            window.alert('Claim marked approved. No certificate or email was sent.');
        } catch (error) {
            console.error('Unable to approve certification claim in Supabase.', error);
            window.alert(error.message || 'Unable to save the claim status.');
        }
    };

    const handleViewClaimPhoto = (claim) => {
        if (claim.photoDataUrl) {
            setClaimPhoto({ url: claim.photoDataUrl, fullName: claim.fullName });
        }
    };

    const handlePublishNotice = async (e) => {
        e.preventDefault();
        if (!noticeTitle || !noticeContent) return;

        const formattedDate = noticeDate ? new Date(noticeDate).toLocaleDateString() : new Date().toLocaleDateString();
        try {
            const notice = await createPortalRecord(portalRecordTypes.notice, {
                title: noticeTitle,
                content: noticeContent,
                date: formattedDate
            });
            setSavedNotices((entries) => [notice, ...entries]);
            alert('Notice published successfully!');
            setNoticeTitle('');
            setNoticeContent('');
            setNoticeDate('');
        } catch (error) {
            console.error('Unable to publish notice to Supabase.', error);
            alert(error.message || 'Unable to publish the notice.');
        }
    };

    const handleDeleteNotice = async (notice) => {
        try {
            await deletePortalRecord(portalRecordTypes.notice, notice.id);
            setSavedNotices((entries) => entries.filter((entry) => entry.id !== notice.id));
        } catch (error) {
            console.error('Unable to delete notice from Supabase.', error);
            alert(error.message || 'Unable to delete the notice.');
        }
    };

    const handlePublishEvent = async (e) => {
        e.preventDefault();
        if (!eventTitle || !eventContent) return;

        const formattedDate = eventDate ? new Date(eventDate).toLocaleDateString() : new Date().toLocaleDateString();
        try {
            const newEvent = await createPortalRecord(portalRecordTypes.event, {
            title: eventTitle,
            content: eventContent,
            date: formattedDate,
            tag: eventTag || 'NEW LIVE',
            location: 'PTSRIET Portal'
            });
            setSavedEvents((entries) => [newEvent, ...entries]);
            alert('Event / Update added successfully!');
            setEventTitle('');
            setEventContent('');
            setEventDate('');
        } catch (error) {
            console.error('Unable to publish event to Supabase.', error);
            alert(error.message || 'Unable to publish the event.');
        }
    };

    const handleDeleteEvent = async (event) => {
        try {
            await deletePortalRecord(portalRecordTypes.event, event.id);
            setSavedEvents((entries) => entries.filter((entry) => entry.id !== event.id));
        } catch (error) {
            console.error('Unable to delete event from Supabase.', error);
            alert(error.message || 'Unable to delete the event.');
        }
    };

    const handleUploadResult = async (e) => {
        e.preventDefault();
        if (!rollNo || !semester) return;

        try {
            const result = await createPortalRecord(portalRecordTypes.result, {
                rollNo,
                studentName: studentName || 'Student',
                semester,
                marks: marks || 'Passed',
                date: new Date().toLocaleDateString()
            });
            setSavedResults((entries) => [result, ...entries]);
            alert('Result uploaded successfully!');
            setRollNo('');
            setStudentName('');
            setSemester('');
            setMarks('');
        } catch (error) {
            console.error('Unable to upload result to Supabase.', error);
            alert(error.message || 'Unable to upload the result.');
        }
    };

    const handleDeleteResult = async (result) => {
        try {
            await deletePortalRecord(portalRecordTypes.result, result.id);
            setSavedResults((entries) => entries.filter((entry) => entry.id !== result.id));
        } catch (error) {
            console.error('Unable to delete result from Supabase.', error);
            alert(error.message || 'Unable to delete the result.');
        }
    };

    const handleAddStudent = async (e) => {
        e.preventDefault();
        if (!newName || !newRollNo) return;

        try {
            const student = await createPortalRecord(portalRecordTypes.student, {
                name: newName,
                rollNo: newRollNo,
                course: newCourse,
                date: new Date().toLocaleDateString()
            });
            setSavedStudents((entries) => [student, ...entries]);
            alert('Student registered successfully!');
            setNewName('');
            setNewRollNo('');
        } catch (error) {
            console.error('Unable to register student in Supabase.', error);
            alert(error.message || 'Unable to register the student.');
        }
    };

    const handleDeleteStudent = async (student) => {
        try {
            await deletePortalRecord(portalRecordTypes.student, student.id);
            setSavedStudents((entries) => entries.filter((entry) => entry.id !== student.id));
        } catch (error) {
            console.error('Unable to delete student from Supabase.', error);
            alert(error.message || 'Unable to remove the student.');
        }
    };

    const handleDeleteEnquiry = async (enquiry) => {
        try {
            await deletePortalRecord(portalRecordTypes.enquiry, enquiry.id);
            setSavedEnquiries((entries) => entries.filter((entry) => entry.id !== enquiry.id));
        } catch (error) {
            console.error('Unable to delete enquiry from Supabase.', error);
            alert(error.message || 'Unable to delete the enquiry.');
        }
    };

    const handlePublishOpportunity = async (e) => {
        e.preventDefault();
        const role = opportunityRole.trim();
        const company = opportunityCompany.trim();
        const description = opportunityDescription.trim();
        const applyLink = opportunityLink.trim();

        const eligibility = opportunityEligibility.trim();
        const experience = opportunityExperience.trim();

        if (!role || !company || !description || !opportunityLastDate || !applyLink || !eligibility || !experience) return;

        let url;
        try {
            url = new URL(applyLink);
        } catch {
            alert('Enter a valid external application URL.');
            return;
        }

        if (url.protocol !== 'https:' && url.protocol !== 'http:') {
            alert('The application URL must use HTTP or HTTPS.');
            return;
        }

        try {
            const type = opportunityType === 'internship' ? portalRecordTypes.internship : portalRecordTypes.job;
            const opportunity = await createPortalRecord(type, {
                role,
                company,
                applyLink,
                lastDate: opportunityLastDate,
                description,
                eligibility,
                experience
            });
            if (opportunityType === 'internship') setSavedInternships((entries) => [opportunity, ...entries]);
            else setSavedJobs((entries) => [opportunity, ...entries]);
            setOpportunityRole('');
            setOpportunityCompany('');
            setOpportunityLink('');
            setOpportunityLastDate('');
            setOpportunityDescription('');
            setOpportunityEligibility('');
            setOpportunityExperience('');
            alert(`${opportunityType === 'internship' ? 'Internship' : 'Job'} published successfully!`);
        } catch (error) {
            console.error('Unable to publish opportunity to Supabase.', error);
            alert(error.message || 'Unable to save this opportunity.');
        }
    };

    const handleDeleteOpportunity = async (type, opportunity) => {
        try {
            const recordType = type === 'internship' ? portalRecordTypes.internship : portalRecordTypes.job;
            await deletePortalRecord(recordType, opportunity.id);
            if (type === 'internship') {
                setSavedInternships((entries) => entries.filter((entry) => entry.id !== opportunity.id));
            } else {
                setSavedJobs((entries) => entries.filter((entry) => entry.id !== opportunity.id));
            }
        } catch (error) {
            console.error('Unable to delete opportunity from Supabase.', error);
            alert(error.message || 'Unable to delete this opportunity.');
        }
    };

    const filteredStudents = savedStudents.filter(s =>
        s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
        s.rollNo.toLowerCase().includes(studentSearch.toLowerCase())
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'enquiries':
                return (
                    <div className="admin-action-section">
                        <h3>📥 Admission Enquiries & Callbacks ({savedEnquiries.length})</h3>
                        <p>Students who filled out the "Want to Join PTSRIET?" form on the homepage requesting a callback.</p>

                        <div style={{ marginTop: '20px' }}>
                            {savedEnquiries.length > 0 ? (
                                savedEnquiries.map((enq) => (
                                    <div key={enq.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '8px', marginBottom: '12px', border: '1px solid rgba(59,130,246,0.3)' }}>
                                        <div>
                                            <strong style={{ color: '#fff', fontSize: '16px' }}>{enq.name || 'N/A'}</strong>
                                            <span style={{ fontSize: '12px', background: '#3b82f6', color: '#fff', padding: '2px 8px', borderRadius: '4px', marginLeft: '10px' }}>
                                                {enq.course || 'Selected Course'}
                                            </span>
                                            <p style={{ margin: '6px 0 0', fontSize: '14px', color: '#38bdf8' }}>
                                                📞 Phone: <a href={`tel:${enq.phone}`} style={{ color: '#38bdf8', textDecoration: 'underline' }}>{enq.phone || 'N/A'}</a>
                                            </p>
                                            <span style={{ fontSize: '11px', color: '#888' }}>Requested on: {enq.date || 'Recent'}</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <a href={`tel:${enq.phone}`} style={{ background: '#10b981', color: '#fff', padding: '6px 12px', borderRadius: '6px', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Call Now</a>
                                            <button onClick={() => handleDeleteEnquiry(enq)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p style={{ color: '#888', fontSize: '14px', marginTop: '20px' }}>No admission callback requests yet.</p>
                            )}
                        </div>
                    </div>
                );
            case 'certifications':
                return (
                    <div className="admin-action-section">
                        <h3>🏅 BCA Certification Claims ({certificationClaims.length})</h3>
                        <p>Review certification claims submitted by signed-in users. Approving a claim does not send a certificate or email.</p>
                        {certificationClaimsError && <p className="admin-certification-error" role="alert">{certificationClaimsError}</p>}
                        {!certificationClaimsError && certificationClaims.length === 0 && (
                            <p className="admin-certification-empty">No certification claims have been submitted yet.</p>
                        )}
                        <div className="admin-certification-list">
                            {certificationClaims.map((claim) => (
                                <article className="admin-certification-claim" key={claim.id}>
                                    <div className="admin-certification-claim-header">
                                        <div>
                                            <h4>{claim.fullName}</h4>
                                            <a href={`mailto:${claim.email}`}>{claim.email}</a>
                                        </div>
                                        <span className={`admin-certification-status is-${claim.status}`}>{claim.status}</span>
                                    </div>
                                    <dl>
                                        <div><dt>OFF username</dt><dd>{claim.offUsername || 'Not provided'}</dd></div>
                                        <div><dt>GitHub username</dt><dd>{claim.githubUsername || 'Not provided'}</dd></div>
                                        <div><dt>Contribution type</dt><dd>{claim.contributionType}</dd></div>
                                        <div><dt>Code of Conduct and Licensing</dt><dd>{claim.agreementAccepted ? 'Accepted' : 'Not accepted'}</dd></div>
                                        <div><dt>Request receipt email</dt><dd>Not sent</dd></div>
                                        <div><dt>Certificate email</dt><dd>Not sent</dd></div>
                                        <div><dt>Submitted</dt><dd>{new Date(claim.createdAt).toLocaleString()}</dd></div>
                                        {claim.reviewedAt && <div><dt>Reviewed</dt><dd>{new Date(claim.reviewedAt).toLocaleString()}</dd></div>}
                                    </dl>
                                    <div className="admin-certification-actions">
                                        {claim.photoDataUrl && (
                                            <button type="button" onClick={() => handleViewClaimPhoto(claim)}>View uploaded photo</button>
                                        )}
                                        <button type="button" onClick={() => handleApproveCertificationClaim(claim)} disabled={claim.status === 'approved'}>
                                            {claim.status === 'approved' ? 'Approved' : 'Mark as approved'}
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                        {claimPhoto && (
                            <div className="admin-certification-photo-modal" role="dialog" aria-modal="true" aria-label={`${claimPhoto.fullName}'s uploaded photo`}>
                                <button type="button" onClick={() => setClaimPhoto(null)}>Close</button>
                                <img src={claimPhoto.url} alt={`${claimPhoto.fullName}'s submitted photo`} />
                            </div>
                        )}
                    </div>
                );
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
                                filteredStudents.map((st) => (
                                    <div key={st.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(255,40,40,0.2)' }}>
                                        <div>
                                            <strong style={{ color: '#fff' }}>{st.name}</strong> <span style={{ fontSize: '12px', color: '#3b82f6', marginLeft: '10px' }}>[{st.course}]</span>
                                            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#aaa' }}>Roll No: {st.rollNo} | Added: {st.date}</p>
                                        </div>
                                        <button onClick={() => handleDeleteStudent(st)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Remove</button>
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
                            {savedNotices.map((n) => (
                                <div key={n.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(255,40,40,0.2)' }}>
                                    <div>
                                        <strong style={{ color: '#fff' }}>{n.title}</strong> <span style={{ fontSize: '11px', color: '#ff4d4d', marginLeft: '10px' }}>({n.date})</span>
                                        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#aaa' }}>{n.content}</p>
                                    </div>
                                    <button onClick={() => handleDeleteNotice(n)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'events':
                return (
                    <div className="admin-action-section">
                        <h3>🗓️ Manage Upcoming Events & Updates</h3>
                        <p>Create cards for the homepage live updates banner.</p>
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
                                        placeholder="e.g. NEW LIVE"
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
                            {savedEvents.map((ev) => (
                                <div key={ev.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(59,130,246,0.3)' }}>
                                    <div>
                                        <strong style={{ color: '#fff' }}>{ev.title}</strong> <span style={{ fontSize: '11px', background: '#3b82f6', color: '#fff', padding: '2px 6px', borderRadius: '4px', marginLeft: '10px' }}>{ev.tag}</span>
                                        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#aaa' }}>{ev.content}</p>
                                        <span style={{ fontSize: '11px', color: '#888' }}>Date: {ev.date}</span>
                                    </div>
                                    <button onClick={() => handleDeleteEvent(ev)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'opportunities':
                return (
                    <div className="admin-action-section">
                        <h3>💼 Manage BCA Jobs &amp; Internships</h3>
                        <p>Publish opportunities for the live ticker on the BCA page.</p>
                        <form className="admin-opportunity-form" onSubmit={handlePublishOpportunity}>
                            <select value={opportunityType} onChange={(e) => setOpportunityType(e.target.value)}>
                                <option value="job">Job</option>
                                <option value="internship">Internship</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Job or internship role"
                                value={opportunityRole}
                                onChange={(e) => setOpportunityRole(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Company name"
                                value={opportunityCompany}
                                onChange={(e) => setOpportunityCompany(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Eligibility (e.g., BCA / B.Tech / Final Year)"
                                value={opportunityEligibility}
                                onChange={(e) => setOpportunityEligibility(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Experience (e.g., Fresher / 1+ Years)"
                                value={opportunityExperience}
                                onChange={(e) => setOpportunityExperience(e.target.value)}
                                required
                            />
                            <input
                                type="url"
                                placeholder="External application link (https://...)"
                                value={opportunityLink}
                                onChange={(e) => setOpportunityLink(e.target.value)}
                                required
                            />
                            <label>
                                Last date to apply
                                <input
                                    type="date"
                                    value={opportunityLastDate}
                                    onChange={(e) => setOpportunityLastDate(e.target.value)}
                                    required
                                />
                            </label>
                            <textarea
                                placeholder="Short description"
                                rows="3"
                                value={opportunityDescription}
                                onChange={(e) => setOpportunityDescription(e.target.value)}
                                required
                            />
                            <button type="submit">Publish Opportunity</button>
                        </form>

                        {[
                            { type: 'job', title: 'Active Jobs', entries: savedJobs },
                            { type: 'internship', title: 'Active Internships', entries: savedInternships }
                        ].map(({ type, title, entries }) => (
                            <div className="admin-opportunity-list" key={type}>
                                <h4>{title} ({entries.length})</h4>
                                {entries.map((entry) => (
                                    <div className="admin-opportunity-item" key={entry.id}>
                                        <div>
                                            <strong>{entry.role || entry.title}</strong>
                                            <p className="admin-opportunity-company">{entry.company || 'Company not specified'}</p>
                                            <p>{entry.description || entry.intro || entry.content}</p>
                                            <span>Eligibility: {entry.eligibility || 'Not specified'} · Experience: {entry.experience || 'Not specified'}</span>
                                            <br />
                                            <span>Last date: {entry.lastDate || entry.deadline || entry.date}</span>
                                        </div>
                                        <button type="button" onClick={() => handleDeleteOpportunity(type, entry)}>Delete</button>
                                    </div>
                                ))}
                            </div>
                        ))}
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
                                savedResults.map((res) => (
                                    <div key={res.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(16,185,129,0.3)' }}>
                                        <div>
                                            <strong style={{ color: '#fff' }}>{res.studentName}</strong> <span style={{ fontSize: '12px', color: '#10b981', marginLeft: '10px' }}>[{res.semester}]</span>
                                            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#aaa' }}>Roll No: {res.rollNo} | Marks/Grade: {res.marks}</p>
                                        </div>
                                        <button onClick={() => handleDeleteResult(res)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
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
                        <p>Configure portal security parameters and monitor admin activity.</p>
                        <div style={{ marginTop: '20px', color: '#ccc' }}>
                            <p style={{ marginBottom: '10px' }}>🔐 <strong>Security Status:</strong> Fully Encrypted & Secured</p>
                            <p>🛡 <strong>Data Storage:</strong> Supabase PostgreSQL with row-level security</p>
                        </div>
                    </div>
                );
            default:
                return (
                    <>
                        <div className="admin-stats-grid">
                            <div className="stat-card" onClick={() => setActiveTab('enquiries')} style={{ cursor: 'pointer' }}>
                                <h4>Admission Enquiries</h4>
                                <h2>{savedEnquiries.length}</h2>
                            </div>
                            <div className="stat-card">
                                <h4>Total Students</h4>
                                <h2>{savedStudents.length}</h2>
                            </div>
                            <div className="stat-card">
                                <h4>Active Events</h4>
                                <h2>{savedEvents.length}</h2>
                            </div>
                        </div>

                        <div className="admin-action-section">
                            <h3>Quick Management Panel</h3>
                            <p>Select **📥 Admission Enquiries** from the left sidebar to check who requested a callback from the homepage form!</p>
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
                    <li className={activeTab === 'enquiries' ? 'active' : ''} onClick={() => setActiveTab('enquiries')}>
                        📥 Admission Enquiries ({savedEnquiries.length})
                    </li>
                    <li className={activeTab === 'certifications' ? 'active' : ''} onClick={() => setActiveTab('certifications')}>
                        🏅 Certification Claims ({certificationClaims.length})
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
                    <li className={activeTab === 'opportunities' ? 'active' : ''} onClick={() => setActiveTab('opportunities')}>
                        💼 Jobs &amp; Internships
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

                {dataError && <p role="alert" className="admin-certification-error">{dataError}</p>}
                {renderContent()}
            </main>
        </div>
    );
}