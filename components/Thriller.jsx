import React from 'react'
import './Thriller.css';
function Thriller() {
  const thrillerBooks = [
  {
    title: 'The Cipher Code',
    description: 'A cryptographer races against time to stop a global conspiracy.',
  },
  {
    title: 'Echoes of Deceit',
    description: 'A journalist uncovers a web of lies that could cost her everything.',
  },
  {
    title: 'The Final Witness',
    description: 'A courtroom thriller where the truth is more dangerous than the crime.',
  },
];
  return (

<div className="thriller-page">
      <h1>🕵️‍♂️ Thriller Fiction</h1>
      <p className="quote3">
        “The suspense is terrible. I hope it will last.” — Oscar Wilde
      </p>
      <div className="book-list">
        {thrillerBooks.map((book, index) => (
          <div key={index} className="book-card3">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  
 
     
  )
}

export default Thriller