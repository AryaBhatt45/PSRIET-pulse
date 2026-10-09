import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut();
            navigate('/admin/login');
        } catch (error) {
            console.error('Unable to sign out administrator.', error);
            window.alert(error.message || 'Unable to log out. Please try again.');
        }
    };

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: '📊' },
        { id: 'students', label: 'Manage Students', icon: '👥' },
        { id: 'notices', label: 'Post Notices', icon: '📢' },
        { id: 'events', label: 'Manage Events', icon: '📅' },
        { id: 'results', label: 'Update Results', icon: '📝' },
        { id: 'settings', label: 'System Settings', icon: '⚙️' },
    ];

    return (
        <aside style={{
            width: isCollapsed ? '80px' : '260px',
            background: 'rgba(20, 20, 20, 0.95)',
            borderRight: '1px solid rgba(255,40,40,0.2)',
            padding: '20px 15px',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            position: 'sticky',
            top: 0,
            transition: 'width 0.3s ease',
            zIndex: 999
        }}>
            {/* Header section with a high-visibility Neon Cyan and Yellow toggle button */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '30px',
                paddingBottom: '10px',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                {!isCollapsed && (
                    <div style={{ overflow: 'hidden' }}>
                        <h2 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', margin: 0, whiteSpace: 'nowrap' }}>PSRIET</h2>
                        <p style={{ fontSize: '11px', color: '#10b981', margin: '2px 0 0', whiteSpace: 'nowrap' }}>Control Center</p>
                    </div>
                )}

                {/* Chamakdar Cyan/Yellow Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    style={{
                        width: '32px',
                        height: '32px',
                        background: '#00f2fe', // Bright Cyan Color
                        border: '2px solid #ffcc00', // Bright Yellow Border
                        borderRadius: '8px',
                        color: '#000000', // Black Icon for high contrast
                        fontSize: '14px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        margin: isCollapsed ? '0 auto' : '0',
                        boxShadow: '0 0 10px rgba(0, 242, 254, 0.6)',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {isCollapsed ? '➡' : '⬅'}
                </button>
            </div>

            {/* Menu Items */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            background: activeTab === item.id ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                            border: activeTab === item.id ? '1px solid #10b981' : '1px solid transparent',
                            borderRadius: '8px',
                            color: activeTab === item.id ? '#10b981' : '#ccc',
                            fontWeight: activeTab === item.id ? '600' : '400',
                            cursor: 'pointer',
                            textAlign: 'left',
                            width: '100%',
                            justifyContent: isCollapsed ? 'center' : 'flex-start',
                            transition: 'all 0.2s ease',
                            overflow: 'hidden'
                        }}
                        title={isCollapsed ? item.label : ''}
                    >
                        <span style={{ fontSize: '18px', minWidth: '20px', textAlign: 'center' }}>{item.icon}</span>
                        {!isCollapsed && <span style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>{item.label}</span>}
                    </button>
                ))}
            </nav>

            {/* Logout Section */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                <button
                    onClick={handleLogout}
                    style={{
                        width: '100%',
                        padding: '10px',
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid rgba(239, 68, 68, 0.4)',
                        borderRadius: '8px',
                        color: '#ef4444',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        whiteSpace: 'nowrap'
                    }}
                    title="Logout"
                >
                    <span>🚪</span>
                    {!isCollapsed && <span>Logout Admin</span>}
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;