import React from "react";
import "../styles/Services.css";
import { Home, Palette, Hammer, Lightbulb } from "lucide-react";

const SERVICES = [
  {
    icon: <Home size={28} strokeWidth={2.2} />,
    title: "Residential Interiors",
    desc: "Complete home interior solutions with modern designs and premium finishes",
  },
  {
    icon: <Palette size={28} strokeWidth={2.2} />,
    title: "Color Consultation",
    desc: "Expert color schemes and material selection for harmonious living spaces",
  },
  {
    icon: <Hammer size={28} strokeWidth={2.2} />,
    title: "Construction Services",
    desc: "Quality construction and renovation services with attention to detail",
  },
  {
    icon: <Lightbulb size={28} strokeWidth={2.2} />,
    title: "Design Planning",
    desc: "Comprehensive design planning from concept to completion",
  },
];

export default function Services() {
  return (
    <section className="svc" id="services">
      <div className="svc__wrap">
        <header className="svc__head">
          <h2 className="svc__title">Our Services</h2>
          <p className="svc__sub">
            We specialize in creating beautiful, functional interior spaces that
            reflect your style and enhance your lifestyle
          </p>
        </header>

        <div className="svc__grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="svc-card">
              <div className="svc-card__icon">{s.icon}</div>
              <h3 className="svc-card__title">{s.title}</h3>
              <p className="svc-card__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
