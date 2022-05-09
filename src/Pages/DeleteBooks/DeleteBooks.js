import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useBooksHooks from '../Hooks/useBooksHooks';

const DeleteBooks = () => {
    const [books, setBooks] = useBooksHooks();

    const handleDelete = id => {
        const alert = window.confirm('Are you Sure?')
        if (alert) {
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
        <div className='w-75 mx-auto'>
            <h1 className='text-center'>Delete Your Books From Inventory</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Sold</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => {
                            return <tr>
                                <td><img className='car-img' src={book.img} alt="" width='50px' height='60px' /></td>
                                <td>{book.name}</td>
                                <td>${book.price}</td>
                                <td>{book.supplierName}</td>
                                <td>{book.sold}</td>
                                <td><Button onClick={() => handleDelete(book._id)} className='text-decoration-none' variant="link">   Delete</Button></td>
                            </tr>
                        })
                    }

                </tbody>
            </Table>

        </div >
    );
};

export default DeleteBooks;