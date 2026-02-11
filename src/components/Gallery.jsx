import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { LuX, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import './Gallery.css';

const categories = ['All', 'Living Room', 'Bedroom', 'Office', 'Dining'];

const galleryItems = [
    { id: 1, category: 'Living Room', title: 'Modern L-Shaped Sofa', color: '#8B4513' },
    { id: 2, category: 'Bedroom', title: 'King Size Bed Frame', color: '#654321' },
    { id: 3, category: 'Office', title: 'Executive Desk', color: '#4a3728' },
    { id: 4, category: 'Dining', title: 'Six-Seater Dining Table', color: '#6B4423' },
    { id: 5, category: 'Living Room', title: 'TV Console Unit', color: '#5C4033' },
    { id: 6, category: 'Bedroom', title: 'Wardrobe with Mirror', color: '#3B2F2F' },
    { id: 7, category: 'Office', title: 'Conference Table', color: '#4E3524' },
    { id: 8, category: 'Living Room', title: 'Bookshelf Unit', color: '#704214' },
    { id: 9, category: 'Dining', title: 'Bar Counter Setup', color: '#5D3A1A' },
];

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightbox, setLightbox] = useState(null);

    const filtered =
        activeCategory === 'All'
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    const openLightbox = (item) => setLightbox(item);
    const closeLightbox = () => setLightbox(null);

    const navigateLightbox = (dir) => {
        if (!lightbox) return;
        const idx = filtered.findIndex((i) => i.id === lightbox.id);
        const next = (idx + dir + filtered.length) % filtered.length;
        setLightbox(filtered[next]);
    };

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
                    <h2 className="section-title">Crafted With Pride</h2>
                    <p className="section-description">
                        A showcase of our finest work — each piece designed and built with
                        meticulous attention to detail.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    className="gallery__filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`gallery__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div className="gallery__grid" layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item, i) => (
                            <motion.div
                                key={item.id}
                                className="gallery__item"
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                onClick={() => openLightbox(item)}
                            >
                                <div
                                    className="gallery__item-image"
                                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}
                                >
                                    <div className="gallery__item-placeholder">
                                        <span className="gallery__item-emoji">🪑</span>
                                    </div>
                                    <div className="gallery__item-overlay">
                                        <span className="gallery__item-title">{item.title}</span>
                                        <span className="gallery__item-category">{item.category}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        className="gallery__lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <button className="gallery__lightbox-close" onClick={closeLightbox}>
                                <LuX size={24} />
                            </button>
                            <button
                                className="gallery__lightbox-nav gallery__lightbox-prev"
                                onClick={() => navigateLightbox(-1)}
                            >
                                <LuChevronLeft size={28} />
                            </button>
                            <div
                                className="gallery__lightbox-image"
                                style={{ background: `linear-gradient(135deg, ${lightbox.color}, ${lightbox.color}dd)` }}
                            >
                                <span className="gallery__lightbox-emoji">🪑</span>
                            </div>
                            <button
                                className="gallery__lightbox-nav gallery__lightbox-next"
                                onClick={() => navigateLightbox(1)}
                            >
                                <LuChevronRight size={28} />
                            </button>
                            <div className="gallery__lightbox-info">
                                <h3>{lightbox.title}</h3>
                                <span>{lightbox.category}</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
