import React from 'react';

const HomeBooks = (props) => {
    const { name, description, price, img, quantity, sold, supplierName } = props.booksInfo;
    return (
        <div>
            <div className='bg-dark text-light card h-100 p-5'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{description}</p>
                <h5>Price : {price}</h5>
                <p>Supplier-Name :{supplierName}</p>
                <div className='d-flex justify-content-center'>
                    <h5>Quantity :{quantity}</h5>
                    <h5>Sold :{sold}</h5>
                </div>
            </div>
        </div>
    );
};

export default HomeBooks;