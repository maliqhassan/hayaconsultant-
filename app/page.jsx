import Nav from '../components/Nav';
import Hero from '../components/Hero';
import AOSInit from '../components/AOSInit';
import GsapFX from '../components/GsapFX';
import ContactForm from '../components/ContactForm';

const trustNames = [
  'GAMCA Approved Panels',
  'Verified Saudi Employers',
  'Licensed Recruitment',
  'Legal Contract Guarantee',
  'Umrah Travel Partners',
  'Ministry Compliant',
];

const services = [
  {
    num: '01',
    title: 'Work Visa & Manpower Services',
    desc: 'We connect job seekers with verified Saudi employers and help businesses source dependable manpower across construction, healthcare, hospitality, technical trades, and general labor.',
    points: [
      'Work visa processing for Saudi Arabia',
      'Screening of skilled, semi-skilled & professional candidates',
      'Bulk manpower recruitment for companies and projects',
      'Coordination with licensed, verified Saudi employers',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Employment With Proper Contracts',
    desc: "Every placement comes with a proper, legally binding employment contract — not just a verbal promise. You'll know exactly what you're signing up for before you travel.",
    points: [
      'Clear terms for job role, salary & working hours',
      'Contract duration, renewal & termination terms',
      'Employer obligations, accommodation & benefits',
      'Full transparency before departure — no hidden clauses',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Medical & Appointment Services',
    desc: 'Every overseas work visa requires a medical fitness certificate from an approved medical center. We take the guesswork out of this step, start to finish.',
    points: [
      'Booking at GAMCA-approved medical centers',
      'Guidance on required tests & fitness criteria',
      'Follow-up on medical reports and submission',
      'Re-scheduling & support for complications',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" />
        <path d="M9 12h1.5l1-2 2 4 1-2H16" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'File Preparation',
    desc: 'A strong visa application starts with a correctly prepared file. Our team makes sure nothing is missing or incorrect before submission.',
    points: [
      'Document collection, verification & organization',
      'Application form filling per embassy/GAMCA rules',
      'File compilation to exact immigration standards',
      'Accuracy checks to prevent rejection or delay',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Legal & Administrative Paperwork',
    desc: 'Once you are in Saudi Arabia, staying legally compliant matters just as much as getting there. We assist with Iqama and work permit paperwork after deployment.',
    points: [
      'Iqama (residency permit) processing & renewal',
      'Work permit documentation',
      'Guidance on Saudi labor law & Kafala sponsorship',
      'Assistance with government formalities',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Air Ticket Booking',
    desc: 'We handle your travel arrangements so your journey starts smoothly from day one — individual or group, outbound or return.',
    points: [
      'Individual and group air ticket booking',
      'Travel dates coordinated with visa & joining schedule',
      'Support for outbound and return/exit tickets',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22l20-9L2 2v7l14 2-14 2v9z" />
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Umrah Visa Services',
    desc: 'Planning to perform Umrah? We manage the complete package — visa, accommodation, and travel — so you can focus on your spiritual journey.',
    points: [
      'Umrah visa application and processing',
      'Hotel booking near Haram in Makkah & Madinah',
      'Guidance for individuals, families & groups',
      'Complete travel coordination — flights & transport',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v4M8 7h8l2 5H6l2-5z" />
        <path d="M4 21h16M6 21v-4a6 6 0 0112 0v4" />
      </svg>
    ),
  },
  {
    num: '08',
    title: 'Visit Visa Services',
    desc: 'Whether visiting family, attending business meetings, or exploring Saudi Arabia, we make the visit visa process simple for individuals and families.',
    points: [
      'Individual visit visa processing',
      'Family visit visa processing',
      'Document guidance and application support',
      'Assistance with validity & extensions',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

const aboutPoints = [
  {
    title: 'No agents, no middlemen',
    desc: 'We manage candidate sourcing, contracts, medicals, ticketing, and departure directly — clients never deal with confusing paperwork alone.',
  },
  {
    title: 'Full transparency & compliance',
    desc: 'We work in line with both Pakistani and Saudi regulations, so every worker travels with a legal contract.',
  },
  {
    title: 'Accurate, timely guidance',
    desc: 'From job seekers to travelers, everyone gets clear next steps — not vague promises.',
  },
];

const steps = [
  {
    n: '1',
    label: 'STEP 01',
    title: 'Consultation & Requirement Review',
    desc: "We understand your goal — employment, Umrah, or a family visit — and guide you on the right visa category.",
  },
  {
    n: '2',
    label: 'STEP 02',
    title: 'Document & File Preparation',
    desc: 'We collect, verify, and prepare your complete file, including medical appointments where required.',
  },
  {
    n: '3',
    label: 'STEP 03',
    title: 'Visa Processing & Approval',
    desc: 'Our team manages the visa application, contract issuance, and all legal/administrative steps.',
  },
  {
    n: '4',
    label: 'STEP 04',
    title: 'Travel & Deployment',
    desc: 'We arrange air tickets, hotel bookings (for Umrah), and coordinate your departure and arrival smoothly.',
  },
];

const whyUs = [
  { title: 'End-to-End Service', desc: 'From contract to ticket, we handle every step of your journey.' },
  { title: 'Verified Employers Only', desc: 'No fake job offers, no exploitation — every employer is checked.' },
  { title: 'Legally Binding Contracts', desc: 'Full transparency before you travel, with terms in writing.' },
  { title: 'Experienced Team', desc: 'Deep understanding of Pakistan–Saudi visa procedures.' },
  { title: 'Complete Umrah Packages', desc: 'Visa, hotel, and travel handled together, seamlessly.' },
  { title: 'Honest Guidance', desc: 'No false promises — just clear and accurate information.' },
];

const faqs = [
  {
    q: 'Do you provide job contracts before departure?',
    a: 'Yes. Every work visa placement includes a proper employment contract outlining salary, job role, and terms, provided before you travel.',
  },
  {
    q: 'Is the medical test mandatory for a work visa?',
    a: 'Yes, a medical fitness certificate from an approved center is required for all Saudi work visas. We help you book and complete this step.',
  },
  {
    q: 'Can you help with Iqama renewal after I arrive in Saudi Arabia?',
    a: 'Yes, we assist with Iqama and work permit-related paperwork even after deployment.',
  },
  {
    q: 'Do you arrange hotel stays for Umrah pilgrims?',
    a: 'Yes, our Umrah packages include visa processing along with hotel booking and travel arrangements in Makkah and Madinah.',
  },
  {
    q: 'Can families apply for a visit visa together?',
    a: 'Yes, we process both individual and family visit visas.',
  },
  {
    q: 'How long does the work visa process take?',
    a: 'Processing time varies by case, but our team works to complete documentation and submission as quickly as possible once your file is ready.',
  },
];

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1554774853-719586f82d77?w=800&auto=format&fit=crop&q=80',
    cap: 'Work Visa Deployment',
  },
  {
    src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&auto=format&fit=crop&q=80',
    cap: 'Umrah Travel & Stay',
  },
  {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80',
    cap: 'Family Visit Visas',
  },
];

const team = [
  {
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80',
    name: 'Imran Sheikh',
    role: 'Managing Director',
  },
  {
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
    name: 'Bilal Ahmed',
    role: 'Head of Recruitment',
  },
  {
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=80',
    name: 'Sana Malik',
    role: 'Documentation Lead',
  },
  {
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
    name: 'Ayesha Rafiq',
    role: 'Umrah & Travel Coordinator',
  },
];

const stats = [
  { count: '8', suffix: '', l: 'Core services offered' },
  { count: '100', suffix: '%', l: 'Legal, contract-based hiring' },
  { count: '2', suffix: '', l: 'Countries, one bridge' },
  { count: '24', suffix: '/7', l: 'Client support' },
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
      <AOSInit />
      <GsapFX />

      {/* HERO */}
      <Hero />

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
            <div data-aos="fade-up">
              <span className="eyebrow">Our Services</span>
              <h2 className="h2">
                Every step of your
                <br />
                journey, handled
              </h2>
            </div>
            <p className="lead" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '38ch' }}>
              From work visas and manpower recruitment to Umrah packages and
              family visit visas — one team manages it end to end.
            </p>
          </div>
          <div className="svc-grid svc-grid-4">
            {services.map((s, i) => (
              <div className="svc" data-aos="fade-up" data-aos-delay={(i % 4) * 90} key={s.num}>
                <div className="svc-num">{s.num}</div>
                <div className="svc-icon">{s.icon}</div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="svc-points">
                  {s.points.map((p) => (
                    <li key={p}>
                      <CheckIcon />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
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
            <div className="about-imgs" data-aos="fade-up">
              <div className="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&auto=format&fit=crop&q=80"
                  alt="Consultancy team at work"
                />
              </div>
              <div className="about-img-float">
                <img
                  src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&auto=format&fit=crop&q=80"
                  alt="Documentation review"
                />
              </div>
              <div className="about-stat">
                <div className="about-stat-n">8</div>
                <div className="about-stat-l">Services under one roof</div>
              </div>
            </div>
            <div data-aos="fade-up">
              <span className="eyebrow">About Us</span>
              <h2 className="h2">Your bridge between Pakistan and Saudi Arabia</h2>
              <p className="about-body">
                We are a Pakistan-based visa consultancy specializing in
                overseas employment, travel, and documentation services
                between Pakistan and Saudi Arabia. We support individuals
                seeking work or travel abroad, and employers looking to hire
                reliable manpower from Pakistan.
              </p>
              <p className="about-body">
                Our team manages the complete process — from candidate
                sourcing and contract preparation to visa processing, medical
                appointments, ticketing, and final departure — so our clients
                never have to deal with agents, middlemen, or confusing
                paperwork on their own.
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
              <a href="#contact" className="btn btn-copper btn-lg" style={{ marginTop: '2.5rem' }}>
                Get Started Today
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
              <div className="stat" data-aos="zoom-in" data-aos-delay={i * 80} key={s.l}>
                <div
                  className="stat-n"
                  data-count={s.count}
                  data-prefix={s.prefix || ''}
                  data-suffix={s.suffix || ''}
                >
                  {(s.prefix || '') + '0' + (s.suffix || '')}
                </div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="img-section">
        <div className="img-section-bg" data-parallax>
          <img
            src="https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1600&auto=format&fit=crop&q=80"
            alt="Makkah travel"
          />
        </div>
        <div className="img-section-content on-dark">
          <div className="container">
            <div className="img-section-text" data-aos="fade-up">
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="h2">Honest guidance, not false promises</h2>
              <p className="lead">
                No fake job offers. No exploitation. Every contract is legally
                binding and every traveler gets accurate, timely guidance from
                consultation to arrival.
              </p>
              <a href="#process" className="btn btn-copper btn-lg" style={{ marginTop: '2rem' }}>
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
            <span className="eyebrow" data-aos="fade-up">Our Process</span>
            <h2 className="h2" data-aos="fade-up" data-aos-delay="80">From consultation to deployment</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="160" style={{ marginTop: '1rem' }}>
              Every case moves through a consistent structure so you always
              know where things stand and what comes next.
            </p>
          </div>
          <div className="process-grid process-grid-4">
            {steps.map((s, i) => (
              <div className="pstep" data-n={s.n} data-aos="fade-up" data-aos-delay={i * 100} key={s.n}>
                <div className="pstep-n">{s.label}</div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="gallery">
            {gallery.map((g, i) => (
              <div className="gallery-item" data-aos="zoom-in" data-aos-delay={i * 100} key={g.cap}>
                <img src={g.src} alt={g.cap} loading="lazy" />
                <span className="gallery-cap">{g.cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="on-dark">
            <span className="eyebrow" data-aos="fade-up">Why Choose Us</span>
            <h2 className="h2" data-aos="fade-up" data-aos-delay="80">
              Why families and workers trust us
            </h2>
          </div>
          <div className="tgrid tgrid-3">
            {whyUs.map((w, i) => (
              <div className="tcard why-card" data-aos="fade-up" data-aos-delay={(i % 3) * 100} key={w.title}>
                <div className="why-check">
                  <CheckIcon />
                </div>
                <h4 className="why-title">{w.title}</h4>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team" id="team">
        <div className="container">
          <div style={{ maxWidth: 600 }}>
            <span className="eyebrow" data-aos="fade-up">Our Team</span>
            <h2 className="h2" data-aos="fade-up" data-aos-delay="80">
              The people who manage your case
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="160" style={{ marginTop: '1rem' }}>
              A dedicated team handling recruitment, documentation, and travel
              — so you always have someone to call.
            </p>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div className="team-card" data-aos="fade-up" data-aos-delay={i * 90} key={m.name}>
                <div className="team-photo">
                  <img src={m.photo} alt={m.name} loading="lazy" />
                </div>
                <div className="team-info">
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div style={{ maxWidth: 600 }}>
            <span className="eyebrow" data-aos="fade-up">Common Questions</span>
            <h2 className="h2" data-aos="fade-up" data-aos-delay="80">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <details className="faq-item" data-aos="fade-up" data-aos-delay={(i % 3) * 80} key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div style={{ maxWidth: 600 }}>
            <span className="eyebrow" data-aos="fade-up">Get In Touch</span>
            <h2 className="h2" data-aos="fade-up" data-aos-delay="80">Get Started Today</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="160" style={{ marginTop: '1rem' }}>
              Whether you&apos;re looking for a job opportunity in Saudi
              Arabia, need help with your paperwork, or are planning your
              Umrah journey, our team is ready to guide you every step of the
              way.
            </p>
          </div>
          <div className="contact-grid">
            <div data-aos="fade-up">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Office Address, City, Pakistan</p>
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
                  <p>hayavisa28@gmail.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
                  </svg>
                </div>
                <div>
                  <h4>Call / WhatsApp</h4>
                  <p>0542196208</p>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=80"
                  alt="Office consultation"
                  loading="lazy"
                />
              </div>
            </div>
            <div data-aos="fade-up">
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
                <span>Haya Visa</span>
              </a>
              <p>Guiding journeys, simplifying paperwork, opening possibilities between Pakistan and Saudi Arabia.</p>
            </div>
            <div className="fcol">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Work Visa &amp; Manpower</a></li>
                <li><a href="#services">Umrah Visa Services</a></li>
                <li><a href="#services">Visit Visa Services</a></li>
                <li><a href="#services">Medical &amp; File Prep</a></li>
                <li><a href="#services">Iqama &amp; Work Permits</a></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#process">How We Work</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Contact</h4>
              <div className="fcontact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Office Address, City, Pakistan</span>
              </div>
              <div className="fcontact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hayavisa28@gmail.com</span>
              </div>
              <div className="fcontact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
                </svg>
                <span>0542196208</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Haya Visa Consultancy. All rights reserved.</p>
            <div className="fsocial">
              <a href="#" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.1v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.5-.6.6-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 3 1.9.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.5-.3.8-.2.3.1 1.9.9 2.2 1.1.3.2.5.2.6.4.1.2.1.9-.1 1.6z" />
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
