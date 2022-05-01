import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { booksId } = useParams();
    // const [details, setDetails] = useState([]);

    // useEffect(() => {
    //     const url = `http://localhost:3000/books/${booksId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setDetails(data));
    // }, [])
    return (
        <div>
            <h2>Welcome to detail: {booksId}</h2>
        </div>
    );
};

export default BookDetails;