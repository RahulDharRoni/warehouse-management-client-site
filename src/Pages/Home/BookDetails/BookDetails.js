import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const BookDetails = () => {
    const { booksId } = useParams();
    const [details, setDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/books/${booksId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    const handleAddBook = () => {
        navigate('/addbooks')
    }

    return (
        <div className='container m-5 bg-light'>
            <div className='row justify-content-md-center align-items-center'>
                <div className='col-md-6'>
                    <h2>Welcome to detail: {details.name}</h2>
                    <p>{details.description}</p>
                    <h5>Price :{details.price}</h5>
                    <div className='mx-auto'>
                        <button onClick={handleAddBook} className='bg-danger text-white border py-2 px-5 rounded'>Add More Books</button>
                    </div>
                </div>
                <div className='row col-md-6 justify-content-md-center p-5'>
                    <img src={details.img} alt="" width='50px' height='500px' />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;