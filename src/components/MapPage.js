// src/components/MapComponent.jsx
import React from "react"; 

export default function MapComponent() {
  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "500px" }}>
      <a
        href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
        style={{ color: "#eee", fontSize: "12px", position: "absolute", top: 0 }}
      >
        Ташкент
      </a>
      <a
        href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
        style={{ color: "#eee", fontSize: "12px", position: "absolute", top: 14 }}
      >
        Ташкент — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
        width="100%"
        height="500"
        frameBorder="1"
        allowFullScreen
        style={{ position: "relative" }}
        title="Yandex Map"
      ></iframe>
    </div>
  );
}
