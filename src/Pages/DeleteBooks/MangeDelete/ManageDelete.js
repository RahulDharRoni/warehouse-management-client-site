import React from 'react';
import useBooksHooks from '../../Hooks/useBooksHooks';

const ManageDelete = (props) => {
    const [books, setBooks] = useBooksHooks();
    const { name, description, price, img, quantity, sold, supplierName } = props.book

    const handleDelete = id => {
        const alert = window.confirm('Are you Sure?')
        if (alert) {
            // const url = `https://shrouded-plateau-55748.herokuapp.com/books/${id}`
            fetch(`https://shrouded-plateau-55748.herokuapp.com/books/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const booksRemaining = books.filter(book => book._id !== id)
                    setBooks(booksRemaining);
                })
        }
    }
    return (
        <div>
            <h1>{name} <button onCanPlay={() => { handleDelete(books._id) }}>X</button></h1>
        </div>
    );
};

export default ManageDelete;