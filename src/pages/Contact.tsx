import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const SERVICE_ID = 'YOUR_SERVICE_ID'; // replace with EmailJS service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // replace with EmailJS template ID
const USER_ID = 'YOUR_USER_ID'; // replace with EmailJS user/public key

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
            .then(
                (_,) => {
                    alert('Message sent successfully!');
                    formRef.current?.reset();
                },
                (error) => {
                    console.error('EmailJS error:', error);
                    alert('Failed to send message. Please try again later.');
                }
            );
    };

    return (
        <section className="contact">
            <div className="contact-wrapper-container">
                <div className="contact-header">
                    <h1>Contact <span>Chamber</span></h1>
                    <p>Protect your rights and secure your peace of mind. Get in touch to schedule a confidential consultation.</p>
                </div>
                
                <div className="contact-grid">
                    <div className="contact-info-panel">
                        <h2>Chamber Details</h2>
                        <p>Reach out directly to schedule an appointment or for urgent legal assistance:</p>
                        
                        <div className="contact-info-card">
                            <div className="info-icon">📍</div>
                            <div className="info-text">
                                <h3>Location</h3>
                                <p>Kota, Rajasthan, India</p>
                            </div>
                        </div>
                        
                        <div className="contact-info-card">
                            <div className="info-icon">📞</div>
                            <div className="info-text">
                                <h3>Phone</h3>
                                <p><a href="tel:+919660460445">+91 96604 60445</a></p>
                            </div>
                        </div>
                        
                        <div className="contact-info-card">
                            <div className="info-icon">✉️</div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p><a href="mailto:nishantgiri102096@gmail.com">nishantgiri102096@gmail.com</a></p>
                            </div>
                        </div>
                    </div>

                    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                        <h2>Send a Message</h2>
                        <label>
                            Name
                            <input type="text" name="user_name" required />
                        </label>
                        <label>
                            Email
                            <input type="email" name="user_email" required />
                        </label>
                        <label>
                            Phone
                            <input type="tel" name="user_phone" />
                        </label>
                        <label>
                            Message
                            <textarea name="message" rows={5} required />
                        </label>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
