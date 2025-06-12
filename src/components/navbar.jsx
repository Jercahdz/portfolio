import React, { useState } from "react";
import './navbar.css';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="/images/logo_sin.png"
            alt="logo"
          />
          <img
            src="/images/logo-18.png"
            alt="Jerson Hernández"
            className="navbar-name"
          />
        </div>

        {/* Botón de menú hamburguesa */}
        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Enlaces */}
        <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>{item.name}</a>
            </li>
          ))}

          {/* Botón CV para móvil */}
          <li className="navbar-btn-mobile">
            <a href="/cv_JersonHernandez.pdf" download>Download CV</a>
          </li>
        </ul>

        {/* Botón CV para desktop */}
        <div className="navbar-btn">
          <a href="/cv_JersonHernandez.pdf" download>Download CV</a>
        </div>

      </div>
    </nav>
  );
}