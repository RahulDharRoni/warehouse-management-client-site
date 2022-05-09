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
                            <div className='p-3'>
                                <img src="https://cdn-icons-png.flaticon.com/512/1243/1243254.png?w=740" alt="" width='300px' height='300px' />
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
                        <div className='bg-dark bg-opacity-25 d-flex align-content-center'>
                            <div className='text-start p-5'>
                                <h3 >Books Inventory</h3>
                                <h1 className='text-warning'>Future Generation Books Inventory</h1>
                            </div>
                            <div className='p-3'>
                                <img src="https://cdn-icons-png.flaticon.com/512/1238/1238113.png?w=740" alt="" width='300px' height='300px' />
                            </div>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;