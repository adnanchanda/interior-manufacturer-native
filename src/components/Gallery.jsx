import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { LuX, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import OptimizedImage from './OptimizedImage';
import './Gallery.css';

// Optimized WebP images
import living1 from '../assets/optimized/living_1.webp';
import living2 from '../assets/optimized/living_2.webp';
import bedroom1 from '../assets/optimized/bedroom_1.webp';
import bedroom2 from '../assets/optimized/bedroom_2.webp';
import bedroom3 from '../assets/optimized/bedroom_3.webp';
import dining1 from '../assets/optimized/dining_1.webp';
import dining2 from '../assets/optimized/dining_2.webp';
import dining3 from '../assets/optimized/dining_3.webp';
import dining4 from '../assets/optimized/dining_4.webp';
import office1 from '../assets/optimized/office_1.webp';
import office2 from '../assets/optimized/office_2.webp';
import office3 from '../assets/optimized/office_3.webp';
import office4 from '../assets/optimized/office_4.webp';
import office5 from '../assets/optimized/office_5.webp';
import office6 from '../assets/optimized/office_6.webp';
import school1 from '../assets/optimized/school_1.webp';
import school2 from '../assets/optimized/school_2.webp';
import school3 from '../assets/optimized/school_3.webp';
import hotel1 from '../assets/optimized/hotel_1.webp';
import hotel2 from '../assets/optimized/hotel_2.webp';
import hotel3 from '../assets/optimized/hotel_3.webp';

// Blur placeholders
import living1Ph from '../assets/placeholders/living_1_placeholder.webp';
import living2Ph from '../assets/placeholders/living_2_placeholder.webp';
import bedroom1Ph from '../assets/placeholders/bedroom_1_placeholder.webp';
import bedroom2Ph from '../assets/placeholders/bedroom_2_placeholder.webp';
import bedroom3Ph from '../assets/placeholders/bedroom_3_placeholder.webp';
import dining1Ph from '../assets/placeholders/dining_1_placeholder.webp';
import dining2Ph from '../assets/placeholders/dining_2_placeholder.webp';
import dining3Ph from '../assets/placeholders/dining_3_placeholder.webp';
import dining4Ph from '../assets/placeholders/dining_4_placeholder.webp';
import office1Ph from '../assets/placeholders/office_1_placeholder.webp';
import office2Ph from '../assets/placeholders/office_2_placeholder.webp';
import office3Ph from '../assets/placeholders/office_3_placeholder.webp';
import office4Ph from '../assets/placeholders/office_4_placeholder.webp';
import office5Ph from '../assets/placeholders/office_5_placeholder.webp';
import office6Ph from '../assets/placeholders/office_6_placeholder.webp';
import school1Ph from '../assets/placeholders/school_1_placeholder.webp';
import school2Ph from '../assets/placeholders/school_2_placeholder.webp';
import school3Ph from '../assets/placeholders/school_3_placeholder.webp';
import hotel1Ph from '../assets/placeholders/hotel_1_placeholder.webp';
import hotel2Ph from '../assets/placeholders/hotel_2_placeholder.webp';
import hotel3Ph from '../assets/placeholders/hotel_3_placeholder.webp';

const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'School', 'Hotel'];

const galleryItems = [
    // Living Room
    { id: 1, category: 'Living Room', title: 'Modern Living Room Setup', src: living1, placeholder: living1Ph },
    { id: 2, category: 'Living Room', title: 'Contemporary Living Space', src: living2, placeholder: living2Ph },

    // Bedroom
    { id: 3, category: 'Bedroom', title: 'Elegant Bedroom Suite', src: bedroom1, placeholder: bedroom1Ph },
    { id: 4, category: 'Bedroom', title: 'Luxurious Bedroom Design', src: bedroom2, placeholder: bedroom2Ph },
    { id: 5, category: 'Bedroom', title: 'Cozy Bedroom Interior', src: bedroom3, placeholder: bedroom3Ph },

    // Dining
    { id: 6, category: 'Dining', title: 'Premium Dining Set', src: dining1, placeholder: dining1Ph },
    { id: 7, category: 'Dining', title: 'Classic Dining Room', src: dining2, placeholder: dining2Ph },
    { id: 8, category: 'Dining', title: 'Designer Dining Table', src: dining3, placeholder: dining3Ph },
    { id: 9, category: 'Dining', title: 'Modern Dining Space', src: dining4, placeholder: dining4Ph },

    // Office
    { id: 10, category: 'Office', title: 'Professional Office Setup', src: office1, placeholder: office1Ph },
    { id: 11, category: 'Office', title: 'Executive Workspace', src: office2, placeholder: office2Ph },
    { id: 12, category: 'Office', title: 'Modern Conference Room', src: office3, placeholder: office3Ph },
    { id: 13, category: 'Office', title: 'Ergonomic Office Design', src: office4, placeholder: office4Ph },
    { id: 14, category: 'Office', title: 'Corporate Office Interior', src: office5, placeholder: office5Ph },
    { id: 15, category: 'Office', title: 'Compact Office Solution', src: office6, placeholder: office6Ph },

    // School
    { id: 16, category: 'School', title: 'Classroom Furniture', src: school1, placeholder: school1Ph },
    { id: 17, category: 'School', title: 'Student Desk & Chairs', src: school2, placeholder: school2Ph },
    { id: 18, category: 'School', title: 'School Interior Setup', src: school3, placeholder: school3Ph },

    // Hotel
    { id: 19, category: 'Hotel', title: 'Premium Hotel Lounge', src: hotel1, placeholder: hotel1Ph },
    { id: 20, category: 'Hotel', title: 'Luxury Hotel Suite', src: hotel2, placeholder: hotel2Ph },
    { id: 21, category: 'Hotel', title: 'Hotel Room Furniture', src: hotel3, placeholder: hotel3Ph },
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
                                    <OptimizedImage
                                        src={item.src}
                                        placeholder={item.placeholder}
                                        alt={item.title}
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
