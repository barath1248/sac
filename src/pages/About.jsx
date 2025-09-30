import React from "react";
import { CheckCircle2, Phone, Mail, ArrowLeft } from "lucide-react";
import "../styles/About.css";

const WHATSAPP_NUMBER = "+91 8008778790";          // change if needed
const COMPANY_EMAIL   = "sainteriorconstructions@gmail.com";   // change if needed

export default function About() {
  return (
    <main className="about">
      <button 
        className="back-button"
        onClick={() => window.history.back()}
        aria-label="Go back"
      >
        <ArrowLeft size={20} />
      </button>
      <section className="about__wrap">
        {/* Left: text */}
        <div className="about__text">
          <h1 className="about__title">About Sri Ayyappa Constructions</h1>
          <p className="about__lead">
            We are a startup servicing company focused on <strong>interior design</strong> and
            practical on-site services. Our approach is simple: clear communication, clean design,
            and reliable execution.
          </p>

          <div className="about__block">
            <h2>What we do</h2>
            <ul className="about__list">
              <li><CheckCircle2 size={18}/> Turnkey interior design for homes and apartments</li>
              <li><CheckCircle2 size={18}/> Extra services: <em>color combinations</em> and material guidance</li>
              <li><CheckCircle2 size={18}/> <em>Site visit</em> support for nearby areas to assess spaces and scope</li>
              <li><CheckCircle2 size={18}/> Transparent estimates and milestone-based planning</li>
            </ul>
          </div>

          <div className="about__cta">
            <a
              className="btn-primary"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to discuss an interior project.")}`}
              target="_blank" rel="noreferrer"
            >
              <Phone size={16}/> Chat on WhatsApp
            </a>
            <a className="btn-ghost" href={`mailto:${COMPANY_EMAIL}`}>
              <Mail size={16}/> Email Us
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="about__photo">
          {/* Replace with your photo path */}
          <img src="/me.jpg" alt="Founder" />
        </div>
      </section>
    </main>
  );
}
