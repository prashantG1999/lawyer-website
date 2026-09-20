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
