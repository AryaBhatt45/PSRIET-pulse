import React, { useState } from 'react';

export default function SupportWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const whatsappNumber = "7398663942"; // Apna WhatsApp number daal lena
    const telegramUsername = "ptsriet_support"; // Apna Telegram username

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20PTSRIET%20Support,%20I%20have%20an%20inquiry.`;
    const telegramUrl = `https://t.me/${telegramUsername}`;

    return (
        <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 9999, fontFamily: 'sans-serif' }}>
            {/* Popup Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    bottom: '70px',
                    right: '0',
                    width: '240px',
                    background: '#1e293b',
                    borderRadius: '14px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    overflow: 'hidden'
                }}>
                    <div style={{ background: '#0f172a', padding: '12px 15px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <h4 style={{ margin: 0, color: '#fff', fontSize: '14px' }}>💬 PTSRIET Help Desk</h4>
                        <p style={{ margin: '2px 0 0', color: '#94a3b8', fontSize: '11px' }}>Available for student queries</p>
                    </div>
                    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {/* WhatsApp Link with SVG */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 12px',
                                background: '#25D366',
                                color: '#fff',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '13px',
                                fontWeight: '600'
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            Chat on WhatsApp
                        </a>
                        {/* Telegram Link with SVG */}
                        <a
                            href={telegramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 12px',
                                background: '#229ED9',
                                color: '#fff',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '13px',
                                fontWeight: '600'
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.535-.195 1.001.132.832.934z" /></svg>
                            Join Telegram Desk
                        </a>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button with Chat Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s'
                }}
                title="Quick Support"
            >
                {isOpen ? (
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>✕</span>
                ) : (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M12 3c-4.97 0-9 3.58-9 8 0 1.91.72 3.66 1.92 5 .09.1.14.23.12.36l-.3 2.11c-.07.48.37.91.85.82l2.16-.38c.13-.02.26.02.35.1 1.25.79 2.76 1.25 4.4 1.25 4.97 0 9-3.58 9-8s-4.03-8-9-8zm0 14c-3.86 0-7-2.69-7-6s3.14-6 7-6 7 2.69 7 6-3.14 6-7 6z" /></svg>
                )}
            </button>
        </div>
    );
}