import React, { useEffect, useState } from 'react';

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className={`about-card fade-in ${visible ? 'visible' : ''}`}>
      <h3 className="slide-in-top">О нас</h3>
      <p className="muted slide-in-left delay-1">
        AgroDron создаёт автономные дроны с AI для мониторинга сельхозугодий. 
        Дрон сканирует поле, отмечает стрессовые зоны и генерирует отчёты прямо в браузере.
      </p>

      <div className="about-grid">
        <div className="about-item pop-in delay-1">
          <strong>🎯 Цель</strong>
          <div className="muted small">Экономить ресурсы, находя проблемные участки.</div>
        </div>
        <div className="about-item pop-in delay-2">
          <strong>🛰️ Дрон</strong>
          <div className="muted small">AI-модель определяет засуху, болезни и др.</div>
        </div>
        <div className="about-item pop-in delay-3">
          <strong>📊 Отчёты</strong>
          <div className="muted small">История и визуализация (красный/жёлтый/зелёный).</div>
        </div>
      </div>
    </section>
  );
}