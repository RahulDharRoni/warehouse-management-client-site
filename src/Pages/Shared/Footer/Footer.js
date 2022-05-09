import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="red" className="font-small pt-4 mt-4 bg-dark font-light">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6 font-white">
                        <h5 className="title">Books Inventory</h5>
                        <p className='text-secondary'>
                            Here you can use books and Inventory here to organize your footer
                            content.
                        </p>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Home</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Books</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Blogs</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">About</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Menu</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Home</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Books</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Blogs</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">About</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="#"> @RahulDharRoni </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default Footer;