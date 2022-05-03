import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = (props) => {
    const { _id, name, description, price, img, quantity, sold, supplierName } = props.booksInfo;


    const navigate = useNavigate();
    const navigateToBookDetails = id => {
        navigate(`/books/${id}`)
    }
    return (
        <div className='bg-secondary card h-100'>
            <img src={img} alt="" height='500px' />
            <div className='mt-3'>
                <h4 className='text-warning'>{name}</h4>
                <hr />
                <p>{description}</p>
                <h5>Price : ${price}</h5>
                <p>Supplier-Name :{supplierName}</p>
                <h5>Quantity :<button>{quantity}</button></h5>
                <h5>Sold :{sold}</h5>
                <button onClick={() => navigateToBookDetails(_id)} className='btn-org'>More Information</button>

            </div>

        </div>
    );
};

export default Book;