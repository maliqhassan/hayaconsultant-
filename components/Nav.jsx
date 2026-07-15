'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQs' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={scrolled ? 'scrolled' : ''}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              <div className="logo-sq">H</div>
              <span>Haya Visa</span>
            </a>
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-copper nav-cta">
              Contact Us
            </a>
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </motion.nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-copper" onClick={() => setOpen(false)}>
          Contact Us
        </a>
      </div>
    </>
  );
}
