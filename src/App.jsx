import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages
import About from "./pages/About";

function Home() {
  return (
    <>
      <Header />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
