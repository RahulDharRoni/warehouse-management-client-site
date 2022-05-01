import React, { useEffect, useState } from 'react';

const useBooksHooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])
    return [books, setBooks]
};

export default useBooksHooks;