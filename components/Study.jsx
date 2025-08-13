 import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Study() {
  const { bookId } = useParams(); // e.g., "OL18020194W"
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        if (!response.ok) throw new Error('Book not found');
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  if (loading) return <div>Loading...</div>;
  if (!book) return <div>Book not found.</div>;

  return (
    <div className="study-page">
      <h1>{book.title}</h1>
      <p>
        {typeof book.description === 'string'
          ? book.description
          : book.description?.value || 'No description available.'}
      </p>
      {book.subjects && (
        <>
          <h2>📖 Subjects</h2>
          <ul>
            {book.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
