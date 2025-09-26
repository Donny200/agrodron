// src/components/FieldMap.js
import React from "react";
import "../styles/FieldMap.css";

export default function FieldMap({ imageUrl, points }) {
  // Считаем количество точек по цветам
  const counts = {
    red: points.filter((p) => p.color === "red").length,
    yellow: points.filter((p) => p.color === "yellow").length,
    green: points.filter((p) => p.color === "green").length,
  };

  return (
    <div className="chart-card">
      <h3>Анализ дня</h3>

      {/* Фото поля с точками */}
      <div className="field-map">
        <img src={imageUrl} alt="Поле" className="field-image" />
        {points.map((p, i) => (
          <div
            key={i}
            className={`dot ${p.color}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          />
        ))}
      </div>

      {/* Легенда и счетчики */}
      <div className="legend">
        <div className="legend-item">
          <span className="legend-dot red" /> Проблемы ({counts.red})
        </div>
        <div className="legend-item">
          <span className="legend-dot yellow" /> Средне ({counts.yellow})
        </div>
        <div className="legend-item">
          <span className="legend-dot green" /> ОК ({counts.green})
        </div>
      </div>
    </div>
  );
}
