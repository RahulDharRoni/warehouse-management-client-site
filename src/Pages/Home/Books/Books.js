import useBooksHooks from '../../Hooks/useBooksHooks';
import Book from '../Book/Book';
import './books.css'

const Books = () => {
    const [books] = useBooksHooks();
    return (
        <div>
            <h1>In Inventory</h1>
            <div className='books-container'>
                {
                    books.map(booksInfo => <Book
                        booksInfo={booksInfo}
                        key={booksInfo._id}>

                    </Book>)
                }

            </div>


        </div>
    );
};

export default Books;