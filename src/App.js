import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HistoryPage from './pages/HistoryPage';
import MapPage from './components/MapPage'; // 👈 новый импорт
import './styles/App.css';

export default function App() {
  const [route, setRoute] = useState('landing'); // 'landing' | 'login' | 'history' | 'map'
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('demo_user')); } catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem('demo_user', JSON.stringify(user));
    else localStorage.removeItem('demo_user');
  }, [user]);

  const navigate = (r) => setRoute(r);

  const handleLogin = (u) => {
    setUser(u);
    setRoute('history');
  };

  const handleLogout = () => {
    setUser(null);
    setRoute('landing');
  };

  return (
    <div className="app-root">
      <Navbar
        onNavigate={navigate}
        isAuthenticated={!!user}
        onLogout={handleLogout}
      />

      <main className="main-area">
        {route === 'landing' && <LandingPage onNavigate={navigate} />}
        {route === 'login' && <LoginPage onLogin={handleLogin} />}
        {route === 'history' && (user ? <HistoryPage /> : <LoginPage onLogin={handleLogin} />)}
        {route === 'map' && <MapPage />} {/* 👈 новая страница */}
      </main>

      <footer className="app-footer">
        © {new Date().getFullYear()} AgroDron — Landing
      </footer>
    </div>
  );
}
