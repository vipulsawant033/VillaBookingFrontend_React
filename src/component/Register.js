
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './navbar';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    // validation
    const [validationErrors, setValidationErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Name is required';
        }

        if (!username) {
            errors.username = 'Email / Username is required';
        }

        if (!phoneNumber) {
            errors.password = 'Password is required';
        }

        if (!password) {
            errors.password = 'Password is required';
        }
        else if (password.length < 8) {
            errors.password = 'Password should be at least 8 characters long';
        }
        // else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
        //     errors.password = 'Password should contain at least one uppercase and one lowercase letter';
        // }


        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
            try {
                // Send registration data to the backend
                const response = await axios.post('http://localhost:5211/api/User/register', {
                    username,
                    password,
                    phoneNumber,
                    name
                });

                if (response.status === 200) {
                    toast.success('Registration successful');
                    console.log(response.data);
                    navigate('/home');
                }
            } catch (error) {
                console.error('Registration failed:', error);
                toast.error('Registration failed');
            }
        } else {
            setValidationErrors(errors);
        }
    };

    return (
        <>
        <Navbar></Navbar>
            <ToastContainer />
            <div className="container pt-5">
                <div className="card shadow border">
                    <div className="card-header bg-success bg-gradient ml-0 py-4">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="py-2 text-white">Registration</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className='row pt-3'>
                            <div className="form-floating mb-3 col-md-6">
                                <input
                                    type="text"
                                    value={name}
                                    className='form-control'
                                    onChange={(e) => setName(e.target.value)}

                                />
                                <label htmlFor="name" className="ms-2 text-muted">Name</label>
                                {validationErrors.name && <span className="text-danger">{validationErrors.name}</span>}
                            </div>
                            <div className="form-floating mb-3 col-md-6">
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    className='form-control'
                                    onChange={(e) => setPhoneNumber(e.target.value)}

                                />
                                <label htmlFor="name" className="ms-2 text-muted">Phone Number</label>
                                {validationErrors.phoneNumber && <span className="text-danger">{validationErrors.phoneNumber}</span>}
                            </div>
                        </div>
                        <div className='row pt-3'>
                            <div className="form-floating mb-3 col-md-6">
                                <input
                                    type="text"
                                    value={username}
                                    className='form-control'
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label htmlFor="name" className="ms-2 text-muted">Email</label>
                                {validationErrors.username && <span className="text-danger">{validationErrors.username}</span>}
                            </div>
                            <div className="form-floating mb-3 col-md-6">
                                <input
                                    type="password"
                                    value={password}
                                    className='form-control'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="name" className="ms-2 text-muted">Password</label>
                                {validationErrors.password && <span className="text-danger">{validationErrors.password}</span>}
                            </div>
                        </div>
                        <br />
                        <button type="submit" className="w-50 btn btn-lg btn btn-success">Register</button>
                    </form>
                    <br /><br />
                </section>
            </div>
        </>
    );
};

export default Register;