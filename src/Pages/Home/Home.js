import React from 'react';
import useBooksHooks from '../Hooks/useBooksHooks';
import Book from './Book/Book';
import './home.css'

const Home = () => {
    const [books] = useBooksHooks();
    return (
        <div>
            <h1>Welcome to HOme Page </h1>
            <div className='books-container'>
                {
                    books.slice(0, 6).map(booksInfo => <Book
                        booksInfo={booksInfo}
                        key={booksInfo.id}>

                    </Book>)
                }
            </div>
        </div>
    );
};

export default Home;