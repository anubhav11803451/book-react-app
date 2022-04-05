import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './screens/login/login';
import Search from './screens/search/search';
import Details from './screens/details/details';

function App() {
  const [book, setBook] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path={`book/:id=${book?.id}`} element={<Details book={book?.volumeInfo} />} />
        <Route path="search" element={<Search setBook={setBook} />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
