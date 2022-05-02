import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = (props) => {
    const { _id, name, description, price, img } = props.booksInfo;


    const navigate = useNavigate();
    const navigateToBookDetails = id => {
        navigate(`/books/${id}`)
    }
    return (
        <div className='bg-info'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <h5>{price}</h5>
            <button onClick={() => navigateToBookDetails(_id)} className='btn-org'>More Information</button>
        </div>
    );
};

export default Book;