import React, { useEffect, useState } from 'react';
import instagramQr from '../assets/instagram-qr-cropped.png';
import whatsappQr from '../assets/whatsapp-qr-cropped.png';
import './QrModal.css';

export type QrTabType = 'whatsapp' | 'instagram';

interface QrModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTab?: QrTabType;
}

const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose, initialTab = 'whatsapp' }) => {
    const [userSelectedTab, setUserSelectedTab] = useState<QrTabType | null>(null);
    const [prevInitialTab, setPrevInitialTab] = useState<QrTabType>(initialTab);

    if (initialTab !== prevInitialTab) {
        setPrevInitialTab(initialTab);
        setUserSelectedTab(null);
    }

    const activeTab = userSelectedTab ?? initialTab;

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="qr-modal-overlay" onClick={onClose}>
            <div 
                className="qr-modal-dialog" 
                role="dialog" 
                aria-modal="true" 
                aria-label="Direct QR Scanner"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Row with Close Button */}
                <div className="qr-modal-top-row">
                    <button 
                        type="button"
                        className="qr-modal-close" 
                        onClick={onClose} 
                        aria-label="Close QR Scanner"
                    >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Tab Switcher */}
                <div className="qr-modal-tabs">
                    <button 
                        type="button"
                        className={`qr-modal-tab ${activeTab === 'whatsapp' ? 'active-whatsapp' : ''}`}
                        onClick={() => setUserSelectedTab('whatsapp')}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.03.8 1.15-2.96-.19-.3a8.19 8.19 0 0 1-1.26-4.32c0-4.54 3.7-8.23 8.24-8.23m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                        </svg>
                        <span>WhatsApp QR</span>
                    </button>
                    <button 
                        type="button"
                        className={`qr-modal-tab ${activeTab === 'instagram' ? 'active-instagram' : ''}`}
                        onClick={() => setUserSelectedTab('instagram')}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span>Instagram QR</span>
                    </button>
                </div>

                {activeTab === 'whatsapp' ? (
                    <div className="qr-modal-tab-content">
                        <div className="qr-modal-header">
                            <h3>Advocate Nishant Giri</h3>
                            <p className="qr-modal-handle whatsapp-handle">WhatsApp Business Account</p>
                        </div>

                        <div className="qr-modal-body">
                            <img 
                                src={whatsappQr} 
                                alt="WhatsApp Business QR Scanner for Advocate Nishant Giri" 
                                className="qr-modal-image" 
                            />
                        </div>

                        <div className="qr-modal-footer">
                            <p className="qr-modal-instruction">
                                Scan this code with WhatsApp or smartphone camera to chat directly with Advocate Nishant Giri.
                            </p>
                            <a 
                                href="https://wa.me/919664281653" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="qr-modal-profile-btn qr-modal-wa-btn"
                            >
                                Start WhatsApp Chat &rarr;
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="qr-modal-tab-content">
                        <div className="qr-modal-header">
                            <h3>Instagram</h3>
                            <p className="qr-modal-handle instagram-handle">@jurivalegalco</p>
                        </div>

                        <div className="qr-modal-body">
                            <img 
                                src={instagramQr} 
                                alt="Instagram QR Scanner for Juriva Legal (@jurivalegalco)" 
                                className="qr-modal-image" 
                            />
                        </div>

                        <div className="qr-modal-footer">
                            <p className="qr-modal-instruction">
                                Scan with your smartphone camera or Instagram app to follow our official chamber.
                            </p>
                            <a 
                                href="https://www.instagram.com/jurivalegalco?stkn=NzZhNzF3bWd4NzN6" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="qr-modal-profile-btn qr-modal-ig-btn"
                            >
                                Open Instagram Profile &rarr;
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QrModal;
