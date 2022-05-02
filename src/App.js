import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddBooks from './Pages/AddBooks/AddBooks';
import BookDetails from './Pages/Home/BookDetails/BookDetails';
import Books from './Pages/Home/Books/Books';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';

// const auth = getAuth(app)

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addbooks" element={<AddBooks />} />

        <Route path="/books/:booksId" element={<BookDetails />} />
        {/* <Route path="/signup" element={
          <RequireAuth>
            <BookDetails></BookDetails>
          </RequireAuth>} /> */}
      </Routes>
    </div>
  );
}

export default App;
