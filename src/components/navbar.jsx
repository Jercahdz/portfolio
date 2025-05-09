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
            src="https://cdn.discordapp.com/attachments/1362253861506650266/1363964196089499679/logo_sin.png?ex=6807f225&is=6806a0a5&hm=e4218c7422f70852d08c4ce0c3c58c6d0ee2b8373e20082daf3f4572a406e71d&"
            alt="logo"
          />
          <img
            src="https://cdn.discordapp.com/attachments/1362253861506650266/1364464055087005778/logo-18.png?ex=6809c3ad&is=6808722d&hm=9c3095c68e51904e3d78a6d066289ae0873a1dd3469678cccfbe59c710c1ff28&" // <- reemplaza con la ruta correcta si es distinta
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