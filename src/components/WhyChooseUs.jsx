import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    LuShield,
    LuUsers,
    LuClock,
    LuPencilRuler,
    LuBadgeCheck,
    LuTruck,
} from 'react-icons/lu';
import './WhyChooseUs.css';

const features = [
    {
        icon: LuShield,
        title: 'Quality Materials',
        description: 'We source only the finest wood and premium materials, ensuring durability and a luxurious finish in every piece.',
    },
    {
        icon: LuUsers,
        title: 'Skilled Craftsmen',
        description: 'Our team comprises master artisans with decades of experience in traditional and modern woodworking techniques.',
    },
    {
        icon: LuClock,
        title: '25+ Years Experience',
        description: 'Three decades of industry expertise means we understand what works, delivering time-tested quality every time.',
    },
    {
        icon: LuPencilRuler,
        title: 'Custom Designs',
        description: 'From concept to creation, we bring your unique vision to life with fully customized furniture solutions.',
    },
    {
        icon: LuBadgeCheck,
        title: 'Timely Delivery',
        description: 'We respect your time. Every project is completed and delivered within the agreed timeline, no exceptions.',
    },
    {
        icon: LuTruck,
        title: 'Free Installation',
        description: 'Professional installation included with every order. Our team ensures everything is perfectly set up in your space.',
    },
];

export default function WhyChooseUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="whyus" className="whyus section">
            <div className="whyus__bg" />
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Why Choose Us</span>
                    <h2 className="section-title" style={{ color: 'var(--white)' }}>
                        Why Families Trust Us
                    </h2>
                    <p className="section-description" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        We&apos;re not just furniture makers — we&apos;re partners in creating spaces
                        that inspire and endure.
                    </p>
                </motion.div>

                <div className="whyus__grid">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className="whyus__card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                        >
                            <div className="whyus__card-icon">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="whyus__card-title">{feature.title}</h3>
                            <p className="whyus__card-desc">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
