import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './style/LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, loading, signUp, signInWithPassword, signOut } = useAuth();
  const [mode, setMode] = useState('signin');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const redirectPath = useMemo(() => {
    const stateRedirect = location.state?.from;
    const paramRedirect = new URLSearchParams(location.search).get('redirect');
    const candidate = stateRedirect || paramRedirect || '/';
    return candidate.startsWith('/') && !candidate.startsWith('//') ? candidate : '/';
  }, [location.search, location.state]);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate(redirectPath, { replace: true });
    }
  }, [loading, isAuthenticated, navigate, redirectPath]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!event.currentTarget.reportValidity()) return;

    const normalizedEmail = email.trim();
    if (mode === 'signup' && !name.trim()) {
      setError('Enter your full name.');
      return;
    }

    if (mode === 'signup' && password !== passwordConfirmation) {
      setError('Passwords do not match.');
      return;
    }

    if (mode === 'signup' && password.length < 8) {
      setError('Your password must be at least 8 characters long.');
      return;
    }

    setIsSubmitting(true);
    try {
      if (mode === 'signup') {
        const data = await signUp({ name, email: normalizedEmail, password, redirectTo: redirectPath });
        if (!data.session) {
          setSuccess('Account created. Check your email for a confirmation link before signing in.');
          setMode('signin');
          setPassword('');
          setPasswordConfirmation('');
        }
      } else {
        await signInWithPassword({ email: normalizedEmail, password });
      }
    } catch (authError) {
      setError(authError?.message || `Unable to ${mode === 'signup' ? 'create your account' : 'sign in'} right now.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = () => {
    setMode((currentMode) => currentMode === 'signin' ? 'signup' : 'signin');
    setError('');
    setSuccess('');
    setPassword('');
    setPasswordConfirmation('');
  };

  const handleLogout = async () => {
    setError('');

    try {
      await signOut();
      navigate('/');
    } catch (logoutError) {
      setError(logoutError?.message || 'Unable to log out right now.');
    }
  };

  if (loading) {
    return (
      <div className="auth-loading-screen">
        <div className="auth-loading-card">
          <div className="auth-spinner" aria-hidden="true" />
          <p>Checking your session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page-shell">
      <div className="login-page-backdrop" aria-hidden="true" />
      <main className="login-content">
        <Link to="/" className="login-back-link">← <span>Back to home</span></Link>

        <section className="login-card" aria-labelledby="auth-title">
          <div className="login-card-brand">
            <span className="login-brand-mark" aria-hidden="true">P</span>
            <span>PTSRIET <small>Digital Campus</small></span>
          </div>

          {isAuthenticated ? (
            <div className="auth-user-panel">
              <div className="auth-avatar" aria-hidden="true">
                {(user?.user_metadata?.full_name || user?.email || 'S').trim().charAt(0).toUpperCase()}
              </div>
              <span className="auth-status-tag">Signed in</span>
              <div className="auth-user-meta">
                <h1 id="auth-title">{user?.user_metadata?.full_name || user?.user_metadata?.name || 'Welcome back'}</h1>
                <p>{user?.email}</p>
              </div>
              <button type="button" className="secondary-auth-btn" onClick={handleLogout}>
                Sign out
              </button>
            </div>
          ) : (
            <>
              <div className="login-header">
                <span className="login-mini-tag">Your campus, your account</span>
                <h1 id="auth-title">{mode === 'signup' ? 'Create your account' : 'Welcome back'}</h1>
                <p>{mode === 'signup'
                  ? 'Sign up to continue to protected student features.'
                  : 'Sign in to continue to your student features.'}</p>
              </div>

              <div className="auth-mode-tabs" role="tablist" aria-label="Account access">
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'signin'}
                  className={mode === 'signin' ? 'is-active' : ''}
                  onClick={() => mode !== 'signin' && toggleMode()}
                  disabled={isSubmitting}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'signup'}
                  className={mode === 'signup' ? 'is-active' : ''}
                  onClick={() => mode !== 'signup' && toggleMode()}
                  disabled={isSubmitting}
                >
                  Create account
                </button>
              </div>

              <form className="email-auth-form" onSubmit={handleSubmit} noValidate>
                {mode === 'signup' && (
                  <label className="auth-field">
                    Full name
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      maxLength={120}
                      required
                    />
                  </label>
                )}

                <label className="auth-field">
                  Email address
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    maxLength={254}
                    required
                  />
                </label>

                <label className="auth-field">
                  Password
                  <input
                    type="password"
                    name="password"
                    autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    minLength={mode === 'signup' ? 8 : undefined}
                    required
                  />
                  {mode === 'signup' && <small>Use at least 8 characters.</small>}
                </label>

                {mode === 'signup' && (
                  <label className="auth-field">
                    Confirm password
                    <input
                      type="password"
                      name="passwordConfirmation"
                      autoComplete="new-password"
                      value={passwordConfirmation}
                      onChange={(event) => setPasswordConfirmation(event.target.value)}
                      minLength={8}
                      required
                    />
                  </label>
                )}

                {error && <p className="auth-error-message" role="alert">{error}</p>}
                {success && <p className="auth-success-message" role="status">{success}</p>}

                <button type="submit" className="email-auth-submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? (mode === 'signup' ? 'Creating account...' : 'Signing in...')
                    : (mode === 'signup' ? 'Create account' : 'Sign in')}
                </button>
              </form>

              <p className="login-public-note">
                <span aria-hidden="true">ℹ</span>
                Notes, syllabus, and public pages are available without signing in.
              </p>
            </>
          )}
        </section>
        <p className="login-page-footer">Secure access powered by Supabase</p>
      </main>
    </div>
  );
}
