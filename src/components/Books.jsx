import React, { useEffect, useState } from 'react';
import { use } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
        
        
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center container mx-auto'>
            {
                books.map(book => <Book key={book.bookId} {...book}></Book>)
                
            }
            
        </div>
    );
};


export default Books;