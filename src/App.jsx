import React, { useState } from 'react'
import './App.css';
import Login from './screens/login/login';
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const search = (val) => {
    let query = val.target.value;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(
        res => {
          console.log('data', res);
          setBooks(res.data.items);
        });
  }
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <input placeholder='Search' onChange={search} />
        {
          books && books.length > 0 && books.map((book, index) => {
            return (
              <div key={index}>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.description}</p>
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
