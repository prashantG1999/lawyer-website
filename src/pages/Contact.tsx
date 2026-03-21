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
            <h1>Contact Us</h1>
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
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
        </section>
    );
};

export default Contact;
