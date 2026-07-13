import Nav from '../components/Nav';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';

const trustNames = [
  'Meridian Group',
  'Arkan Capital',
  'Bayt Holdings',
  'Noor Ventures',
  'Delta Partners',
  'Gulf Strategic',
  'Apex Advisory',
];

const services = [
  {
    num: '01',
    title: 'Business Strategy',
    desc: "Define where you're going and how to get there. We help leadership teams build strategies that are clear, differentiated, and executable.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4l-5 5-4-4-4 4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Financial Advisory',
    desc: 'From capital allocation to M&A readiness, we bring rigorous financial thinking to your most consequential decisions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Operations Excellence',
    desc: 'Eliminate friction and build operating systems that scale — without sacrificing the quality your customers expect.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10M6 20V4M18 20v-6" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Digital Transformation',
    desc: 'Navigate the shift to digital with a roadmap that aligns technology investment to business outcomes.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Leadership & Talent',
    desc: 'Build leadership teams and talent systems that can carry strategy into execution across every level of the organization.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Market Expansion',
    desc: 'Enter new markets with confidence. We map opportunities, assess risks, and build the commercial model to win from day one.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

const aboutPoints = [
  {
    title: 'Senior-led engagements',
    desc: 'You meet the partner on day one — and they stay with the project through delivery.',
  },
  {
    title: 'No boilerplate',
    desc: 'Every engagement starts from first principles, tailored to your specific context and constraints.',
  },
  {
    title: 'Embedded execution',
    desc: "We don't hand off and walk away. We build capability that outlasts the engagement.",
  },
];

const steps = [
  {
    n: '1',
    label: 'STEP 01',
    title: 'Understand',
    desc: 'A deep diagnostic of your organization, market, and the specific challenge. No assumptions — only evidence gathered with your team.',
  },
  {
    n: '2',
    label: 'STEP 02',
    title: 'Design',
    desc: 'Translate findings into a clear strategic response — prioritized, sequenced, and calibrated to your actual resources and risk tolerance.',
  },
  {
    n: '3',
    label: 'STEP 03',
    title: 'Execute',
    desc: 'Implementation support and real-time adjustment until results are locked in — not just promised on a slide deck.',
  },
];

const testimonials = [
  {
    quote:
      "Haya didn't just give us a strategy deck and leave. They worked alongside our leadership team for six months to make sure the transformation actually happened. The results exceeded every target we set.",
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    name: 'Sara Al-Mansoori',
    title: 'CEO, Meridian Holdings',
  },
  {
    quote:
      'Their financial advisory team helped us navigate a complex acquisition in a way that protected value and gave our board genuine confidence. Direct, honest, and completely accountable throughout.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80',
    name: 'Khalid Farouqi',
    title: 'CFO, Arkan Capital',
  },
  {
    quote:
      'We engaged Haya for a market expansion into three new countries. Their on-the-ground analysis and commercial model work saved us from several costly mistakes and got us to revenue 40% faster.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    name: 'Layla Rashid',
    title: 'COO, Noor Ventures',
  },
  {
    quote:
      'The operations review they conducted identified inefficiencies we had been living with for years. Within a quarter of implementation, our throughput improved by 28% with the same team size.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    name: 'Faisal Al-Hadid',
    title: 'MD, Delta Partners',
  },
];

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
    cap: 'Strategy Workshops',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=80',
    cap: 'Embedded Delivery Teams',
  },
  {
    src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&auto=format&fit=crop&q=80',
    cap: 'Executive Advisory',
  },
];

