
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber] = useState('');
  const [name] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();


  const adminUsername = 'admin@gmail.com';
  const adminPassword = '12345678';



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (username === adminUsername && password === adminPassword) {
        toast.success('Login successful!');
        setLoginStatus('Login successful!');
        navigate('/admin');
        // After upon successful login
      } else {
        const response = await axios.post('http://localhost:5211/api/User/login', {
          username,
          password,
          phoneNumber,
          name
        });

        // When returns a success message upon successful login
        if (response.data === 'Login successful') {
          toast.success('Login successful!');
          setLoginStatus('Login successful!');
          sessionStorage.setItem('loggedInUser', JSON.stringify({ username }));
          navigate('/homeuser');
          // Further actions upon successful login
        } else {
          setLoginStatus('Invalid credentials');
        }
      }
    } catch (error) {
      toast.error('Login Failed!');
      console.error('Login failed:', error);
      setLoginStatus('Login failed');
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
                <h2 className="py-2 text-white">Login</h2>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <section>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text" value={username} className='form-control' onChange={(e) => setUsername(e.target.value)} />
              <label htmlFor="email" className="form-label">Username/Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="password" className="form-label">Password</label>
            </div>
            <br />
            <button type="submit" className="w-100 btn btn-lg btn btn-success">Login</button>
          </form>
          {/* {loginStatus && <p style={{ color: 'red', fontWeight: 'bold' }}>{loginStatus}</p>} */}
        </section>
      </div>
    </>
  );
};

export default Login;