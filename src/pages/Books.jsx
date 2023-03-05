import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const allBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4000/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    allBooks();
  }, [])

  const handleDelete = async (id) => {
    try {
      axios.delete("http://localhost:4000/books/"+id);
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  return (
     <div>
      <h1 className='booksTitle'>LineCoran Book Shop</h1>
      <div className='books'>
      {
        books.map((book) => (
         <div key={book.id} className='book'>
          <h2 className='bookTitle'>{book.title}</h2>
          {book.cover && <img className='bookImage' src={book.cover}/>}
          <p className='bookDesc'>{book.desc}</p>
          <button className="deleteBook" onClick={() => handleDelete(book.id)}>Delete book</button>
          <button className="updateBook"><Link to={`update/${book.id}`}>Update book</Link></button>
         </div> 
        )
      )}
    </div>
    <button className='formButton'><Link to={'/add'}>Add book</Link></button>  
    </div>
    
  )
}
