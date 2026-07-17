'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const bannerImages = [
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80',
    alt: 'Professional consulting team',
  },
  {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80',
    alt: 'Traveler ready for departure',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % bannerImages.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-split">
        <motion.div
          className="hero-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-badge-row" variants={item}>
            <span className="hero-badge-dot"></span>
            Pakistan &rarr; Saudi Arabia
          </motion.div>
          <motion.h1 className="h1" variants={item}>
            Your Trusted <span>Bridge</span> Between Pakistan and Saudi Arabia
          </motion.h1>
          <motion.p className="lead" variants={item}>
            From work visas to Umrah travel, we handle every step of your
            journey — with honesty, speed, and complete documentation
            support.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <a href="#contact" className="btn btn-copper btn-lg">
              Get Started
            </a>
            <a href="#services" className="btn btn-line btn-lg">
              Explore Job Openings
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-shape" aria-hidden="true"></div>
          <div className="hero-img-frame" data-parallax>
            <AnimatePresence mode="sync">
              {bannerImages.map(
                (img, i) =>
                  i === active && (
                    <motion.img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="hero-img-slide"
                    />
                  )
              )}
            </AnimatePresence>
            <div className="hero-img-dots">
              {bannerImages.map((img, i) => (
                <button
                  key={img.src}
                  className={`hero-img-dot${i === active ? ' active' : ''}`}
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
          <motion.div
            className="hero-float-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.8 },
              y: { duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 1 },
            }}
          >
            <div className="hero-float-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div>
              <p>Contracts</p>
              <strong>100% Legal &amp; Verified</strong>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-strip"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <div className="container">
          <div className="hero-strip-grid">
            <div className="hstat">
              <div className="hstat-n" data-count="8">0</div>
              <div className="hstat-l">Core Services</div>
            </div>
            <div className="hstat">
              <div className="hstat-n" data-count="100" data-suffix="%">0</div>
              <div className="hstat-l">Legal Contracts</div>
            </div>
            <div className="hstat">
              <div className="hstat-n" data-count="2" data-suffix="+">0</div>
              <div className="hstat-l">Countries Connected</div>
            </div>
            <div className="hstat">
              <div className="hstat-n" data-count="24" data-suffix="/7">0</div>
              <div className="hstat-l">Client Support</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
