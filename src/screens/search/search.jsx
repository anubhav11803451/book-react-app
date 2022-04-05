import React, { useState } from 'react';
import PropTypes from 'prop-types'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = props => {
    const { setBook } = props;
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    const search = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            .then(
                res => {
                    setBooks(res.data.items);
                });
    }

    const seeDetails = (book) => {
        if (book.volumeInfo.imageLinks) {
            console.log(book?.volumeInfo);
            setBook(book);
            navigate(`/book/:id=${book?.id}`);
        }
    }
    return (
        <div>
            <input type="text" onChange={(val) => setQuery(val.target.value)} placeholder='Search for books' />
            <button onClick={search}>Search</button>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    books && books.length > 0 && books.map((book, index) => {
                        return (
                            <div key={index} style={{ margin: '10px 20px' }}>
                                {/* <h3>{book.volumeInfo?.title}</h3> */}
                                <img src={book.volumeInfo?.imageLinks.thumbnail} alt="book" />
                                {/* <p>{book.volumeInfo?.description}</p> */}
                                <button style={{ display: "block", margin: '5px 0px' }} onClick={() => seeDetails(book)}>See details</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Search.propTypes = {
    setBook: PropTypes.func.isRequired
};

export default Search