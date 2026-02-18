import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { LuX, LuChevronLeft, LuChevronRight, LuFactory, LuUsers, LuWrench, LuZoomIn } from 'react-icons/lu';
import OptimizedImage from './OptimizedImage';
import './Factory.css';

// Optimized WebP images
import factoryExterior from '../assets/optimized/1CDFBCB6-9920-4079-95F0-10738991D3A4.webp';
import craftsmen from '../assets/optimized/3DFC2125-956E-4C18-9F0F-DD9D4FFFE5C6.webp';
import workshopFloor from '../assets/optimized/3FE6B5C9-F5EA-458B-86CA-42769B8AA71F.webp';
import drillingMachine from '../assets/optimized/6023430E-330D-4460-BE22-6490CBD8CD55.webp';
import productionArea from '../assets/optimized/IMG_2236.JPG.webp';
import aerialView from '../assets/optimized/IMG_2992.jpg.webp';
import holzmaMachine from '../assets/optimized/18ED5C3F-CC10-49B6-B53B-1F0D2324E558.webp';
import multiBoring from '../assets/optimized/3_head_multi_boring.webp';
import coldPress from '../assets/optimized/fifty_ton_cold_press.webp';
import edgeBanding from '../assets/optimized/homag_automatic_edge.webp';
import craftsmanship1 from '../assets/optimized/precised_craftsmanship.webp';
import craftsmanship2 from '../assets/optimized/precised_craftsmanship2.webp';

// Blur placeholders
import factoryExteriorPh from '../assets/placeholders/1CDFBCB6-9920-4079-95F0-10738991D3A4_placeholder.webp';
import craftsmenPh from '../assets/placeholders/3DFC2125-956E-4C18-9F0F-DD9D4FFFE5C6_placeholder.webp';
import workshopFloorPh from '../assets/placeholders/3FE6B5C9-F5EA-458B-86CA-42769B8AA71F_placeholder.webp';
import drillingMachinePh from '../assets/placeholders/6023430E-330D-4460-BE22-6490CBD8CD55_placeholder.webp';
import productionAreaPh from '../assets/placeholders/IMG_2236.JPG_placeholder.webp';
import aerialViewPh from '../assets/placeholders/IMG_2992.jpg_placeholder.webp';
import holzmaMachinePh from '../assets/placeholders/18ED5C3F-CC10-49B6-B53B-1F0D2324E558_placeholder.webp';
import multiBoringPh from '../assets/placeholders/3_head_multi_boring_placeholder.webp';
import coldPressPh from '../assets/placeholders/fifty_ton_cold_press_placeholder.webp';
import edgeBandingPh from '../assets/placeholders/homag_automatic_edge_placeholder.webp';
import craftsmanship1Ph from '../assets/placeholders/precised_craftsmanship_placeholder.webp';
import craftsmanship2Ph from '../assets/placeholders/precised_craftsmanship2_placeholder.webp';

