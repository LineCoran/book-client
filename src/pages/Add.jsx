import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Add() {

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const postBook = async () => {
    try {
      const res = await axios.post('http://localhost:4000/books', book);
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="form">
      <h1>Add new book</h1>
      <input type="text" name='title' onChange={handleChange} placeholder='title' />
      <input type="text" name='desc' onChange={handleChange} placeholder='description' />
      <input type="number" name='price' onChange={handleChange} placeholder='price' />
      <input type="text" name='cover' onChange={handleChange} placeholder='cover' />
      <button className='formButton' onClick={postBook}>Add book</button>
      <button className='formButton'><Link to={"/"}>Home</Link></button>
    </div>
  )
}
