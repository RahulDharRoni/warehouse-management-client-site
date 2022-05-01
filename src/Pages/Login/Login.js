import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleSignUpSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
    }
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
        navigate('/home');
    }
    const OpenSignUp = event => {
        navigate('/signup')
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center'>Login Now </h1>
            <Form onSubmit={handleSignUpSubmit} className='shadow p-3 mb-5 bg-body rounded p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Email" className='rounded shadow p-2 border' />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" name='password' placeholder="Password" className='rounded shadow p-2 border' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <h5 className='text-center mt-3'>Dont Have Account? <small onClick={OpenSignUp} className='text-danger text-decoration-underline'>Create An Account</small></h5>
            </Form>


        </div>
    );
};

export default Login;