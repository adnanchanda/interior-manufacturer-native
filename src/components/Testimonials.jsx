import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { LuStar, LuChevronLeft, LuChevronRight, LuQuote } from 'react-icons/lu';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Patil',
        role: 'Homeowner, Solapur',
        rating: 5,
        text: 'New Lucky Furniture transformed our living room completely. The quality of the sofa set and dining table is exceptional. It\'s been 5 years and they still look brand new!',
    },
    {
        id: 2,
        name: 'Priya Deshmukh',
        role: 'Interior Designer',
        rating: 5,
        text: 'I\'ve been recommending New Lucky to all my clients. Their attention to detail and ability to execute custom designs is unmatched in Solapur. True craftsmen at heart.',
    },
    {
        id: 3,
        name: 'Sunil Agarwal',
        role: 'Business Owner',
        rating: 5,
        text: 'They furnished our entire office space — from executive desks to the conference room. Professional service, on-time delivery, and outstanding build quality.',
    },
    {
        id: 4,
        name: 'Meena Kulkarni',
        role: 'Homeowner, Pune',
        rating: 5,
        text: 'We got our complete bedroom set customized. The wardrobe design they suggested was perfect for our space. Excellent value for money and great after-sales support.',
    },
    {
        id: 5,
        name: 'Amit Joshi',
        role: 'Architect',
        rating: 5,
        text: 'Working with New Lucky is always a pleasure. They understand architecture and space constraints perfectly. Their furniture fits beautifully into any design scheme.',
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (dir) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    };

    const variants = {
        enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <section id="testimonials" className="testimonials section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Testimonials</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-description">
                        Real stories from real customers who trust us with their spaces.
                    </p>
                </motion.div>

                <motion.div
                    className="testimonials__carousel"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="testimonials__quote-icon">
                        <LuQuote size={40} />
                    </div>

                    <div className="testimonials__slider">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                className="testimonials__slide"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                            >
                                <div className="testimonials__stars">
                                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                                        <LuStar key={i} className="testimonials__star" />
                                    ))}
                                </div>
                                <p className="testimonials__text">&ldquo;{testimonials[current].text}&rdquo;</p>
                                <div className="testimonials__author">
                                    <div className="testimonials__avatar">
                                        {testimonials[current].name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="testimonials__name">{testimonials[current].name}</h4>
                                        <span className="testimonials__role">{testimonials[current].role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="testimonials__controls">
                        <button className="testimonials__nav" onClick={() => goTo(-1)}>
                            <LuChevronLeft size={20} />
                        </button>
                        <div className="testimonials__dots">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`testimonials__dot ${i === current ? 'active' : ''}`}
                                    onClick={() => {
                                        setDirection(i > current ? 1 : -1);
                                        setCurrent(i);
                                    }}
                                />
                            ))}
                        </div>
                        <button className="testimonials__nav" onClick={() => goTo(1)}>
                            <LuChevronRight size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
