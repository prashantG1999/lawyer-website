import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';
import './Contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''; 
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''; 
const USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''; 

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        
        setStatus('sending');
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
            .then(
                () => {
                    setStatus('success');
                    formRef.current?.reset();
                },
                (error) => {
                    console.error('EmailJS error:', error);
                    setStatus('error');
                }
            );
    };

    const closeModal = () => {
        setStatus('idle');
    };

    return (
        <section className="contact">
            <Helmet>
                <title>Contact Chamber | Juriva Legal, Kota, Rajasthan</title>
                <meta 
                    name="description" 
                    content="Contact Juriva Legal chamber in Kota, Rajasthan to schedule a confidential legal consultation for civil, criminal, banking, corporate, or matrimonial matters." 
                />
            </Helmet>
            <div className="contact-wrapper-container">
                <div className="contact-header">
                    <h1>Contact <span>Chamber</span></h1>
                </div>

                <div className="contact-grid">
                    <div className="contact-info-panel">
                        <h2>Chamber Details</h2>

                        <div className="contact-info-card">
                            <div className="info-icon">📍</div>
                            <div className="info-text">
                                <h3>Sogaria</h3>
                                <p>Sogaria, Kota, Rajasthan, India</p>
                                <p className="contact-phone-links">
                                    <a href="tel:+919664281653">+91 96642 81653</a>
                                    <span className="contact-phone-sep">&nbsp;|&nbsp;</span>
                                    <a href="tel:+919660460445">+91 96604 60445</a>
                                </p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-icon">📍</div>
                            <div className="info-text">
                                <h3>R.K Puram</h3>
                                <p>R.K Puram, Kota, Rajasthan, India</p>
                                <p style={{ marginTop: '0.35rem', fontSize: '0.98rem' }}>
                                    <a href="tel:+918824770804">+91 88247 70804</a>
                                </p>
                            </div>
                        </div>


                        <div className="contact-info-card">
                            <div className="info-icon">💬</div>
                            <div className="info-text">
                                <h3>WhatsApp</h3>
                                <p>
                                    <a href="https://wa.me/919664281653" target="_blank" rel="noopener noreferrer">
                                        +91 96642 81653
                                    </a>
                                </p>
                                <div className="contact-pill-action">
                                    <a 
                                        href="https://wa.me/919664281653" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="contact-pill-link contact-wa-pill"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
                                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.03.8 1.15-2.96-.19-.3a8.19 8.19 0 0 1-1.26-4.32c0-4.54 3.7-8.23 8.24-8.23m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                                        </svg>
                                        <span>Open WhatsApp Chat &rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-icon">📸</div>
                            <div className="info-text">
                                <h3>Instagram</h3>
                                <p>
                                    <a href="https://www.instagram.com/jurivalegalco" target="_blank" rel="noopener noreferrer">
                                        @jurivalegalco
                                    </a>
                                </p>
                                <div className="contact-pill-action">
                                    <a 
                                        href="https://www.instagram.com/jurivalegalco" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="contact-pill-link contact-ig-pill"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" aria-hidden="true">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                        <span>Visit Instagram Profile &rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-icon">✉️</div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p><a href="mailto:jurivalegal@gmail.com">jurivalegal@gmail.com</a></p>
                            </div>
                        </div>
                    </div>

                    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                        <h2>Send a Message</h2>
                        <input type="hidden" name="time" value={new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} />
                        <label>
                            Name
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Email
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Phone
                            <input type="tel" name="phone" />
                        </label>
                        <label>
                            Message
                            <textarea name="message" rows={5} required />
                        </label>
                        <button type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            
            {status !== 'idle' && status !== 'sending' && (
                <div className="contact-modal-overlay">
                    <div className="contact-modal" role="dialog" aria-modal="true">
                        <div className={`contact-modal-icon ${status}`}>
                            {status === 'success' ? (
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            ) : (
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            )}
                        </div>
                        <h2>{status === 'success' ? 'Thank You!' : 'Error!'}</h2>
                        <p>
                            {status === 'success' 
                                ? 'Your message has been sent successfully. We will get back to you shortly.' 
                                : 'Failed to send your message. Please try again or contact us directly.'}
                        </p>
                        <button className="contact-modal-btn" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
