// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import logo from '../images/logodron.png'; // 👈 путь относительно Navbar.js

export default function Navbar({ onNavigate, isAuthenticated, onLogout }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('landing');
    }
  };

  return (
    <header className={`nav-wrap fade-in ${visible ? 'visible' : ''}`}>
      <div className="nav-inner container">
        <div
          className="brand-row"
          onClick={() => onNavigate('landing')}
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-placeholder">
            <img
              src={logo} // 👈 теперь работает
              alt="Логотип"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <div className="brand-text">
            <div className="brand-title">AgroDron</div>
            <div className="brand-sub">Drone AI for farms</div>
          </div>
        </div>

        <nav className="nav-actions">
          <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
          <button className="nav-link" onClick={() => scrollToSection('features')}>Features</button>
          {isAuthenticated ? (
            <>
              <button className="nav-cta" onClick={() => onNavigate('history')}>Dashboard</button>
                <button className="nav-link" onClick={() => onNavigate('map')}>Map</button>
              <button className="nav-link" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <button className="nav-cta" onClick={() => onNavigate('login')}>Login</button>
          )}
        </nav>
      </div>
    </header>
  );
}
