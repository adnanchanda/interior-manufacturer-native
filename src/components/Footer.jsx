import { motion } from 'framer-motion';
import {
    LuPhone,
    LuMail,
    LuMapPin,
    LuArrowUp,
    LuFacebook,
    LuInstagram,
    LuTwitter,
} from 'react-icons/lu';
import './Footer.css';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

const services = [
    'Home Furniture',
    'Office Furniture',
    'Custom Designs',
    'Interior Consultation',
    'Furniture Repair',
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Company Info */}
                    <div className="footer__col footer__company">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">
                                <span>NL</span>
                            </div>
                            <div className="footer__logo-text">
                                <span className="footer__logo-name">New Lucky</span>
                                <span className="footer__logo-tagline">Furniture Industries</span>
                            </div>
                        </div>
                        <p className="footer__about">
                            Crafting premium furniture since 1995. We transform spaces with
                            bespoke designs that combine artistry, durability, and functionality.
                        </p>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link" aria-label="Facebook">
                                <LuFacebook size={18} />
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Instagram">
                                <LuInstagram size={18} />
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Twitter">
                                <LuTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__links">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Our Services</h4>
                        <ul className="footer__links">
                            {services.map((s) => (
                                <li key={s}>
                                    <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Contact Us</h4>
                        <div className="footer__contact-list">
                            <div className="footer__contact-item">
                                <LuMapPin className="footer__contact-icon" />
                                <span>Industrial Area, Solapur,<br />Maharashtra 413001</span>
                            </div>
                            <div className="footer__contact-item">
                                <LuPhone className="footer__contact-icon" />
                                <div>
                                    <span>Owner: +91 98765 43210</span><br />
                                    <span>MD: +91 98765 43211</span>
                                </div>
                            </div>
                            <div className="footer__contact-item">
                                <LuMail className="footer__contact-icon" />
                                <span>info@newluckyfurniture.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {new Date().getFullYear()} New Lucky Furniture Industries. All rights reserved.
                    </p>
                    <p className="footer__made-with">
                        Crafted with ❤️ in Solapur, India
                    </p>
                </div>
            </div>

            {/* Scroll to top */}
            <motion.button
                className="footer__scroll-top"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
            >
                <LuArrowUp size={20} />
            </motion.button>
        </footer>
    );
}
