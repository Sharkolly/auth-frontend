import React from 'react';
import { useState, useEffect } from "react";

const Signin = () => {

    const [data, setData] = useState([]);
    const [user, setUser] = useState({});

    // const dataFetch = async (url) => {
    //     const fetchJson = await fetch(url);
    //     const res = await fetchJson.json();
    //     console.log(fetchJson)
    //     console.log(res);
    //     setData(res);
    // };

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const fetchJson = await fetch('http://localhost:5000/signin', {
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
            // window.location.reload();
        }
        catch (err) {
            console.log(err.message);
        };
    };
    return (
        <div>
            <h1>Sign In Form</h1>
            <div className="form">
                <form onSubmit={(e) => handlePost(e)}>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" onChange={(e) => setUser({ ...user, email: e.target.value })} name="email" placeholder='Email Address' />
                    </div>
                    <div>
                        <label htmlFor="fullname">Password:</label>
                        <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" placeholder='Password' />
                    </div>
                    <div className="btn">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin;