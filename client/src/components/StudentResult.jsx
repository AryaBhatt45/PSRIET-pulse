import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchStudentResult } from '../services/portalData';

export default function StudentResult() {
    const [rollNoInput, setRollNoInput] = useState('');
    const [searchedResult, setSearchedResult] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [searchError, setSearchError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!rollNoInput.trim()) return;

        setIsSearching(true);
        setHasSearched(false);
        setSearchedResult(null);
        setSearchError('');
        try {
            const result = await fetchStudentResult(rollNoInput);
            setSearchedResult(result || null);
            setHasSearched(true);
        } catch (error) {
            console.error('Unable to search student result in Supabase.', error);
            setSearchError(error.message || 'Unable to search results right now.');
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', background: '#050505', color: '#f3f4f6', padding: '30px', fontFamily: '"Montserrat", sans-serif', boxSizing: 'border-box' }}>
            <div style={{ maxWidth: '600px', margin: '40px auto', background: 'rgba(12, 6, 6, 0.75)', border: '1px solid rgba(255, 40, 40, 0.25)', padding: '30px', borderRadius: '14px', backdropFilter: 'blur(15px)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2 style={{ color: '#fff', margin: 0, fontSize: '20px' }}>🎓 Student Result Portal</h2>
                    <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>← Back to Portal</Link>
                </div>
                <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '25px' }}>
                    Enter your unique Roll Number provided by the administration to check your semester results instantly.
                </p>

                {/* Search Form */}
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
                    <input
                        type="text"
                        placeholder="Enter Roll Number (e.g. PT2026101)"
                        value={rollNoInput}
                        onChange={(e) => setRollNoInput(e.target.value)}
                        style={{ flex: 1, padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,40,40,0.3)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                        required
                    />
                    <button type="submit" disabled={isSearching} style={{ padding: '12px 20px', background: '#e60000', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                        {isSearching ? 'Searching...' : 'Search'}
                    </button>
                </form>

                {/* Result Display Section */}
                {searchError && <p role="alert" style={{ color: '#ef4444' }}>{searchError}</p>}
                {hasSearched && (
                    <div>
                        {searchedResult ? (
                            <div style={{ background: 'rgba(0,255,0,0.05)', border: '1px solid rgba(16,185,129,0.3)', padding: '20px', borderRadius: '10px' }}>
                                <h3 style={{ color: '#10b981', marginTop: '0', marginBottom: '15px', fontSize: '16px' }}>🎉 Result Record Found!</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14px', color: '#ddd' }}>
                                    <p style={{ margin: 0 }}><strong>Roll No:</strong> {searchedResult.rollNo}</p>
                                    <p style={{ margin: 0 }}><strong>Student Name:</strong> {searchedResult.studentName}</p>
                                    <p style={{ margin: 0 }}><strong>Semester:</strong> {searchedResult.semester}</p>
                                    <p style={{ margin: 0 }}><strong>Grade/Status:</strong> <span style={{ color: '#10b981', fontWeight: 'bold' }}>{searchedResult.marks}</span></p>
                                </div>
                                <p style={{ margin: '15px 0 0 0', fontSize: '12px', color: '#888' }}>Published Date: {searchedResult.date}</p>
                            </div>
                        ) : (
                            <div style={{ background: 'rgba(255,0,0,0.05)', border: '1px solid rgba(239,68,68,0.3)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                                <p style={{ color: '#ef4444', margin: 0, fontSize: '14px', fontWeight: '500' }}>
                                    ⚠️ No result found for Roll Number "{rollNoInput}". Please verify your roll number or contact the administrator.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}