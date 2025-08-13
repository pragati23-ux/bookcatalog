import React from 'react'
import './Romance.css'

function Romance() {
  const romanceBooks = [
  {
    title: 'Letters to the Moon',
    description: 'Two souls connect through handwritten letters across time.',
  },
  {
    title: 'The Last Dance',
    description: 'A ballerina and a soldier find love in the shadow of war.',
  },
  {
    title: 'Beneath Rosewood Skies',
    description: 'A small-town florist falls for a mysterious traveler.',
  },
];
  return (
     <div className="romance-page">
      <h1>💖 Romance Fiction</h1>
      <p className="quote2">
        “Writing fiction is the act of weaving a series of lies to arrive at a greater truth.” — Khaled Hosseini
      </p>
      <div className="book-list">
        {romanceBooks.map((book, index) => (
          <div key={index} className="book-card2">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Romance