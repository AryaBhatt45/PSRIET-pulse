import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../pages/style/LoginPage.css';

export default function ProtectedAdminRoute({ children }) {
    const { isAuthenticated, isAdmin, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="auth-loading-screen"><div className="auth-loading-card"><div className="auth-spinner" aria-hidden="true" /><p>Checking access...</p></div></div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
    }

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return children;
}