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
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80"
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
          We turn <span>complex</span> challenges into clear outcomes
        </motion.h1>
        <motion.p className="lead" variants={item}>
          Haya Consultancy is a full-service management consulting agency. We
          work with businesses at every stage — from ambitious startups to
          established enterprises — to drive sustainable growth and lasting
          impact.
        </motion.p>
        <motion.div className="hero-actions" variants={item}>
          <a href="#contact" className="btn btn-copper btn-lg">
            Get a Free Consultation
          </a>
          <a href="#services" className="btn btn-line btn-lg">
            Our Services
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
              <div className="hstat-n" data-count="180" data-suffix="+">0</div>
              <div className="hstat-l">Engagements</div>
            </div>
            <div className="hstat">
              <div className="hstat-n" data-count="4.9" data-decimals="1" data-suffix="/5">0</div>
              <div className="hstat-l">Client Satisfaction</div>
            </div>
            <div className="hstat">
              <div className="hstat-n" data-count="34" data-prefix="+" data-suffix="%">0</div>
              <div className="hstat-l">Avg. Revenue Growth</div>
            </div>
            <div className="hstat">
              <div className="hstat-n" data-count="12">0</div>
              <div className="hstat-l">Countries Served</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
