import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LuSofa, LuBuilding2, LuPencilRuler, LuArrowRight } from 'react-icons/lu';
import './Services.css';

const services = [
    {
        icon: LuSofa,
        title: 'Home Furniture',
        description:
            'From elegant living room sets to cozy bedroom suites, we craft furniture that makes your house feel like home. Custom designs tailored to your space and style.',
        features: ['Living Room Sets', 'Bedroom Furniture', 'Dining Tables', 'Storage Solutions'],
        color: '#E8A817',
    },
    {
        icon: LuBuilding2,
        title: 'Office Furniture',
        description:
            'Professional-grade office furniture designed for productivity and comfort. Ergonomic desks, conference tables, and modular workstations.',
        features: ['Executive Desks', 'Conference Tables', 'Workstations', 'Reception Furniture'],
        color: '#1B3A5C',
    },
    {
        icon: LuPencilRuler,
        title: 'Customized Solutions',
        description:
            'Have a unique vision? Our expert craftsmen bring your ideas to life with fully customized furniture pieces designed to your exact specifications.',
        features: ['Custom Designs', 'Space Planning', 'Material Selection', 'Installation'],
        color: '#2a5580',
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="services" className="services section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Our Services</span>
                    <h2 className="section-title">What We Create</h2>
                    <p className="section-description">
                        Comprehensive furniture solutions for every space and every need,
                        crafted with precision and passion.
                    </p>
                </motion.div>

                <div className="services__grid">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="services__card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            <div
                                className="services__card-icon"
                                style={{ '--card-color': service.color }}
                            >
                                <service.icon size={32} />
                            </div>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-desc">{service.description}</p>
                            <ul className="services__card-features">
                                {service.features.map((f) => (
                                    <li key={f}>
                                        <LuArrowRight className="services__feature-icon" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="services__card-link">
                                Learn More <LuArrowRight />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
