'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent(
      `New inquiry: ${data.get('service')} — ${data.get('name')}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:hello@hayaconsultancy.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-form">
        <div className="form-success">
          <h3 className="h3">Thank you!</h3>
          <p>
            Your email client should have opened with your message. We&apos;ll
            get back to you within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Interested In</label>
        <select id="service" name="service" defaultValue="Business Strategy">
          <option>Business Strategy</option>
          <option>Financial Advisory</option>
          <option>Operations Excellence</option>
          <option>Digital Transformation</option>
          <option>Leadership &amp; Talent</option>
          <option>Market Expansion</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us briefly about your challenge…"
          required
        />
      </div>
      <button type="submit" className="btn btn-gold btn-lg form-submit">
        Send Message
      </button>
    </form>
  );
}
