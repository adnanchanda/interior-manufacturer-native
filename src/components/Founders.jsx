import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LuLinkedin, LuTwitter, LuMail } from 'react-icons/lu';
import './Founders.css';

const founders = [
    {
        name: 'Khalid Shaikh',
        role: 'Founder & CEO',
        bio: 'With over 30 years of experience in furniture craftsmanship, Mohammed founded New Lucky Furniture Industries with a vision to bring quality and durability to every home. His deep knowledge of materials and traditional techniques forms the backbone of our company.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
        social: {
            linkedin: '#',
            twitter: '#',
            email: 'mailto:founder@newluckyfurniture.com',
        },
    },
    {
        name: 'Usama Shaikh',
        role: 'Managing Director',
        bio: 'Bringing modern design sensibilities and operational excellence, Adnan leads the company’s expansion and innovation. He ensures that New Lucky stays ahead of trends while maintaining the core values of integrity and customer satisfaction.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
        social: {
            linkedin: '#',
            twitter: '#',
            email: 'mailto:adnan@newluckyfurniture.com',
        },
    },
    {
        name: 'Junaid Shaikh',
        role: 'Founder & CEO',
        bio: 'With over 30 years of experience in furniture craftsmanship, Mohammed founded New Lucky Furniture Industries with a vision to bring quality and durability to every home. His deep knowledge of materials and traditional techniques forms the backbone of our company.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
        social: {
            linkedin: '#',
            twitter: '#',
            email: 'mailto:founder@newluckyfurniture.com',
        },
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
                            <div className="founder-card__image-wrapper">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="founder-card__image"
                                />
                                <div className="founder-card__social">
                                    <a href={founder.social.linkedin} aria-label="LinkedIn">
                                        <LuLinkedin size={20} />
                                    </a>
                                    <a href={founder.social.twitter} aria-label="Twitter">
                                        <LuTwitter size={20} />
                                    </a>
                                    <a href={founder.social.email} aria-label="Email">
                                        <LuMail size={20} />
                                    </a>
                                </div>
                            </div>
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
