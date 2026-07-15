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
      `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:hayavisa28@gmail.com?subject=${subject}&body=${body}`;
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
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" placeholder="03xx xxxxxxx" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="service">I&apos;m Interested In</label>
        <select id="service" name="service" defaultValue="Work Visa & Manpower">
          <option>Work Visa &amp; Manpower</option>
          <option>Employment Contract</option>
          <option>Medical Appointment</option>
          <option>File Preparation</option>
          <option>Iqama / Work Permit</option>
          <option>Air Ticket Booking</option>
          <option>Umrah Visa Services</option>
          <option>Visit Visa (Individual/Family)</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us briefly about your requirement…"
          required
        />
      </div>
      <button type="submit" className="btn btn-copper btn-lg form-submit">
        Send Message
      </button>
    </form>
  );
}
