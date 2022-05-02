import React from 'react';
import { useForm } from "react-hook-form";

const AddBooks = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/books`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Add a Book in the Inventory</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='m-2 py-2' placeholder='Name' {...register('name', { required: true, maxLength: 20 })} />
                <input className='m-2 py-2' placeholder='Price' type="number" {...register('price')} />
                <textarea className='m-2 py-2' placeholder='Description' {...register('description')} />
                <input className='m-2 py-2' placeholder='Photo URL' type="text" {...register('img')} />
                <input className='m-2 bg-danger border py-2 text-white' type="submit" value="Add Books" />
            </form>

        </div>
    );
};

export default AddBooks;