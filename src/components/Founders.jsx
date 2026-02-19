import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Founders.css';

const founders = [
    {
        name: 'Khalid Shaikh',
        role: 'Founder & CEO',
        bio: 'With over 30 years of experience in furniture craftsmanship, Khalid Shaikh founded New Lucky Furniture Industries with a vision to bring quality and durability to every home. His deep knowledge of materials and traditional techniques forms the backbone of our company.',
    },
    {
        name: 'Usama Shaikh',
        role: 'Managing Director',
        bio: 'Bringing modern design sensibilities and operational excellence, Usama leads the company\u2019s expansion and innovation. He ensures that New Lucky stays ahead of trends while maintaining the core values of integrity and customer satisfaction.',
    },
    {
        name: 'Junaid Shaikh',
        role: 'Managing Director',
        bio: 'AR.Junaid Shaikh (B.ARCH) represents the new generation of leadership at New Lucky Furniture Industries. With fresh ideas, a passion for modern design, and a keen eye for emerging trends, he is driving the company into the future — blending innovation with the timeless craftsmanship that defines NLFI.',
    },
];

export default function Founders() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="founders" className="founders section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Leadership</span>
                    <h2 className="section-title">Meet The Founders</h2>
                    <p className="section-description">
                        The visionaries behind our legacy of excellence.
                    </p>
                </motion.div>

                <div className="founders__grid">
                    {founders.map((founder, i) => (
                        <motion.div
                            key={founder.name}
                            className="founder-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                        >
                            <div className="founder-card__content">
                                <h3 className="founder-card__name">{founder.name}</h3>
                                <span className="founder-card__role">{founder.role}</span>
                                <p className="founder-card__bio">{founder.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
