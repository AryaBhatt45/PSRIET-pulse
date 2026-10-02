import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/AdminLogin.css';

export default function AdminLogin() {
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
                    <form onSubmit={handleAdminLogin} autoComplete="off">
                        <h2>Admin Login</h2>

                        {/* Yahan humne flexbox laga diya hai taaki input aur eye icon side-by-side ekdam fit aayein */}
                        <div className="input-box" style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <span className="icon" style={{ position: 'absolute', left: '15px', zIndex: '2' }}>
                                <i className="fa-solid fa-lock"></i>
                            </span>

                            <input
                                type={showPassword ? "text" : "password"}
                                value={passcode}
                                onChange={(e) => setPasscode(e.target.value)}
                                autoComplete="new-password"
                                name="random-admin-passcode-field"
                                required
                                style={{
                                    width: '100%',
                                    paddingLeft: '45px',
                                    paddingRight: '45px', // Icon ke liye jagah chhori hai
                                    boxSizing: 'border-box'
                                }}
                            />

                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    right: '15px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: '18px',
                                    background: 'transparent',
                                    border: 'none',
                                    zIndex: '99'
                                }}
                            >
                                {showPassword ? "👁️‍🗨️" : "👁️"}
                            </span>

                            <label className={passcode ? 'active' : ''} style={{ left: '45px' }}>Admin Passcode</label>
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