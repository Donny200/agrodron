import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!contact.trim()) return alert('Введите телефон или email');
    alert(`Заявка принята\nИмя: ${name}\nКонтакт: ${contact}\nКомментарий: ${comment}`);
    setName(''); setContact(''); setComment('');
  }

  return (
    <form className="contact-card fade-in" onSubmit={submit}>
      <h4 className="slide-in-top">Оставить заявку</h4>
      <input className="field pop-in delay-1" placeholder="Имя (опционально)" value={name} onChange={e=>setName(e.target.value)} />
      <input className="field pop-in delay-2" placeholder="Телефон или email" value={contact} onChange={e=>setContact(e.target.value)} />
      <textarea className="field area pop-in delay-3" placeholder="Комментарий" value={comment} onChange={e=>setComment(e.target.value)} />
      <div style={{display:'flex',justifyContent:'flex-end'}}>
        <button className="btn-primary glow pop-in delay-4" type="submit">Отправить</button>
      </div>
    </form>
  );
}