import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LuAward, LuUsers, LuHouse, LuCalendar } from 'react-icons/lu';
import OptimizedImage from './OptimizedImage';
import factoryExterior from '../assets/optimized/1CDFBCB6-9920-4079-95F0-10738991D3A4.webp';
import factoryExteriorPh from '../assets/placeholders/1CDFBCB6-9920-4079-95F0-10738991D3A4_placeholder.webp';
import './About.css';

const stats = [
    { icon: LuCalendar, number: '25+', label: 'Years of Excellence', suffix: '' },
    { icon: LuHouse, number: '1000+', label: 'Projects Completed', suffix: '' },
    { icon: LuUsers, number: '500+', label: 'Happy Families', suffix: '' },
    { icon: LuAward, number: '100%', label: 'Quality Guaranteed', suffix: '' },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="about section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">About Us</span>
                    <h2 className="section-title">A Legacy of Fine Craftsmanship</h2>
                    <p className="section-description">
                        Since 1995, we&apos;ve been transforming spaces across Solapur and beyond
                        with furniture that tells a story.
                    </p>
                </motion.div>

                <div className="about__grid">
                    <motion.div
                        className="about__story"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="about__story-image">
                            <div className="about__story-image-inner">
                                <OptimizedImage
                                    src={factoryExterior}
                                    placeholder={factoryExteriorPh}
                                    alt="New Lucky Furniture Industries Factory"
                                    className="about__story-photo"
                                />
                            </div>
                            <div className="about__story-badge">
                                <span className="about__story-badge-number">25+</span>
                                <span className="about__story-badge-text">Years</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about__content"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <h3 className="about__content-title">
                            Building Dreams, <br />
                            <span className="about__content-accent">One Piece at a Time</span>
                        </h3>
                        <p>
                            <strong>New Lucky Furniture Industries</strong> was established in 2001 in Solapur,
                            Maharashtra, with a simple vision — to bring world-class furniture craftsmanship
                            to every home and office. What started as a small workshop has grown into one of
                            the most trusted names in the region.
                        </p>
                        <p>
                            Under the leadership of our founder, we have spent over three decades perfecting
                            the art of furniture making. Our team of skilled artisans combines
                            traditional woodworking techniques with modern design aesthetics to create
                            pieces that are both beautiful and built to last.
                        </p>
                        <p>
                            We take pride in understanding our customers&apos; unique needs and delivering
                            customized solutions that exceed expectations. Every piece of furniture
                            that leaves our workshop carries our commitment to quality, durability,
                            and aesthetic excellence.
                        </p>

                        <div className="about__highlights">
                            <div className="about__highlight">
                                <LuAward className="about__highlight-icon" />
                                <div>
                                    <strong>Premium Materials</strong>
                                    <span>Only the finest wood and materials</span>
                                </div>
                            </div>
                            <div className="about__highlight">
                                <LuUsers className="about__highlight-icon" />
                                <div>
                                    <strong>Expert Craftsmen</strong>
                                    <span>Skilled artisans with decades of experience</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="about__stats">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="about__stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                        >
                            <stat.icon className="about__stat-icon" />
                            <span className="about__stat-number">{stat.number}</span>
                            <span className="about__stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
