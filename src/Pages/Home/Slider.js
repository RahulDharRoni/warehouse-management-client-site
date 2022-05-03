import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='bg-dark bg-opacity-75'>
                    <img
                        className="d-block w-100 opacity-100"
                        src="https://cdn.pixabay.com/photo/2019/11/30/21/37/stars-4664313_1280.jpg"
                        alt="First slide"
                        height='600px'
                    />
                    <Carousel.Caption>
                        <div className='bg-dark bg-opacity-75 d-flex align-content-center'>
                            <div className='text-start p-5'>
                                <h3 >Books Inventory</h3>
                                <h1 className='text-warning'>Future Generation Books Inventory</h1>
                            </div>
                            <div>
                                <img src="https://img.freepik.com/free-vector/hand-drawn-world-book-day-illustration-with-stack-books_23-2148868267.jpg?t=st=1651580196~exp=1651580796~hmac=3f984d0d554266a9e20ed380d8dfaa7cb8464c90e3c1d7979635ba97b7b3bff3&w=740" alt="" width='400px' height='400px' />
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='bg-dark bg-opacity-75'>
                    <img
                        className="d-block w-100 opacity-100"
                        src="https://cdn.pixabay.com/photo/2016/09/05/15/03/candle-1646765_1280.jpg"
                        alt="First slide"
                        height='600px'
                    />
                    <Carousel.Caption>
                        <div className='bg-danger bg-opacity-50 d-flex align-content-center'>
                            <div className='text-start p-5'>
                                <h3 >Books Inventory</h3>
                                <h1 className='text-warning'>Future Generation Books Inventory</h1>
                            </div>
                            <div>
                                <img src="https://img.freepik.com/free-vector/hand-drawn-world-book-day-illustration-with-stack-books_23-2148868267.jpg?t=st=1651580196~exp=1651580796~hmac=3f984d0d554266a9e20ed380d8dfaa7cb8464c90e3c1d7979635ba97b7b3bff3&w=740" alt="" width='400px' height='400px' />
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;