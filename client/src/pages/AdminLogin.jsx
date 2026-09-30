import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/AdminLogin.css';

export default function AdminLogin() {
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAdminLogin = (e) => {
        e.preventDefault();
        if (passcode === "ptsriet@admin2026") {
            localStorage.setItem("isAdminAuthenticated", "true");
            navigate('/admin/dashboard');
        } else {
            setError('⚠️ Invalid Admin Passcode!');
        }
    };

    return (
        <div className="admin-login-body">
            <div className="container">
                <div className="login-box">
                    <form onSubmit={handleAdminLogin}>
                        <h2>Admin Login</h2>

                        <div className="input-box">
                            <span className="icon"><i className="fa-solid fa-lock"></i></span>
                            <input
                                type="password"
                                value={passcode}
                                onChange={(e) => setPasscode(e.target.value)}
                                required
                            />
                            <label className={passcode ? 'active' : ''}>Admin Passcode</label>
                        </div>

                        {error && <p style={{ color: '#ff4d4d', fontSize: '0.85em', marginBottom: '10px', textAlign: 'center' }}>{error}</p>}

                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Remember me</label>
                            <a href="#" onClick={(e) => { e.preventDefault(); alert("Contact Admin"); }}>Forgot Password?</a>
                        </div>

                        <button type="submit">Login</button>

                        <div className="register-link">
                            <p><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>← Back to Home</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}