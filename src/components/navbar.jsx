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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* LOGO */}
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

        {/* MENU */}
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

          {/* MOBILE BUTTON */}
          <li className="navbar-btn-mobile dropdown-mobile">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              Download CV ▾
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu-mobile">
                <a href="/cv_JersonHernandez_EN.pdf" download>English</a>
                <a href="/cv_JersonHernandez_ES.pdf" download>Español</a>
              </div>
            )}
          </li>
        </ul>

        {/* DESKTOP BUTTON */}
        <div className="navbar-btn dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Download CV ▾
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="/cv_JersonHernandez_EN.pdf" download>English</a>
              <a href="/cv_JersonHernandez_ES.pdf" download>Español</a>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}