import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isPortalAdmin, useAuth } from '../context/AuthContext';
import './style/AdminLogin.css';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { signInWithPassword, signOut } = useAuth();

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        try {
            const authResult = await signInWithPassword({ email, password });
            const authError = authResult?.error ?? authResult?.data?.error;

            if (authError) throw authError;

            const authenticatedUser = authResult?.user
                ?? authResult?.data?.user
                ?? authResult?.session?.user
                ?? authResult?.data?.session?.user;

            if (!authenticatedUser) {
                throw new Error('Sign-in succeeded, but Supabase did not return a user.');
            }

            if (!isPortalAdmin(authenticatedUser)) {
                await signOut();
                setError('This account is not authorized for administrator access.');
                return;
            }

            navigate('/admin/dashboard', { replace: true });
        } catch (authError) {
            console.error('Unable to sign in administrator.', authError);
            setError(authError.message || 'Unable to sign in. Check your credentials and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="admin-login-body">
            <div className="container">
                <div className="login-box">
                    <form onSubmit={handleAdminLogin} autoComplete="on">
                        <h2>Admin Login</h2>

                        <div className="input-box" style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="username"
                                name="email"
                                required
                            />
                            <label className={email ? 'active' : ''}>Administrator email</label>
                        </div>
                        <div className="input-box" style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                name="password"
                                required
                            />
                            <label className={password ? 'active' : ''}>Password</label>
                        </div>

                        {error && <p style={{ color: '#ff4d4d', fontSize: '0.85em', marginBottom: '10px', textAlign: 'center' }}>{error}</p>}

                        <div className="remember-forgot">
                            <span>Sign in with your Supabase administrator account.</span>
                        </div>

                        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Signing in...' : 'Login'}</button>

                        <div className="register-link">
                            <p><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>← Back to Home</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}