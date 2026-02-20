import { motion } from 'framer-motion';
import { HiArrowRight, HiPhone } from 'react-icons/hi';
import './Hero.css';

export default function Hero() {
    const handleScroll = (e, target) => {
        e.preventDefault();
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero__bg">
                <div className="hero__bg-overlay" />
                <div className="hero__bg-pattern" />
            </div>

            {/* Floating decorative elements */}
            <motion.div
                className="hero__float hero__float--1"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="hero__float hero__float--2"
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="hero__float hero__float--3"
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="hero__content container">
                <motion.div
                    className="hero__badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="hero__badge-dot" />
                    Crafting Excellence Since 2001
                </motion.div>

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Transform Your Space <br />
                    With <span className="hero__title-accent">Premium Furniture</span>
                </motion.h1>

                <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Solapur&apos;s trusted furniture manufacturer for over 25 years.
                    We design and craft bespoke home &amp; office furniture
                    that combines artistry with functionality.
                </motion.p>

                <motion.div
                    className="hero__actions"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="#contact"
                        className="btn btn-primary hero__btn"
                        onClick={(e) => handleScroll(e, '#contact')}
                    >
                        Get Free Consultation <HiArrowRight />
                    </a>
                    <a
                        href="tel:+918482993385"
                        className="btn btn-secondary hero__btn"
                    >
                        <HiPhone /> Call Us Now
                    </a>
                </motion.div>

                <motion.div
                    className="hero__stats"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="hero__stat">
                        <span className="hero__stat-number">25+</span>
                        <span className="hero__stat-label">Years Experience</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">1000+</span>
                        <span className="hero__stat-label">Projects Delivered</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">500+</span>
                        <span className="hero__stat-label">Happy Clients</span>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
