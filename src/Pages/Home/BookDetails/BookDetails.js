import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const BookDetails = () => {
    const { booksId } = useParams();
    const [details, setDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://shrouded-plateau-55748.herokuapp.com/books/${booksId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    const handleAddBook = () => {
        navigate('/addbooks')
    }
    const handleDelivered = () => {
        const newQuantity = parseInt(details.quantity) - 1;
        const stringQuantity = newQuantity.toString();
        const updateQuantity = { ...details, quantity: stringQuantity }
        fetch(`https://shrouded-plateau-55748.herokuapp.com/books/${booksId}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setDetails(updateQuantity)
            })
    }
    const handleRestock = (e) => {
        e.preventDefault()
        const quantityValue = e.target.name.value;
        const restockQuantity = parseInt(details.quantity) + parseInt(quantityValue);
        const newRestockString = restockQuantity.toString()
        const newrestockQuantity = { ...details, quantity: newRestockString }
        fetch(`https://shrouded-plateau-55748.herokuapp.com/books/${booksId}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newrestockQuantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setDetails(newrestockQuantity)
            })
    }

    return (
        <div className='container m-5 bg-light mx-auto'>
            <div className='row justify-content-md-center align-items-center'>
                <div className='col-md-6'>
                    <h2>Welcome to detail: {details.name}</h2>
                    <p>{details.description}</p>
                    <h5>Price :{details.price}</h5>
                    <h5>Quantity :<button>{details.quantity}</button></h5>
                    <div className='mx-auto'>
                        <button onClick={handleDelivered} className='bg-danger text-white border py-2 px-5 rounded'>Delivered</button>
                    </div>
                </div>
                <div className='row col-md-6 justify-content-md-center p-5'>
                    <img src={details.img} alt="" width='50px' height='500px' />
                </div>
                <div>
                    <form onSubmit={handleRestock} className="w-50 mx-auto">
                        <h2>Restock</h2>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"></label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="number" aria-describedby="emailHelp" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <div className=''>
                <button onClick={handleAddBook} className='bg-danger text-white border py-2 px-5 rounded'>Add More Books</button>
            </div>
        </div>
    );
};

export default BookDetails;