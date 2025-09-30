import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${show ? "nav--show" : ""}`}>
      <div className="container nav-inner">
        <a href="/" className="nav-logo">
          <img src="/ayyappaconstructions.png" alt="Sri Ayyappa" />
          <span>Sri Ayyappa</span>
        </a>

        <nav className="nav-links">
          <Link to="/about">About</Link>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="nav-mobile" onClick={() => setOpen(false)}>
          <Link to="/about">About</Link>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
        </div>
      )}
    </header>
  );
}
