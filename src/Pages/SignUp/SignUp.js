
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

// const auth = getAuth(app)

const SignUp = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/home')
    }

    const openLogIn = () => {
        navigate('/login');
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleSignUpSubmit = event => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='w-50 mx-auto my-5'>
            <h1 className='text-center'>Sign Up Now</h1>
            <Form onSubmit={handleSignUpSubmit} className='shadow p-3 mb-5 bg-body rounded p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="name" name='email' placeholder="Name" className='rounded shadow p-2 border' />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="email" className='rounded shadow p-2 border' />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" name='password' placeholder="Password" className='rounded shadow p-2 border' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <h5 className='text-center mt-3'>Already Have An Account? <small onClick={openLogIn} className='text-danger text-decoration-underline'>Login Now</small></h5>
            </Form>

        </div>
    );
};

export default SignUp; <h1>Register Now </h1>