const stats = [
  { n: '180+', l: 'Engagements completed' },
  { n: '12', l: 'Countries served' },
  { n: '94%', l: 'Client retention rate' },
  { n: '$2B+', l: 'Client value influenced' },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="svc-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Nav />
      <Reveal />

      {/* HERO */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80"
            alt=""
          />
        </div>
        <div className="hero-inner">
          <h1>
            We turn <span>complex</span> challenges into clear outcomes
          </h1>
          <p className="lead" style={{ marginTop: '1.5rem' }}>
            Haya Consultancy is a full-service management consulting agency. We
            work with businesses at every stage — from ambitious startups to
            established enterprises — to drive sustainable growth and lasting
            impact.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold btn-lg">
              Get a Free Consultation
            </a>
            <a href="#services" className="btn btn-outline btn-lg">
              Our Services
            </a>
          </div>
        </div>
        <svg className="hero-scroll" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
        <div className="hero-strip">
          <div className="container">
            <div className="hero-strip-grid">
              <div className="hstat">
                <div className="hstat-n">180+</div>
                <div className="hstat-l">Engagements</div>
              </div>
              <div className="hstat">
                <div className="hstat-n">4.9/5</div>
                <div className="hstat-l">Client Satisfaction</div>
              </div>
              <div className="hstat">
                <div className="hstat-n">+34%</div>
                <div className="hstat-l">Avg. Revenue Growth</div>
              </div>
              <div className="hstat">
                <div className="hstat-n">12</div>
                <div className="hstat-l">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div className="trust">
        <div className="trust-track">
          {[...trustNames, ...trustNames].map((name, i) => (
            <span className="trust-item" key={i}>
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-top">
            <div className="reveal">
              <span className="eyebrow">What We Do</span>
              <h2 className="h2">
                Expertise aligned
                <br />
                with your ambitions
              </h2>
            </div>
            <p className="lead reveal d1" style={{ maxWidth: '38ch' }}>
              From high-level strategy to on-the-ground execution, every
              engagement is shaped around your specific challenge.
            </p>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <div className={`svc reveal d${i % 3}`} key={s.num}>
                <div className="svc-num">{s.num}</div>
                <div className="svc-icon">{s.icon}</div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.desc}</p>
                <ArrowIcon />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-imgs reveal">
              <div className="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&auto=format&fit=crop&q=80"
                  alt="Consultancy team at work"
                />
              </div>
              <div className="about-img-float">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80"
                  alt="Strategy session"
                />
              </div>
              <div className="about-stat">
                <div className="about-stat-n">12+</div>
                <div className="about-stat-l">Years of practice</div>
              </div>
            </div>
            <div className="reveal d1">
              <span className="eyebrow">About Haya</span>
              <h2 className="h2">Built on honest advice, not inflated decks</h2>
              <p className="about-body">
                Haya Consultancy was founded on the belief that the best
                consulting relationships feel less like vendor contracts and
                more like trusted partnerships. We work alongside your team —
                sharing risk, staying accountable, measuring success by outcomes
                that last.
              </p>
              <div className="about-points">
                {aboutPoints.map((p) => (
                  <div className="apoint" key={p.title}>
                    <div className="apoint-icon">
                      <CheckIcon />
                    </div>
                    <div className="apoint-text">
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn btn-gold btn-lg" style={{ marginTop: '2.5rem' }}>
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className={`stat reveal d${i}`} key={s.l}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="img-section">
        <img
          className="img-section-bg"
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&auto=format&fit=crop&q=80"
          alt="Modern office"
        />
        <div className="img-section-content">
          <div className="container">
            <div className="img-section-text reveal">
              <span className="eyebrow">Our Approach</span>
              <h2 className="h2">Clarity is the most valuable deliverable we provide</h2>
              <p className="lead">
                Most organizations don&apos;t lack information. They lack a
                clear point of view on what to do next — and the confidence to
                act on it. That&apos;s what we build.
              </p>
              <a href="#process" className="btn btn-gold btn-lg" style={{ marginTop: '2rem' }}>
                See How We Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="container">
          <div style={{ maxWidth: 600 }}>
            <span className="eyebrow reveal">How We Work</span>
            <h2 className="h2 reveal d1">A clear process with no unnecessary complexity</h2>
            <p className="lead reveal d2" style={{ marginTop: '1rem' }}>
              Every engagement moves through a consistent structure so you
              always know where things stand and what comes next.
            </p>
          </div>
          <div className="process-grid">
            {steps.map((s, i) => (
              <div className={`pstep reveal d${i}`} data-n={s.n} key={s.n}>
                <div className="pstep-n">{s.label}</div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="gallery">
            {gallery.map((g, i) => (
              <div className={`gallery-item reveal d${i}`} key={g.cap}>
                <img src={g.src} alt={g.cap} loading="lazy" />
                <span className="gallery-cap">{g.cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div>
            <span className="eyebrow reveal">Client Voices</span>
            <h2 className="h2 reveal d1">What our partners say</h2>
          </div>
          <div className="tgrid">
            {testimonials.map((t, i) => (
              <div className={`tcard reveal d${i}`} key={t.name}>
                <div className="tcard-stars">★★★★★</div>
                <blockquote>{t.quote}</blockquote>
                <div className="tauthor">
                  <div className="avatar">
                    <img src={t.photo} alt={t.name} loading="lazy" />
                  </div>
                  <div>
                    <div className="aname">{t.name}</div>
                    <div className="atitle">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div style={{ maxWidth: 600 }}>
            <span className="eyebrow reveal">Get In Touch</span>
            <h2 className="h2 reveal d1">Let&apos;s figure out what&apos;s possible together</h2>
            <p className="lead reveal d2" style={{ marginTop: '1rem' }}>
              No obligation, no pitch deck on the first call. Just an honest
              conversation about what you&apos;re trying to accomplish.
            </p>
          </div>
          <div className="contact-grid">
            <div className="reveal">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@hayaconsultancy.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
                  </svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+971 4 555 0000</p>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&auto=format&fit=crop&q=80"
                  alt="Haya Consultancy office"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="reveal d1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="nav-logo">
                <div className="logo-sq">H</div>
                <span>Haya</span>
              </a>
              <p>Strategic advisory for organizations ready to grow with purpose and precision.</p>
            </div>
            <div className="fcol">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Business Strategy</a></li>
                <li><a href="#services">Financial Advisory</a></li>
                <li><a href="#services">Operations</a></li>
                <li><a href="#services">Digital Transformation</a></li>
                <li><a href="#services">Market Expansion</a></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#process">How We Work</a></li>
                <li><a href="#testimonials">Case Studies</a></li>
                <li><a href="#contact">Careers</a></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Contact</h4>
              <div className="fcontact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="fcontact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hello@hayaconsultancy.com</span>
              </div>
              <div className="fcontact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
                </svg>
                <span>+971 4 555 0000</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Haya Consultancy. All rights reserved.</p>
            <div className="fsocial">
              <a href="#" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
