import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = event => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark" className='text-white bg-danger font-size-bold'>
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        {/* <img src={logo} alt="" width='100' height='50' as={Link} to="/home" /> */}
                        <img src="https://cdn-icons-png.flaticon.com/512/1238/1238681.png?w=740" alt="" width='100px' height='100px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="books">Books</Nav.Link>

                        </Nav>
                        {
                            user ? <Nav>
                                <Nav.Link onClick={handleSignOut} as={Link} to="login" >
                                    LOGOUT
                                </Nav.Link>
                            </Nav> : <Nav>

                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;