import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = (props) => {
    const { _id, name, description, price, img, quantity, sold, supplierName } = props.booksInfo;


    const navigate = useNavigate();
    const navigateToBookDetails = id => {
        navigate(`/books/${id}`)
    }
    return (
        <div className='bg-dark card h-100 text-light p-2'>
            <img src={img} alt="" />
            <div className='mt-3'>
                <h4 className='text-danger'>{name}</h4>
                <hr />
                <p className='text-secondary'>{description}</p>
                <h5>Price : ${price}</h5>
                <div className='d-flex justify-content-center align-content-center'>
                    <p className='p-2'>Supplier-Name :{supplierName}</p>
                    <p className='p-2'>Quantity :{quantity}</p>
                    <p className='p-2'>Sold :{sold}</p>
                </div>

                <button onClick={() => navigateToBookDetails(_id)} className='btn-org bg-white rounded border shadow px-4 py-2 m-2'>More Information</button>

            </div>

        </div>
    );
};

export default Book;