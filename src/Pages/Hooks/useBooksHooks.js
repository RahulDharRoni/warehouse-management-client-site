import React, { useEffect, useState } from 'react';

const useBooksHooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://shrouded-plateau-55748.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])
    return [books, setBooks]
};

export default useBooksHooks;