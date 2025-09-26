// src/components/Features.js
import React, { useEffect, useState } from 'react';
import '../styles/Features.css'; // 👈 подключаем CSS

export default function Features() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="features" 
      className={`features-card fade-in ${visible ? 'visible' : ''}`}
    >
      <h3 className={`slide-in-top ${visible ? 'visible' : ''}`}>Функции</h3>
      
      <p className={`muted slide-in-left delay-1 ${visible ? 'visible' : ''}`}>
        Наши дроны предлагают передовые функции для оптимизации сельского хозяйства.
      </p>

      <div className="features-grid">
        <div className={`feature-item pop-in delay-1 ${visible ? 'visible' : ''}`}>
          <strong>🔍 Автоматическое сканирование</strong>
          <div className="muted small">Дрон автономно облетает поля и собирает данные.</div>
        </div>
        <div className={`feature-item pop-in delay-2 ${visible ? 'visible' : ''}`}>
          <strong>🤖 AI-анализ</strong>
          <div className="muted small">Искусственный интеллект выявляет проблемы в реальном времени.</div>
        </div>
        <div className={`feature-item pop-in delay-3 ${visible ? 'visible' : ''}`}>
          <strong>📈 Детальные отчёты</strong>
          <div className="muted small">Визуализированные данные с рекомендациями.</div>
        </div>
        <div className={`feature-item pop-in delay-4 ${visible ? 'visible' : ''}`}>
          <strong>🌐 Интеграция с облаком</strong>
          <div className="muted small">Доступ к данным из любого устройства.</div>
        </div>
        <div className={`feature-item pop-in delay-5 ${visible ? 'visible' : ''}`}>
          <strong>🔋 Долгое время полёта</strong>
          <div className="muted small">До 2 часов непрерывной работы.</div>
        </div>
        <div className={`feature-item pop-in delay-6 ${visible ? 'visible' : ''}`}>
          <strong>🛡️ Безопасность данных</strong>
          <div className="muted small">Шифрование и защита информации.</div>
        </div>
      </div>
    </section>
  );
}