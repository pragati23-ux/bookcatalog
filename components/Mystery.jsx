import React from 'react'
import './Mystery.css'
function Mystery() {
  const mysteryBooks = [
  {
    title: 'The Vanishing Hour',
    description: 'A detective investigates a series of disappearances linked to an ancient clock.',
  },
  {
    title: 'Shadows of the Archive',
    description: 'A librarian uncovers a hidden manuscript that leads to a decades-old murder.',
  },
  {
    title: 'The Silent Key',
    description: 'A cryptic message found in a piano unlocks a deadly family secret.',
  },
];
  return (
     <div className="mystery-page">
      <h1>🕵️‍♀️ Mystery Fiction</h1>
      <p className="quote4">
        “The best secrets are the ones hidden in plain sight.”
      </p>
      <div className="book-list">
        {mysteryBooks.map((book, index) => (
          <div key={index} className="book-card4">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mystery