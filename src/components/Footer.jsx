import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        {/* Left column */}
        <div className="footer__col">
          <img src="/ayyappaconstructions.png" alt="Sri Ayyappa" className="footer__logo" />
          <p className="footer__desc">
            Transforming spaces with innovative interior designs and exceptional
            construction quality since inception.
          </p>
        </div>

        {/* Middle column */}
        <div className="footer__col">
          <h4 className="footer__title">Our Services</h4>
          <ul className="footer__links">
            <li>Residential Interior Design</li>
            <li>Home Renovation</li>
            <li>Construction Services</li>
            <li>Design Consultation</li>
            <li>Color &amp; Material Selection</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="footer__col">
          <h4 className="footer__title">Contact Info</h4>
          <ul className="footer__links">
            <li><Phone size={16} /> +91 8008778790</li>
            <li><Mail size={16} /> sainteriorconstructions@gmail.com</li>
            <li><MapPin size={16} /> Buchireddypalem,Nellore</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        © 2025 Sri Ayyappa Constructions. All rights reserved.
      </div>
    </footer>
  );
}
