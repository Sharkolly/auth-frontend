import React from 'react'
import { useState, useEffect } from "react";

const SignUp = () => {

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState({});
  const [err, setErr] = useState('');
  const [email, setEmail] = useState('');

  const dataFetch = async (url) => {
    const fetchJson = await fetch(url);
    const res = await fetchJson.json();
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    // dataFetch("http://localhost:5000/");
  }, []);



  const handlePostt = async (e) => {
    console.log(email);
    console.log(JSON.stringify(email))
    e.preventDefault();
    try {
      const fetchJson = await fetch('http://localhost:5000/user', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
          'content-type': 'application/json'
        }
      });
      // const {success} = await fetchJson.json();
      // console.log(success);
      // console.log('hello');
    }
    catch (err) {
      console.log(err.message);
    };
  };
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const fetchJson = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        }
      });
      const { token } = await fetchJson.json();
      console.log(token);
      sessionStorage.setItem('token', JSON.stringify(token));
      const getToken = await fetch('http://localhost:5000/route', {
        headers: {
          Authorization: `${token}`
        }
      });
      const resp = await getToken.json();
      console.log(resp);
      window.location.reload();
    }
    catch (err) {
      console.log(err.message);
      setErr(err.message);
    }
  }
  return (
    <div>
      <h1>Sign Up Form</h1>
      <div className="form">
        <form onSubmit={(e) => handlePost(e)}>
          <div>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" onChange={(e) => setUser({ ...user, fullName: e.target.value })} placeholder='Full Name' />
          </div>
          <div>
            <label htmlFor="fullname">Email Address:</label>
            <input type="text" onChange={(e) => setUser({ ...user, email: e.target.value })} name="email" placeholder='Email Address' />
          </div>
          <div>
            <label htmlFor="fullname">Password:</label>
            <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" placeholder='Password' />
          </div>
          <div>
            <label htmlFor="fullname">Confirm Password:</label>
            <input type="password" onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} placeholder='Confirm Password' />
          </div>
          <div className="btn">
            <button type="submit">Sign Up</button>
          </div>
        </form>

        <p>Next</p>
      </div>

      {/* Subscribe to our Newsletter
      <form onSubmit={(e) => handlePostt(e)}>
        <input type="email" name='email' onChange={((e) => setEmail(e.target.value))} placeholder='Enter your email...' />
        <button type="submit">Subscribe</button>
      </form> */}

    </div>
  )
}

export default SignUp
