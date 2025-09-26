import React, { useEffect, useState } from 'react';
import DroneModel from '../components/DroneModel';
import About from '../components/About';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';

export default function LandingPage({ onNavigate }) {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHero(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="container landing-container">
      <div className={`hero card-hero fade-in ${showHero ? 'visible' : ''}`}>
        <div className="hero-left slide-in-left">
          <h1 className="animated-text">AgroDron — AI Drone for Smart Farming</h1>
          <p className="muted slide-in-left delay-1">Сканируйте поля, находите стрессовые зоны и экономьте ресурсы.</p>
          <div style={{ marginTop:20 }}>
            <button className="btn-primary glow" onClick={() => onNavigate('login')}>Запросить </button>
            <button className="btn-ghost glow-ghost" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior:'smooth' })}>Узнать больше</button>
          </div>
        </div>
        <div className="hero-right slide-in-right">
          <DroneModel />
        </div>
      </div>

      <div className="content-sections">
        <About />
        <Features />
        <div className="contact-section">
          <ContactForm />
          
        </div>
        <div className="additional-content fade-in delay-5">
          <h3 className="slide-in-top">Почему AgroDron?</h3>
          <p className="muted slide-in-left">В современном сельском хозяйстве важно оперативно реагировать на изменения. Наши дроны помогают фермерам принимать обоснованные решения, основанные на данных.</p>
          <ul className="benefits-list">
            <li className="pop-in delay-1">Увеличение урожайности до 20%</li>
            <li className="pop-in delay-2">Снижение затрат на удобрения</li>
            <li className="pop-in delay-3">Экологичность и устойчивость</li>
            <li className="pop-in delay-4">Простота использования</li>
          </ul>
        </div>
        <div className="call-to-action fade-in delay-6">
          <h3 className="slide-in-top">Готовы преобразить ваше хозяйство?</h3>
          <button className="btn-primary glow" onClick={() => onNavigate('login')}>Начать сейчас</button>
        </div>
      </div>
    </div>
  );
}