import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function submit(e) {
    e.preventDefault();
    if (email === 'demo' && pass === '1234') {
      onLogin({ email });
    } else {
      alert('Неверный логин. Попробуйте demo / 1234');
    }
  }

  return (
    <div className="container login-container">
      <div className="login-card card-hover fade-in visible">
        <h2 className="slide-in-top">Вход в демо</h2>
        <form className="login-form" onSubmit={submit}>
          <input className="field pop-in delay-1" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="field pop-in delay-2" placeholder="Пароль" type="password" value={pass} onChange={e => setPass(e.target.value)} />
          <div className="login-helpers">
            <div className="muted small pop-in delay-3">demo / 1234</div>
            <button className="btn-primary pop-in delay-4" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}