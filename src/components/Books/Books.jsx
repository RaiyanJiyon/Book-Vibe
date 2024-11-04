import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("booksData.json")
            .then(response => response.json())
            .then(jsonData => setBooks(jsonData))
    }, [])

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='w-1/2 mx-auto mt-20 text-4xl font-bold text-center'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-9'>
                {
                    books.map(book => (
                        <Book key={book.bookId} book={book} />
                    ))
                }
            </div>
        </div>
    );
};

export default Books;