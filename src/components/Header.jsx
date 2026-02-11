import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';
import './Header.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#whyus' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveLink(`#${sections[i]}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header__container container">
        <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, '#home')}>
          <img src={logo} alt="New Lucky Furniture Industries" className="header__logo-img" />
        </a>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`header__nav-link ${activeLink === link.href ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
              {activeLink === link.href && (
                <motion.div
                  className="header__nav-indicator"
                  layoutId="navIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="btn btn-primary header__cta"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Get a Quote
        </a>

        <button
          className="header__menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="header__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="header__drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="header__drawer-header">
                <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, '#home')}>
                  <img src={logo} alt="New Lucky Furniture" className="header__logo-img" />
                </a>
                <button
                  className="header__drawer-close"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX size={24} />
                </button>
              </div>
              <nav className="header__drawer-nav">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`header__drawer-link ${activeLink === link.href ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href="#contact"
                className="btn btn-primary header__drawer-cta"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Get a Quote
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