const factoryImages = [
    {
        src: factoryExterior,
        placeholder: factoryExteriorPh,
        title: 'Our Factory',
        description: 'The NLFI manufacturing facility in Solapur',
    },
    {
        src: craftsmen,
        placeholder: craftsmenPh,
        title: 'Modern Machinery',
        description: 'SCM-Panel Saw for precision board cutting and efficient production',
    },
    {
        src: holzmaMachine,
        placeholder: holzmaMachinePh,
        title: 'Automatic Beam Saw',
        description: 'Homag Automatic Beam saw for precision board cutting',
    },
    {
        src: workshopFloor,
        placeholder: workshopFloorPh,
        title: 'Production Floor',
        description: 'Our team at work on the spacious workshop floor',
    },
    {
        src: drillingMachine,
        placeholder: drillingMachinePh,
        title: 'Precision Equipment',
        description: 'Holytek industrial drilling machine for accurate woodwork',
    },
    {
        src: productionArea,
        placeholder: productionAreaPh,
        title: 'Manufacturing Bay',
        description: 'Doors and panels in various stages of production',
    },
    {
        src: aerialView,
        placeholder: aerialViewPh,
        title: 'Factory Overview',
        description: 'Aerial view of our facility with dust collection system',
    },
    {
        src: multiBoring,
        placeholder: multiBoringPh,
        title: '3-Head Multi Boring',
        description: 'Multi-spindle boring machine for precise dowel hole drilling',
    },
    {
        src: coldPress,
        placeholder: coldPressPh,
        title: '50-Ton Cold Press',
        description: 'Heavy-duty cold press for laminate and veneer bonding',
    },
    {
        src: edgeBanding,
        placeholder: edgeBandingPh,
        title: 'Homag Edge Banding',
        description: 'Automatic Homag edge banding machine for seamless finishes',
    },
    {
        src: craftsmanship1,
        placeholder: craftsmanship1Ph,
        title: 'Precise Craftsmanship',
        description: 'Skilled hands ensuring every detail meets our quality standards',
    },
    {
        src: craftsmanship2,
        placeholder: craftsmanship2Ph,
        title: 'Artisan at Work',
        description: 'Meticulous attention to detail in every piece we craft',
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
                    <OptimizedImage
                        src={hero.src}
                        placeholder={hero.placeholder}
                        alt={hero.title}
                        className="factory__hero-img-wrapper"
                    />
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
                                <OptimizedImage src={item.src} placeholder={item.placeholder} alt={item.title} className="factory__card-img-wrapper" />
                                <div className="factory__card-overlay">
                                    <div className="factory__card-zoom"><LuZoomIn size={18} /></div>
                                    <h4 className="factory__card-title">{item.title}</h4>
                                    <p className="factory__card-desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 2: 1 large + 2 stacked */}
                    <div className="factory__row factory__row--featured">
                        <motion.div
                            className="factory__card factory__card--large"
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.55 }}
                            onClick={() => openLightbox(4)}
                        >
                            <OptimizedImage src={rest[3].src} placeholder={rest[3].placeholder} alt={rest[3].title} className="factory__card-img-wrapper" />
                            <div className="factory__card-overlay">
                                <div className="factory__card-zoom"><LuZoomIn size={18} /></div>
                                <h4 className="factory__card-title">{rest[3].title}</h4>
                                <p className="factory__card-desc">{rest[3].description}</p>
                            </div>
                        </motion.div>

                        <div className="factory__card-stack">
                            {rest.slice(4, 6).map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    className="factory__card"
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                                    onClick={() => openLightbox(i + 5)}
                                >
                                    <OptimizedImage src={item.src} placeholder={item.placeholder} alt={item.title} className="factory__card-img-wrapper" />
                                    <div className="factory__card-overlay">
                                        <div className="factory__card-zoom"><LuZoomIn size={18} /></div>
                                        <h4 className="factory__card-title">{item.title}</h4>
                                        <p className="factory__card-desc">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Row 3: 3 images */}
                    <div className="factory__row factory__row--3">
                        {rest.slice(6, 9).map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="factory__card"
                                initial={{ opacity: 0, y: 25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
                                onClick={() => openLightbox(i + 7)}
                            >
                                <OptimizedImage src={item.src} placeholder={item.placeholder} alt={item.title} className="factory__card-img-wrapper" />
                                <div className="factory__card-overlay">
                                    <div className="factory__card-zoom"><LuZoomIn size={18} /></div>
                                    <h4 className="factory__card-title">{item.title}</h4>
                                    <p className="factory__card-desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 4: 2 stacked + 1 large */}
                    <div className="factory__row factory__row--featured">
                        <div className="factory__card-stack">
                            {rest.slice(9, 11).map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    className="factory__card"
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.95 + i * 0.1 }}
                                    onClick={() => openLightbox(i + 10)}
                                >
                                    <OptimizedImage src={item.src} placeholder={item.placeholder} alt={item.title} className="factory__card-img-wrapper" />
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
