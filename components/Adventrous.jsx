 import React from 'react';
import './Adventrous.css'; // Optional: for custom styling

const adventurousBooks = [
  {
    title: 'The Lost City Chronicles',
    description: 'A daring archaeologist uncovers secrets buried for centuries.',
  },
  {
    title: 'Skybound',
    description: 'A pilot’s journey across war-torn skies to deliver hope.',
  },
  {
    title: 'The Ember Trail',
    description: 'Teens stumble upon a portal to a forgotten realm.',
  },
];

export default function Adventurous() {
  return (
    <div className="adventurous-page">
      <h1>🌍 Adventurous Fiction</h1>
      <p className="quote">
        “Adventure is not outside man; it is within.” — George Eliot
      </p>
      <div className="book-list">
        {adventurousBooks.map((book, index) => (
          <div key={index} className="book-card">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
