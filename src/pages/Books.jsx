import React, { useEffect, useState } from 'react';
import axios from 'axios';

// document.addEventListener('click', () => {
//   const res = axios.get("http://localhost:4000/books").then((data) => console.log(data));
// })

export default function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const allBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4000/books");
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    allBooks();
  }, [])
  return (
    <div>Books</div>
  )
}
