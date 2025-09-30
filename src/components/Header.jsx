import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="hero-split" id="home">
      {/* LEFT */}
      <div className="hero-left">
        <div className="brand-top">
          <img src="/ayyappaconstructions.png" alt="Sri Ayyappa" className="brand-logo" />
          <span className="brand-name">SRI AYYAPPA INTERIORS AND CONSTRUCTIONS</span>
        </div>

        <div className="title-block">
          <h1 className="title-line">DESIGN</h1>
          <h1 className="title-line">
            <span className="fade-letters">INTERIORS</span>
          </h1>
        </div>

        <p className="tagline strong">
          We are a team of planners, landscape architects and interior design.
        </p>
      </div>

      {/* RIGHT */}
      <div
        className="hero-right"
        style={{ backgroundImage: "url('/image.png')" }}
      />
    </header>
  );
}
