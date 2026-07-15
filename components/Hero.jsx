'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-bg" data-parallax>
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&auto=format&fit=crop&q=80"
          alt=""
        />
      </div>
      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="h1" variants={item}>
          Your Trusted <span>Bridge</span> Between Pakistan and Saudi Arabia
        </motion.h1>
        <motion.p className="lead" variants={item}>
          From work visas to Umrah travel, we handle every step of your
          journey — with honesty, speed, and complete documentation support.
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
        className="hero-strip"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
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
