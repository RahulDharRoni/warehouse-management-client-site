import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeBooks from '../HomeBooks/HomeBooks';
import useBooksHooks from '../Hooks/useBooksHooks';
import Footer from '../Shared/Footer/Footer';
import './home.css'
import Slider from './Slider';

const Home = () => {
    const [books] = useBooksHooks();
    const navigate = useNavigate();
    const handleDelete = () => {
        navigate('/deletebooks')
    }
    const handleAddBook = () => {
        navigate('/addbooks')
    }
    return (
        <div className='mx-auto'>
            <Slider></Slider>

            <div className='books-container'>
                {
                    books.slice(0, 6).map(booksInfo => <HomeBooks key={booksInfo._id} booksInfo={booksInfo}></HomeBooks>)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleDelete} className='bg-success text-white border py-2 px-5 rounded'>Delete Inventory</button>
                <button onClick={handleAddBook} className='bg-danger text-white border py-2 px-5 rounded'>Add More Books</button>
            </div>

        </div>
    );
};

export default Home;