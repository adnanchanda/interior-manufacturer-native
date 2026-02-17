import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { LuX, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import './Gallery.css';

// Living Room
import living1 from '../assets/living_1.jpg';
import living2 from '../assets/living_2.jpg';

// Bedroom
import bedroom1 from '../assets/bedroom_1.jpg';
import bedroom2 from '../assets/bedroom_2.jpg';
import bedroom3 from '../assets/bedroom_3.jpg';

// Dining
import dining1 from '../assets/dining_1.jpg';
import dining2 from '../assets/dining_2.jpg';
import dining3 from '../assets/dining_3.jpg';
import dining4 from '../assets/dining_4.jpg';

// Office
import office1 from '../assets/office_1.jpg';
import office2 from '../assets/office_2.jpg';
import office3 from '../assets/office_3.jpg';
import office4 from '../assets/office_4.jpg';
import office5 from '../assets/office_5.jpg';
import office6 from '../assets/office_6.jpg';

// School
import school1 from '../assets/school_1.jpg';
import school2 from '../assets/school_2.jpg';
import school3 from '../assets/school_3.jpg';

// Hotel
import hotel1 from '../assets/hotel_1.jpg';
import hotel2 from '../assets/hotel_2.jpg';
import hotel3 from '../assets/hotel_3.jpg';

const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'School', 'Hotel'];

const galleryItems = [
    // Living Room
    { id: 1, category: 'Living Room', title: 'Modern Living Room Setup', src: living1 },
    { id: 2, category: 'Living Room', title: 'Contemporary Living Space', src: living2 },

    // Bedroom
    { id: 3, category: 'Bedroom', title: 'Elegant Bedroom Suite', src: bedroom1 },
    { id: 4, category: 'Bedroom', title: 'Luxurious Bedroom Design', src: bedroom2 },
    { id: 5, category: 'Bedroom', title: 'Cozy Bedroom Interior', src: bedroom3 },

    // Dining
    { id: 6, category: 'Dining', title: 'Premium Dining Set', src: dining1 },
    { id: 7, category: 'Dining', title: 'Classic Dining Room', src: dining2 },
    { id: 8, category: 'Dining', title: 'Designer Dining Table', src: dining3 },
    { id: 9, category: 'Dining', title: 'Modern Dining Space', src: dining4 },

    // Office
    { id: 10, category: 'Office', title: 'Professional Office Setup', src: office1 },
    { id: 11, category: 'Office', title: 'Executive Workspace', src: office2 },
    { id: 12, category: 'Office', title: 'Modern Conference Room', src: office3 },
    { id: 13, category: 'Office', title: 'Ergonomic Office Design', src: office4 },
    { id: 14, category: 'Office', title: 'Corporate Office Interior', src: office5 },
    { id: 15, category: 'Office', title: 'Compact Office Solution', src: office6 },

    // School
    { id: 16, category: 'School', title: 'Classroom Furniture', src: school1 },
    { id: 17, category: 'School', title: 'Student Desk & Chairs', src: school2 },
    { id: 18, category: 'School', title: 'School Interior Setup', src: school3 },

    // Hotel
    { id: 19, category: 'Hotel', title: 'Premium Hotel Lounge', src: hotel1 },
    { id: 20, category: 'Hotel', title: 'Luxury Hotel Suite', src: hotel2 },
    { id: 21, category: 'Hotel', title: 'Hotel Room Furniture', src: hotel3 },
];

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightbox, setLightbox] = useState(null);

    const filtered =
        activeCategory === 'All'
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    const openLightbox = (index) => setLightbox(index);
    const closeLightbox = () => setLightbox(null);
    const goNext = () => setLightbox((prev) => (prev + 1) % filtered.length);
    const goPrev = () =>
        setLightbox((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));

    return (
        <section id="gallery" className="gallery section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Our Portfolio</span>
                    <h2 className="section-title">Crafted With Excellence</h2>
                    <p className="section-description">
                        Browse through our curated collection of furniture designs across
                        homes, offices, hotels, schools, and dining spaces.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    className="gallery__tabs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`gallery__tab ${activeCategory === cat ? 'gallery__tab--active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                            {activeCategory === cat && (
                                <motion.div
                                    className="gallery__tab-indicator"
                                    layoutId="galleryTab"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div className="gallery__grid" layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item, i) => (
                            <motion.div
                                key={item.id}
                                className="gallery__card"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                                onClick={() => openLightbox(i)}
                            >
                                <div className="gallery__card-image">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <div className="gallery__card-overlay">
                                        <span className="gallery__card-category">{item.category}</span>
                                        <h4 className="gallery__card-title">{item.title}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && filtered[lightbox] && (
                    <motion.div
                        className="gallery__lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <button
                            className="gallery__lightbox-close"
                            onClick={closeLightbox}
                            aria-label="Close"
                        >
                            <LuX size={24} />
                        </button>

                        <button
                            className="gallery__lightbox-nav gallery__lightbox-nav--prev"
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            aria-label="Previous"
                        >
                            <LuChevronLeft size={28} />
                        </button>

                        <motion.div
                            className="gallery__lightbox-content"
                            key={filtered[lightbox].id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={filtered[lightbox].src}
                                alt={filtered[lightbox].title}
                                className="gallery__lightbox-img"
                            />
                            <div className="gallery__lightbox-caption">
                                <span className="gallery__lightbox-cat">{filtered[lightbox].category}</span>
                                <h3>{filtered[lightbox].title}</h3>
                            </div>
                        </motion.div>

                        <button
                            className="gallery__lightbox-nav gallery__lightbox-nav--next"
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            aria-label="Next"
                        >
                            <LuChevronRight size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
