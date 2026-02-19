import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    LuPhone,
    LuMail,
    LuMapPin,
    LuClock,
    LuSend,
    LuUser,
    LuMessageSquare,
} from 'react-icons/lu';
import emailjs from '@emailjs/browser';
import './Contact.css';

const contactInfo = [
    {
        icon: LuPhone,
        title: 'Call Us',
        details: [
            { label: 'Owner', value: '+91 9881786800' },
            { label: 'Managing Director (Junaid)', value: '+91 8482993385' },
            { label: 'Managing Director (Usama)', value: '+91 9527580042' },
        ],
    },
    {
        icon: LuMail,
        title: 'Email Us',
        details: [
            { label: '', value: 'newluckyfurnitureindustries@gmail.com' },
        ],
    },
    {
        icon: LuMapPin,
        title: 'Visit Us',
        details: [
            { label: '', value: 'New Lucky Furniture Industries, Industrial Area, Solapur, Maharashtra 413001' },
        ],
    },
    {
        icon: LuClock,
        title: 'Working Hours',
        details: [
            { label: 'Sat-Thu', value: '10:00 AM - 8:00 PM' },
            { label: 'Friday', value: 'Closed' },
        ],
    },
];

export default function Contact() {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Send enquiry notification to owner
            await emailjs.sendForm(
                'service_ce8xw0g',
                'template_fgizpo8',
                formRef.current,
                'VHEg-W7_eRxFdhnIo'
            );
            // Send auto-reply confirmation to customer
            await emailjs.sendForm(
                'service_ce8xw0g',
                'template_kb2wtgr',
                formRef.current,
                'VHEg-W7_eRxFdhnIo'
            );
            setStatus('sent');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Get In Touch</span>
                    <h2 className="section-title">Let&apos;s Create Together</h2>
                    <p className="section-description">
                        Have a project in mind? Reach out to us and let&apos;s bring your
                        furniture vision to life.
                    </p>
                </motion.div>

                <div className="contact__grid">
                    {/* Contact Info */}
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="contact__info-cards">
                            {contactInfo.map((info, i) => (
                                <motion.div
                                    key={info.title}
                                    className="contact__info-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                >
                                    <div className="contact__info-icon">
                                        <info.icon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="contact__info-title">{info.title}</h4>
                                        {info.details.map((d, j) => (
                                            <p key={j} className="contact__info-detail">
                                                {d.label && <strong>{d.label}: </strong>}
                                                {d.value}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Google Maps Embed */}
                        <div className="contact__map">
                            <iframe
                                src="https://maps.google.com/maps?q=17.680429,75.918252&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="New Lucky Furniture Industries Location"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        className="contact__form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="contact__form-row">
                            <div className="contact__form-group">
                                <label htmlFor="contact-name">
                                    <LuUser className="contact__form-icon" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    required
                                />
                            </div>
                            <div className="contact__form-group">
                                <label htmlFor="contact-email">
                                    <LuMail className="contact__form-icon" /> Email
                                </label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact__form-row">
                            <div className="contact__form-group">
                                <label htmlFor="contact-phone">
                                    <LuPhone className="contact__form-icon" /> Phone
                                </label>
                                <input
                                    type="tel"
                                    id="contact-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div className="contact__form-group">
                                <label htmlFor="contact-subject">
                                    <LuMessageSquare className="contact__form-icon" /> Subject
                                </label>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project type"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="contact-message">
                                <LuMessageSquare className="contact__form-icon" /> Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                rows="5"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary contact__submit"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                'Sending...'
                            ) : status === 'sent' ? (
                                '✓ Message Sent!'
                            ) : status === 'error' ? (
                                'Failed — Try Again'
                            ) : (
                                <>
                                    Send Message <LuSend />
                                </>
                            )}
                        </button>

                        {status === 'sent' && (
                            <p className="contact__success">
                                Thank you! We&apos;ll get back to you within 24 hours.
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
