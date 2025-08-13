import React from 'react'
import './Horror.css'

function Horror() {
  const horrorBooks = [
  {
    title: 'Whispers in the Walls',
    description: 'A haunted mansion reveals secrets that should’ve stayed buried.',
  },
  {
    title: 'The Hollow Night',
    description: 'A small town faces unspeakable terror when darkness falls.',
  },
  {
    title: 'Bloodroot',
    description: 'An ancient curse awakens in the forest, feeding on fear.',
  },
];
  return (
     <div className="horror-page">
      <h1>👻 Horror Fiction</h1>
      <p className="quote1">
        “Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.” — Stephen King
      </p>
      <div className="book-list">
        {horrorBooks.map((book, index) => (
          <div key={index} className="book-card1">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Horror