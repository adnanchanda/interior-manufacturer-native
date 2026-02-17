import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { LuX, LuChevronLeft, LuChevronRight, LuFactory, LuUsers, LuWrench, LuZoomIn } from 'react-icons/lu';
import './Factory.css';

import factoryExterior from '../assets/1CDFBCB6-9920-4079-95F0-10738991D3A4.PNG';
import craftsmen from '../assets/3DFC2125-956E-4C18-9F0F-DD9D4FFFE5C6.PNG';
import workshopFloor from '../assets/3FE6B5C9-F5EA-458B-86CA-42769B8AA71F.PNG';
import drillingMachine from '../assets/6023430E-330D-4460-BE22-6490CBD8CD55.PNG';
import productionArea from '../assets/IMG_2236.JPG.jpeg';
import aerialView from '../assets/IMG_2992.jpg.jpeg';
import holzmaMachine from '../assets/18ED5C3F-CC10-49B6-B53B-1F0D2324E558.PNG';

const factoryImages = [
    {
        src: factoryExterior,
        title: 'Our Factory',
        description: 'The NLFI manufacturing facility in Solapur',
    },
    {
        src: craftsmen,
        title: 'Expert Craftsmen',
        description: 'Skilled artisans working with precision cutting equipment',
    },
    {
        src: holzmaMachine,
        title: 'CNC Panel Saw',
        description: 'Holzma CNC panel saw for precision board cutting',
    },
    {
        src: workshopFloor,
        title: 'Production Floor',
        description: 'Our team at work on the spacious workshop floor',
    },
    {
        src: drillingMachine,
        title: 'Precision Equipment',
        description: 'Holytek industrial drilling machine for accurate woodwork',
    },
    {
        src: productionArea,
        title: 'Manufacturing Bay',
        description: 'Doors and panels in various stages of production',
    },
    {
        src: aerialView,
        title: 'Factory Overview',
        description: 'Aerial view of our facility with dust collection system',
    },
];

const stats = [
    { icon: LuFactory, value: '10,000+', label: 'Sq.Ft Facility' },
    { icon: LuUsers, value: '30+', label: 'Skilled Workers' },
    { icon: LuWrench, value: '20+', label: 'Machines' },
];

export default function Factory() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [lightbox, setLightbox] = useState(null);

    const openLightbox = (index) => setLightbox(index);
    const closeLightbox = () => setLightbox(null);

    const goNext = () =>
        setLightbox((prev) => (prev + 1) % factoryImages.length);
    const goPrev = () =>
        setLightbox((prev) =>
            prev === 0 ? factoryImages.length - 1 : prev - 1
        );

    const hero = factoryImages[0];
    const rest = factoryImages.slice(1);

    return (
        <section id="factory" className="factory section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Behind The Scenes</span>
                    <h2 className="section-title">Our Factory & Equipment</h2>
                    <p className="section-description">
                        Take a look inside our state-of-the-art manufacturing facility where
                        craftsmanship meets modern technology.
                    </p>
                </motion.div>

                {/* Factory Stats */}
                <motion.div
                    className="factory__stats"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className="factory__stat">
                            <stat.icon className="factory__stat-icon" size={24} />
                            <span className="factory__stat-value">{stat.value}</span>
                            <span className="factory__stat-label">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    className="factory__hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    onClick={() => openLightbox(0)}
                >
                    <img src={hero.src} alt={hero.title} className="factory__hero-img" />
                    <div className="factory__hero-overlay">
                        <div className="factory__hero-text">
                            <h3 className="factory__hero-title">{hero.title}</h3>
                            <p className="factory__hero-desc">{hero.description}</p>
                        </div>
                        <div className="factory__hero-zoom">
                            <LuZoomIn size={22} />
                        </div>
                    </div>
                </motion.div>

                {/* Masonry Grid - alternating rows */}
                <div className="factory__masonry">
                    {/* Row 1: 3 images */}
                    <div className="factory__row factory__row--3">
                        {rest.slice(0, 3).map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="factory__card"
                                initial={{ opacity: 0, y: 25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                                onClick={() => openLightbox(i + 1)}
                            >
                                <img src={item.src} alt={item.title} className="factory__card-img" loading="lazy" />
                                <div className="factory__card-overlay">
                                    <div className="factory__card-zoom"><LuZoomIn size={18} /></div>
                                    <h4 className="factory__card-title">{item.title}</h4>
                                    <p className="factory__card-desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 2: 2 images side-by-side + 1 tall-ish */}
                    <div className="factory__row factory__row--featured">
                        <motion.div
                            className="factory__card factory__card--large"
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.55 }}
                            onClick={() => openLightbox(4)}
                        >
                            <img src={rest[3].src} alt={rest[3].title} className="factory__card-img" loading="lazy" />
                            <div className="factory__card-overlay">
                                <div className="factory__card-zoom"><LuZoomIn size={18} /></div>
                                <h4 className="factory__card-title">{rest[3].title}</h4>
                                <p className="factory__card-desc">{rest[3].description}</p>
                            </div>
                        </motion.div>

                        <div className="factory__card-stack">
                            {rest.slice(4).map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    className="factory__card"
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                                    onClick={() => openLightbox(i + 5)}
                                >
                                    <img src={item.src} alt={item.title} className="factory__card-img" loading="lazy" />
                                    <div className="factory__card-overlay">
                                        <div className="factory__card-zoom"><LuZoomIn size={18} /></div>
                                        <h4 className="factory__card-title">{item.title}</h4>
                                        <p className="factory__card-desc">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        className="factory__lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <button
                            className="factory__lightbox-close"
                            onClick={closeLightbox}
                            aria-label="Close lightbox"
                        >
                            <LuX size={24} />
                        </button>

                        <button
                            className="factory__lightbox-nav factory__lightbox-nav--prev"
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            aria-label="Previous image"
                        >
                            <LuChevronLeft size={28} />
                        </button>

                        <motion.div
                            className="factory__lightbox-content"
                            key={lightbox}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={factoryImages[lightbox].src}
                                alt={factoryImages[lightbox].title}
                                className="factory__lightbox-img"
                            />
                            <div className="factory__lightbox-caption">
                                <h3>{factoryImages[lightbox].title}</h3>
                                <p>{factoryImages[lightbox].description}</p>
                            </div>
                        </motion.div>

                        <button
                            className="factory__lightbox-nav factory__lightbox-nav--next"
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            aria-label="Next image"
                        >
                            <LuChevronRight size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
